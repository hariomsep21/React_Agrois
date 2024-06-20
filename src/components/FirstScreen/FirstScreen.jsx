import style from "../FirstScreen/FirstScreen.module.css";

const FirstScreen = (props) => {
  return (
    <>
      <div className={style.titleContainer}>
        <h6 className={style.subHeading}>{props.subHeading}</h6>
        <h3 className={style.heading}>{props.heading}</h3>
      </div>
    </>
  );
};
export default FirstScreen;
