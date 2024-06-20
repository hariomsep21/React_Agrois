// Testimonials.js
import React from "react";
import TestimonialCard from "./TestimonialCard";
import style from "../About/Testimonial.module.css"; // Import the CSS for the Testimonials section

const testimonials = [
  {
    image: "/photos/customer-1.png",
    name: "Bonnie Tolbert",
    text: "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.",
    stars: 5,
  },
  {
    image: "/photos/customer-2.png",
    name: "Sarah Albert",
    text: "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.",
    stars: 5,
  },
];

const Testimonial = () => {
  return (
    <section className={style.section3}>
      <div className={style.head}>
        <p className={style.subHeading}>Our Testimonials</p>
        <h2 className={style.heading}>What They Say</h2>
      </div>
      <div className={`${style.customer} container`}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            text={testimonial.text}
            stars={testimonial.stars}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
