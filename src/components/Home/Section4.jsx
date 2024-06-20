import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import styles from '../Home/Section4.module.css'; // Import the CSS module for styling

const Section4 = () => {
  return (
    <section className={styles.sectionFour}>
      <div className={`${styles.articleDiv} row container`}>
        <main className={styles.main}>
          <div className={`col-lg-3 col-md-6 col-sm-12 ${styles.article1}`}>
            Agriculture Products
          </div>
          <div className={`col-lg-3 col-md-6 col-sm-12 ${styles.article2}`}>
            Projects Completed
          </div>
          <div className={`col-lg-3 col-md-6 col-sm-12 ${styles.article3}`}>
            Satisfied Clients
          </div>
          <div className={`col-lg-3 col-md-6 col-sm-12 ${styles.article4}`}>
            Experts Farmers
          </div>
        </main>
      </div>

      <div className={styles.section4Img}>
        <h3>
          Agriculture Matters to the Future of Development
        </h3>
        <div className={styles.videoBtn}>

          <div className={styles.play}>
            <FontAwesomeIcon icon={faPlay} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section4;
