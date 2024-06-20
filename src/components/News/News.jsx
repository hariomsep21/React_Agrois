import style from "../News/News.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faComments } from "@fortawesome/free-solid-svg-icons";
import FirstScreen from "../FirstScreen/FirstScreen";
import Footer from "../Footer/Footer";

const cardData = [
  {
    imgSrc: "/photos/Bringing Food Production Back To Cities.png",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 1,
    text: "Bringing Food Production Back To Cities",
  },
  {
    imgSrc: "/photos/The Future of Farming, Smart Irrigation Solutions.png",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 0,
    text: "The Future of Farming, Smart Irrigation Solutions",
  },
  {
    imgSrc: "/photos/Agronomy and relation to Other Sciences.png",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 0,
    text: "Agronomy and relation to Other Sciences",
  },
  {
    imgSrc: "/photos/We grow products with the organic farming.png",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 0,
    text: "We grow products with the organic farming",
  },
  {
    imgSrc: "/photos/A Quick Solution to Low Milk Production in Zimbabwe.png",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 0,
    text: "A Quick Solution to Low Milk Production in Zimbabwe",
  },
  {
    imgSrc: "/photos/Winter wheat harvest organic gather nice moment.png",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 0,
    text: "Winter wheat harvest organic gather nice moment",
  },
];

const News = () => {
  return (
    <>
      <section className={style.section1}>
        <FirstScreen subHeading="Home / News Grid" heading="News Grid" />
        <div className={`${style.cards} container`}>
          <div className={`row row-cols-1 row-cols-md-3 g-5 ${style.cardsDiv}`}>
            {cardData.map((card, index) => (
              <div className="col" key={index}>
                <div className={`${style.card}`}>
                  <div className={style.date}>
                    <p>{card.date}</p>
                  </div>
                  <img
                    src={card.imgSrc}
                    className="card-img-top"
                    alt={card.text}
                  />
                  <div className="card-body">
                    <div className={style.author}>
                      <div className={style.authorName}>
                        <FontAwesomeIcon
                          className={style.FontAwesomeIcon}
                          icon={faUserCircle}
                        />
                        <p>by {card.author}</p>
                      </div>
                      <div className={style.comment}>
                        <FontAwesomeIcon
                          className={style.FontAwesomeIcon}
                          icon={faComments}
                        />
                        <p>
                          {card.comments} comment
                          {card.comments !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>

                    <div className={style.paragraph}>
                      <p className="card-text">{card.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
