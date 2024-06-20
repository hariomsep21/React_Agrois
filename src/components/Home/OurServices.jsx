import style from "../Home/OurServices.module.css";
import ServiceCard from "./ServiceCard";
const services = [
  {
    image: "/photos/home3-section4-img1.png",
    icon: "/photos/icon1_services.png",
    title: "Agriculture Products",
  },
  {
    image: "/photos/organicProducts_home1.png",
    icon: "/photos/icon2_services.png",
    title: "Organic Products",
  },
  {
    image: "/photos/freshVegetable_home1.png",
    icon: "/photos/product-2-icon-home5.png",
    title: "Fresh Vegetables",
  },
  {
    image: "/photos/jessica brown.png",
    icon: "/photos/icon4_services.png",
    title: "Dairy Products",
  },
];

const OurServices = () => {
  return (
    <section className={style.sectionThree}>
      <div className={`container-fluid ${style.head}`}>
        <p className={style.subHeading}>Our Services</p>
        <h2 className={style.heading}>What We Offer</h2>
      </div>
      <div className={`container ${style.services}`}>
        <div className={`row row-cols-1 row-cols-md-4 ${style.cardsDiv}`}>
          {services.map((service, index) => (
            <div className="col" key={index}>
              <ServiceCard
                image={service.image}
                icon={service.icon}
                title={service.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
