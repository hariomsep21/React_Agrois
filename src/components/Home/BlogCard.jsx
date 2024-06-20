import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faComments } from '@fortawesome/free-solid-svg-icons';
import styles from '../Home/BlogCard.module.css';

const BlogCard = ({ image, date, author, comments, text }) => {
  return (
    <div className={`card ${styles.card}`}>
      <img
        src={image}
        className="card-img-top"
        alt="Article"
      />
      <div className={`card-body ${styles.cardBody}`}>
        <span className={styles.date}>
          <p>{date}</p>
        </span>

        <div className={styles.author}>
          <div className={styles.authorName}>
            <FontAwesomeIcon className={styles.faComments} icon={faCircleUser} />
            <p>{author}</p>
          </div>
          <div className={styles.comment}>
            <FontAwesomeIcon className={styles.faComments} icon={faComments} />
            <p>{comments}</p>
          </div>
        </div>

        <div className={styles.paragraph}>
          <p className={`card-text ${styles.cardText}`}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
