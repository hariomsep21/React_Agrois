import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../Home/OurTestimonial.module.css"; // Import the CSS module for styling

const OurTestimonial = () => {
  return (
    <section className={styles.sectionSix}>
      <div className={`${styles.testimonial} row container`}>
        <div className="col col-lg-5 col-md-12">
          <div className={styles.ourTestimonial}>
            <p className={styles.subHeading}>Our Testimonials</p>
            <h2 className={styles.heading}>
              What They're Talking About Agrios
            </h2>
            <div className={styles.paragraph}>
              <p>
                There are many variations of passages of available but the
                majority have suffered alteration in some form by injected humor
                or random word which don't look even.
              </p>
            </div>

            <div className={styles.sectionSixBtn}>
              <button className={`${styles.testimonialBtn} btn`}>
                View All Testimonials
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-12">
          <div className={styles.content}>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-9">
                  <div className={`card-body ${styles.blogBody}`}>
                    <p className={`card-text ps-4 pt-3 ${styles.cardText}`}>
                      There are many variations of passages of available but the
                      majority have suffered alteration in some form by injected
                      humor or random word which don't look even.
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <h5
                          className={`card-title ps-4 pb-3 pt-3 ${styles.cardTitle}`}
                        >
                          Bonnie Tolbert
                        </h5>
                      </div>
                      <div className={`col-lg-6 ${styles.star}`}>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`col-md-3 ${styles.imgDiv}`}>
                  <img
                    src="/photos/circle.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurTestimonial;
