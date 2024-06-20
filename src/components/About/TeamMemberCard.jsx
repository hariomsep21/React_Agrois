// TeamMemberCard.js
import React from "react";
import style from "../About/TeamMemberCard.module.css"; // Import the CSS for the card

const TeamMemberCard = ({ image, name, title }) => {
  return (
    <div className={`card ${style.teamMemberCard}`}>
      <img
        src={image}
        className={`card-img ${style.farmerImg}`}
        alt={`${name}`}
      />
      <div className={`card-img-overlay ${style.authorName}`}>
        <aside className={style.icon}>
          <img src="/photos/sharing_Icon.png" alt="Sharing Icon" />
        </aside>
        <div className={style.detail}>
          <h5 className={`card-title ${style.CardTitle}`}>{name}</h5>
          <p className={`card-text ${style.CardText}`}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
