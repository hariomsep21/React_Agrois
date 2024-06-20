import React from "react";
import style from "./ServiceCard.module.css"; // Import the CSS module for styling

const ServiceCard = ({ image, icon, title }) => {
  return (
    <div className={`card ${style.serviceCard}`}>
      <img
        src={image}
        className={`card-img-top ${style.cardImg}`}
        alt={title}
      />
      <div className={`card-body ${style.cardBody}`}>
        <div className={style.about}>
          <img src={icon} className={style.icon} alt="Service Icon" />
          <button className={`btn ${style.readMoreBtn}`}>Read More</button>
          <h5 className={`card-title ${style.heading}`}>{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
