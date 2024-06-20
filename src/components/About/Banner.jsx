import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import styles from "../About/Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.section2}>
      <div className={styles.video}>
        <span className={styles.circle}>
          <div className={styles.faPlay} >
            <FontAwesomeIcon icon={faPlay} />
          </div>
        </span>
        <h3>ECO-Friendly Products can be Made from Scratch</h3>
      </div>
      <div className={styles.section2Content}>
        <div className={styles.articleDiv}>
          <div className={`${styles.article1} col-lg-3 col-md-6 col-sm-12`}>Agriculture Products</div>
          <div className={`${styles.article2} col-lg-3 col-md-6 col-sm-12`}>Projects Completed</div>
          <div className={`${styles.article3} col-lg-3 col-md-6 col-sm-12`}>Satisfied Clients</div>
          <div className={`${styles.article4} col-lg-3 col-md-6 col-sm-12`}>Experts Farmers</div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
