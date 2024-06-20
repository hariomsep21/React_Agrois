import styles from "../Contact/Contact.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormContact from "./FormContact";
import FirstScreen from "../FirstScreen/FirstScreen";
import Footer from "../Footer/Footer";

const contactCards = [
  {
    title: "About",
    text: "Lorem ipsum is simply free text used by copytypinh refreshing. Neque porro est qui",
    className: styles.card_1,
  },
  {
    title: "Contact",
    text: "+1- (246) 333-0079 support@agrios.com \nMon - Fri: 7:00 am - 6:00 pm",
    className: styles.card_2,
  },
  {
    title: "Address",
    text: "66 Broklun Road Golden Street, New Your United States of Ameriaca",
    className: styles.card_3,
  },
];

const Contact = () => {
  return (
    <>
      {" "}
      <section className={styles.section_1}>
        <FirstScreen subHeading="Home / Contact" heading="Contact" />

        <div className={`container ${styles.title_cards}`}>
          <div className="row">
            {contactCards.map((card, index) => (
              <div
                key={index}
                className={`col col-lg-4 col-md-12 ${card.className}`}
              >
                <div className={`card ${styles.card}`}>
                  <div className="card-body">
                    <h5 className={`card-title ${styles.heading}`}>
                      {card.title}
                    </h5>
                    <p
                      className={`card-text ${styles.paragraph} ${
                        styles[`para_${index + 1}`]
                      }`}
                    >
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <FormContact />
      </section>
    </>
  );
};

export default Contact;
