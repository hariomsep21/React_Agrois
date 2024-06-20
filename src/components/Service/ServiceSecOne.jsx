import React from "react";
import FirstScreen from "../FirstScreen/FirstScreen";
import style from "../Service/ServiceSecOne.module.css";

const ServiceSecOne = () => {
  const cardDetails = [
    {
      imgSrc: "/photos/We grow products with the organic farming.png",
      iconSrc: "/photos/icon1_services.png",
      title: "Agriculture Products",
      cardClass: "card-1",
    },
    {
      imgSrc: "/photos/The Future of Farming, Smart Irrigation Solutions.png",
      iconSrc: "/photos/icon2_services.png",
      title: "Organic Products",
      cardClass: "card-2",
    },
    {
      imgSrc: "/photos/fresh-vegetable_services.png",
      iconSrc: "/photos/product-2-icon-home5.png",
      title: "Fresh Vegetables",
      cardClass: "card-3",
    },
    {
      imgSrc: "/photos/dairy-product_services.png",
      iconSrc: "/photos/icon4_services.png",
      title: "Dairy Products",
      cardClass: "card-4",
    },
  ];

  return (
    <>
      <section className={style.section_1}>
        <FirstScreen subHeading="Home / Services" heading="Services" />

        <div className={`container ${style.products}`}>
          <div className="row row-cols-1 row-cols-md-4 cards-div">
            {cardDetails.map((card, index) => (
              <div className="col" key={index}>
                <div className={`card ${style[card.cardClass]}`}>
                  <img
                    src={card.imgSrc}
                    className={`card-img-top ${style.card_img}`}
                    alt={card.title}
                  />
                  <div className={`card-body ${style.card_body}`}>
                    <div className={style.about}>
                      <img
                        src={card.iconSrc}
                        className={style.icon_1}
                        alt={card.title}
                      />
                      <button className={`btn ${style.readMoreBtn}`}>
                        Read More
                      </button>
                      <h5 className={`card-title ${style.heading}`}>
                        {card.title}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={style.services_partner}>
          <img
            src="/photos/services-partner.png"
            className="img-fluid rounded-start"
            alt="title-img"
          />
        </div>
      </section>
    </>
  );
};

export default ServiceSecOne;
