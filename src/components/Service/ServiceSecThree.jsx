import style from "../Service/ServiceSecThree.module.css";

const ServiceSecThree = () => {
  return (
    <>
      {" "}
      <section className={style.section_3}>
        <div className={style.last_title}>
          <div className={style.head}>
            <p className={style.sub_heading}>Agriculture Market Leaders</p>
            <p className={style.heading}>
              We’re popular in agriculture market globally
            </p>
          </div>
          <div className="section-3-btn">
            <button className={` btn ${style.discoverMore_btn}`}>
              Discover More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default ServiceSecThree;
