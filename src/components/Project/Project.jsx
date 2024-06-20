import FirstScreen from "../FirstScreen/FirstScreen";
import styles from "../Project/Project.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/Footer";

const projects = [
  {
    imgSrc: "/photos/projects-1.png",
    title: "Easy Harvesting",
  },
  {
    imgSrc: "/photos/projects-2.png",
    title: "Agriculture Farming",
  },
  {
    imgSrc: "/photos/projects-3.png",
    title: "Ecological Farming",
  },
  {
    imgSrc: "/photos/projects-4.png",
    title: "Organic Solutions",
  },
  {
    imgSrc: "/photos/projects-5.png",
    title: "Fresh Products",
  },
  {
    imgSrc: "/photos/projects-6.png",
    title: "Healthy Food",
  },
];

const Project = () => {
  return (
    <>
      {" "}
      <section className={styles.section}>
        <FirstScreen subHeading="Home / Projects" heading="Projects" />

        <div className={`container ${styles.cards}`}>
          <div
            className={`row row-cols-1 row-cols-md-3 g-3 ${styles.cards_div}`}
          >
            {projects.map((project, index) => (
              <div className="col" key={index}>
                <div className={`card card-${index + 1} ${styles.card}`}>
                  <img
                    src={project.imgSrc}
                    className="card-img-top"
                    alt={project.title}
                  />
                  <div className="card-body card-img-overlay">
                    <p className={styles.card_heading}>{project.title}</p>
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

export default Project;
