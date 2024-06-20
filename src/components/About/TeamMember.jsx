// TeamMembers.js
import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import style from "../About/TeamMember.module.css"; // Import the CSS for the team members section

const teamMembers = [
  {
    image: "/photos/kevin-smith.png",
    name: "Kevin Smith",
    title: "Farmer",
  },
  {
    image: "/photos/jessica brown.png",
    name: "Jessica Brown",
    title: "Farmer",
  },
  {
    image: "/photos/david martin.png",
    name: "David Martin",
    title: "Farmer",
  },
];

const TeamMember = () => {
  return (
    <section className={style.section4}>
      <div className={style.teamMember}>
        <p className={style.subHeading}>Team Members</p>
        <h2 className={style.heading}>Meet Our Farmers</h2>
      </div>
      <div className={`container ${style.farmers}`}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              image={member.image}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
