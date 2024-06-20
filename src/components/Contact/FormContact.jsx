import { useRef } from "react";
import styles from "../Contact/FormContact.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormContact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const isValidate = () => {
    let isProceeded = true;
    let errorMessage = "Please enter the value in: ";
    if (!nameRef.current.value) {
      isProceeded = false;
      errorMessage += "Name ";
    }
    if (!emailRef.current.value) {
      isProceeded = false;
      errorMessage += "Email ";
    }
    if (!isProceeded) {
      toast.warning(errorMessage.trim());
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
      if (!emailRegex.test(emailRef.current.value)) {
        isProceeded = false;
        toast.warning("Please enter a valid email");
      }
    }
    return isProceeded;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let regObj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    if (isValidate()) {
      fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          if (res.ok) {
            toast.success("Request Done");
          } else {
            toast.error("Submission failed");
            console.log("Submission failed");
          }
        })
        .catch((err) => {
          toast.error("Failed: " + err.message);
          console.log(err.message);
        });
    }
  };

  return (
    <div className={styles.form_div}>
      <ToastContainer />
      <div className={`card ${styles.card}`} style={{ border: "none" }}>
        <div className="row g-0">
          <div className="col col-lg-5">
            <img
              src="/photos/location-img.png"
              className="img-fluid rounded-start"
              alt="Location"
            />
          </div>

          <div className="col col-lg-7">
            <div className={`card-body ${styles.card_body}`}>
              <div className={styles.head_div}>
                <p className={styles.sub_heading}>Contact us</p>
                <h2 className={styles.heading}>Write a Message</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className={styles.form_details}>
                  <div className={styles.detail_1}>
                    <input
                      className={styles.name}
                      type="text"
                      placeholder="Name"
                      ref={nameRef}
                    />
                    <input
                      ref={emailRef}
                      className={styles.email}
                      type="email"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className={styles.detail_2}>
                    <textarea
                      ref={messageRef}
                      className={styles.text}
                      rows="7"
                      placeholder="Write a Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-secondary ${styles.send}`}
                  >
                    Send a Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
