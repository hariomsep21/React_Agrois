import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Registeration = () => {
  const [gender, genderchange] = useState("female");

  const idRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const countryRef = useRef();
  const addressRef = useRef();

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    if (idRef.current.value === null || idRef.current.value === "") {
      isproceed = false;
      errormessage += " Username";
    }
    if (nameRef.current.value === null || nameRef.current.value === "") {
      isproceed = false;
      errormessage += " Fullname";
    }
    if (
      passwordRef.current.value === null ||
      passwordRef.current.value === ""
    ) {
      isproceed = false;
      errormessage += " Password";
    }
    if (emailRef.current.value === null || emailRef.current.value === "") {
      isproceed = false;
      errormessage += " Email";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailRef.current.value)
      ) {
      } else {
        isproceed = false;
        toast.warning("Please enter the valid email");
      }
    }
    return isproceed;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = {
      id: idRef.current.value,
      name: nameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      country: countryRef.current.value,
      address: addressRef.current.value,
      gender,
    };
    if (IsValidate()) {
      //console.log(regobj);
      fetch("http://localhost:5000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Registered successfully.");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    }
  };
  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-header">
              <h1>User Registeration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      User Name <span className="errmsg">*</span>
                    </label>
                    <input ref={idRef} className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password <span className="errmsg">*</span>
                    </label>
                    <input
                      ref={passwordRef}
                      type="password"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Full Name <span className="errmsg">*</span>
                    </label>
                    <input ref={nameRef} className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email <span className="errmsg">*</span>
                    </label>
                    <input ref={emailRef} className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Phone <span className="errmsg"></span>
                    </label>
                    <input ref={phoneRef} className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Country <span className="errmsg">*</span>
                    </label>
                    <select ref={countryRef} className="form-control">
                      <option value="india">India</option>
                      <option value="usa">USA</option>
                      <option value="singapore">Singapore</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      ref={addressRef}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <br></br>
                    <input
                      type="radio"
                      checked={gender === "male"}
                      onChange={(e) => genderchange(e.target.value)}
                      name="gender"
                      value="male"
                      className="app-check"
                    ></input>
                    <label>Male</label>
                    <input
                      type="radio"
                      checked={gender === "female"}
                      onChange={(e) => genderchange(e.target.value)}
                      name="gender"
                      value="female"
                      className="app-check"
                    ></input>
                    <label>Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>{" "}
              |
              <Link to={"/login"} className="btn btn-danger">
                Close
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registeration;
