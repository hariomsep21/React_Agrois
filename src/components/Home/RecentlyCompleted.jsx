import style from "../Home/RecentlyCompleted.module.css";
const RecentlyCompleted = () => {
  return (
    <section className={`${style.sectionFive} container`}>
      <div className={style.head}>
        <p className={style.subHeading}>Recently Completed</p>
        <h2 className={style.heading}>Explore Projects</h2>
      </div>

      <div className={style.projectImg}>
        <img src="/photos/project-1.png" />
        <img src="/photos/project-2.png" />
        <img src="/photos/project-3.png" />
        <img src="/photos/project-4.png" />
      </div>
    </section>
  );
};
export default RecentlyCompleted;
