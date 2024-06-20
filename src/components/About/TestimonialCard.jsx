// TestimonialCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import style from './TestimonialCard.module.css'; // Import the CSS for the card

const TestimonialCard = ({ image, name, text, stars }) => {
  return (
    <div className={`card mb-3 ${style.testimonialCard}`}>
      <div className="row g-0">
        <div className="col-md-12">
          <div className={`card-body ${style.customerContent}`}>
            <img src={image} alt="Customer" className={style.customerImage} />
            <div className={style.circle}>_ _</div>
            <div className={style.aboutCustomer}>
              <p className="card-text">{text}</p>
              <div className="row">
                <div className={`col-lg-6 ${style.star}`}>
                  {Array(stars).fill().map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className={style.starIcon} />
                  ))}
                </div>
                <div className={`col-lg-6 ${style.customerName}`}>
                  <h5 className="card-title ps-4 pb-3 pt-3">{name}</h5>
                  <p>Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
