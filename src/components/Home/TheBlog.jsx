import React from "react";
import BlogCard from "./BlogCard";
import styles from "../Home/TheBlog.module.css";

const TheBlog = () => {
  const cardsData = [
    {
      image: "/photos/article-1.png",
      date: "05 July 2022",
      author: "Kevin Martin",
      comments: "1 comment",
      text: "Bringing Food Production Back To Cities",
    },
    {
      image: "/photos/article-2.png",
      date: "05 July 2022",
      author: "Kevin Martin",
      comments: "0 comment",
      text: "The Future of Farming, Smart Irrigation Solutions",
    },
    {
      image: "/photos/article-3.png",
      date: "05 July 2022",
      author: "Kevin Martin",
      comments: "0 comment",
      text: "Agronomy and relation to Other Sciences",
    },
  ];

  return (
    <section className={styles.seven8}>
      <div className={styles.TheBlog}>
        <div className={styles.blog}>
          <p className={styles.subHeading}>From the Blog</p>
          <h2 className={styles.heading}>News & Articles</h2>
        </div>

        <div className={`container ${styles.cards}`}>
          <div className={`row row-cols-1 row-cols-md-3 ${styles.cardsDiv}`}>
            {cardsData.map((card, index) => (
              <div className="col" key={index}>
                <BlogCard
                  image={card.image}
                  date={card.date}
                  author={card.author}
                  comments={card.comments}
                  text={card.text}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheBlog;
