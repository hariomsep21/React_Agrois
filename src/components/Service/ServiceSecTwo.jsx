import style from "../Service/ServiceSecTwo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const cardDetails = [
  {
    id: 1,
    title: "Quality Standards",
    image: "/photos/service-1.png",
    alt: "Quality Standards",
  },
  {
    id: 2,
    title: "Organic Farming",
    image: "/photos/service-2.png",
    alt: "Organic Farming",
  },
  {
    id: 3,
    title: "Agriculture Products",
    image: "/photos/service-3.png",
    alt: "Agriculture Products",
  },
];

const ServiceSecTwo = () => {
  return (
    <>
      <section className={style.section_2}>
        <div className={style.section_2_img}>
          <h3>Agriculture Matters to the Future of Development</h3>
          <div className={style.video_btn}>
            <span className={style.circle}>
              <div className={style.FontAwesomeIcon}>
                <FontAwesomeIcon icon={faPlay} />
              </div>
            </span>
            <p>Watch our video</p>
          </div>
        </div>

        <div className={`container ${style.services}`}>
          {cardDetails.map((card) => (
            <div
              key={card.id}
              className={`card col col-lg-4 col-md-12 service_${card.id}`}
            >
              <div className={style.card_body}>
                <div className={style.paragraph}>
                  <p>{card.title}</p>
                </div>
              </div>
              <img
                src={card.image}
                className="card-img-bottom"
                alt={card.alt}
              />
            </div>
          ))}
        </div>

        <div className={`container ${style.what_we_do}`}>
          <div className="row">
            <div className={`col col-lg-6 col-md-12 ${style.section_two_img}`}>
              <div className={style.uncle_img_div}>
                <div className={style.circle}></div>
                <div>
                  <img
                    src="/photos/service-uncle-img.png"
                    className={`img-fluid rounded-start ${style.uncle_img}`}
                  />
                </div>
              </div>
            </div>

            <div
              className={`col col-lg-6 col-md-12 ${style.section_two_content}`}
            >
              <div className={style.content}>
                <p className={style.sub_heading}>What We Do</p>
                <h2 className={style.heading}>Healthy Food for Good Growth</h2>
              </div>

              <div className={style.paragraph}>
                <p>
                  Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse
                  suscipit sagittis leo sit met entum estibu dignissim posuere
                  cubilia durae. Leo sit met entum cubilia crae onec.
                </p>

                <p>
                  Lorem ipsum dolor sit amet adipiscing elit. Nulla placerat
                  posuere dui. Pellentesque venenatis sem non lacus ac auctor.
                </p>
              </div>

              <div className={style.icons}>
                <div className="icon_1">
                  <img src="/photos/services-icon-1.png" alt="" />
                </div>
                <div className="icon_2">
                  <img src="/photos/services-icon-2.png" alt="" />
                </div>
                <div className="icon_3">
                  <img src="/photos/services-icon-3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSecTwo;
