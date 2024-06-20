import styles from "../Home/Features.module.css"
const Features = ({ number, title, description, imgSrc }) => {
  return (
    <div className={`row ${styles.feature}`}>
      <div className={styles.featureBox}>
        <h3 className={styles.headline}>Feature {number}</h3>
        <h2 className={styles.description}>{description}</h2>
        <img src={imgSrc} alt={`Feature ${number}`} />
      </div>
    </div>
  );
};


export default Features