import React from "react";
import style from "../Home/Introduction.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Introduction = () => {
  return (
    <section className="container">
      <div className={style.sectionTwo}>
        <div className="row">
          <div className={`${style.sectionTwoImg} col col-lg-6 col-md-12`}>
            <div className={style.tractorImgDiv}>
              <img
                className={style.tractorImg}
                src="/photos/image-01.webp.png"
                alt="Tractor"
              />
            </div>

            <div className={style.manImgDiv}>
              <img
                className={style.manImg}
                src="/photos/image-02.webp.png"
                alt="Man"
              />
            </div>
          </div>

          <div className={`${style.sectionTwoContent} col col-lg-6 col-md-12`}>
            <div className={style.ourIntroduction}>
              <p className={style.subHeading}>Our Introductions</p>
              <h2 className={style.heading}>
                Agriculture & Organic Product Farm
              </h2>
            </div>

            <div className={style.title}>
              <h3>Agrios is the largest global organic farm.</h3>
            </div>

            <div className={style.paragraph}>
              <p>
                There are many variations of passages of lorem ipsum available
                but the majority have suffered alteration in some form by
                injected humor or random word which don’t look even.
              </p>
            </div>

            <div className={style.icon}>
              <div className={style.iconOne}>
                <img
                  src="/photos/vegetable-basket.png"
                  alt="Vegetable Basket"
                />
                <p>Growing fruits vegetables</p>
              </div>
              <div className={style.iconTwo}>
                <img
                  src="/photos/magnifying&plant.png"
                  alt="Magnifying Glass and Plant"
                />
                <p>Tips for ripening your fruits</p>
              </div>
            </div>

            <div className={style.points}>
              <div className={style.point1}>
                <p>
                  <FontAwesomeIcon className={style.tick} icon={faCheck} />{" "}
                  Lorem Ipsum is not simply random text.
                </p>
              </div>
              <div className={style.point2}>
                <p>
                  <FontAwesomeIcon className={style.tick} icon={faCheck} />{" "}
                  Making this the first true generator on the internet.
                </p>
              </div>
            </div>

            <div className={style.sectionTwoBtn}>
              <button className={`${style.discoverMoreBtn} btn`}>
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
