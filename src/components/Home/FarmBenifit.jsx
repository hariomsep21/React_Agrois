import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleUser,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../Home/FarmBenifit.module.css";
const FarmBenifit = () => {
  return (
    <section className={styles.sectionSeven}>
      <div className={styles.sectionSevenDiv}>
        <div className={`card container ${styles.whyChooseCard}`}>
          <div className="row g-0">
            <div className="col col-lg-7 col-md-6">
              <img
                src="/photos/section-7.png"
                className="img-fluid rounded-start"
                alt="Section 7"
                style={{ height: "100%" }}
              />
            </div>
            <div className={`col col-lg-5 col-md-6 ${styles.whyChoose}`}>
              <div className={`card-body ${styles.cardBody}`}>
                <div className={styles.headDiv}>
                  <p className={styles.subHeading}>Our Farm Benefits</p>
                  <h2 className={styles.heading}>Why Choose Agrios Market</h2>
                  <div className={styles.paragraph}>
                    <p>
                      There are many variations of passages of available but the
                      majority have suffered alteration in some form by injected
                      humor or random word which don't look even.
                    </p>
                  </div>
                </div>

                <div className={styles.facility}>
                  <FontAwesomeIcon className={styles.faCheck} icon={faCheck} />
                  <div>
                    <h3>Quality Organic Food</h3>
                    <p>
                      There are variations You need to be sure there is nothing
                      hidden in the middle of text.
                    </p>
                  </div>
                </div>

                <div className={`${styles.facility} ${styles.facility2}`}>
                  <FontAwesomeIcon className={styles.faCheck} icon={faCheck} />
                  <div>
                    <h3>Professional Farmers</h3>
                    <p>
                      There are variations You need to be sure there is nothing
                      hidden in the middle of text.
                    </p>
                  </div>
                </div>

                <div className={`${styles.facility} ${styles.facility3}`}>
                  <FontAwesomeIcon className={styles.faCheck} icon={faCheck} />
                  <div>
                    <h3>Quality Products</h3>
                    <p>
                      There are variations You need to be sure there is nothing
                      hidden in the middle of text.
                    </p>
                  </div>
                </div>

                <div>
                  <button className={`btn ${styles.discoverMoreBtn}`}>
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmBenifit;
