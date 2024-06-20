import React from "react";
import styles from "../Home/Banner.module.css";
import Features from "./Features";

const Banner = () => {
  const featureData = [
    {
      number: 1,
      title: "Feature 01",
      description: "We're using a new technology",
      imgSrc: "/photos/container.png",
    },
    {
      number: 2,
      title: "Feature 02",
      description: "Good in smart organic services",
      imgSrc: "/photos/container (1).png",
    },
    {
      number: 3,
      title: "Feature 03",
      description: "Reforming in the systems",
      imgSrc: "/photos/container (2).png",
    },
  ];

  return (
    <section className={styles.sectionOne}>
      <div className={styles.hatMan}>
        <div className={`${styles.leafDiscover} container`}>
          <div className={styles.agricultureTxt}>
            <p className={styles.agriosFarming}>Welcome to agrios farming</p>
            <p className={styles.heading}>
              Agriculture <b style={{ color: "#eec044" }}>&</b>
              <img src="/photos/leaf-01.webp.png" alt="Leaf" />
              Eco Farming
            </p>
          </div>
          <p className={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className={styles.discoverMoreBtn}>Discover More</button>
          <img src="/photos/leaf.png" className={styles.leafImg} alt="Leaf" />
        </div>
      </div>

      <div className={styles.features}>
        {featureData.map((feature) => (
          <Features
            key={feature.number}
            number={feature.number}
            title={feature.title}
            description={feature.description}
            imgSrc={feature.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
