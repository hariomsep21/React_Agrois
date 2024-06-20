import Banner from "./Banner";
import FarmBenifit from "./FarmBenifit";
import Introduction from "./Introduction";
import OurServices from "./OurServices";
import OurTestimonial from "./OurTestimonial";
import RecentlyCompleted from "./RecentlyCompleted";
import Section4 from "./Section4";
import TheBlog from "./TheBlog";
import style from "../Home/Home.module.css"
import Blank from "./Blank";


const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Introduction />
      <OurServices />
      <Section4 />
      <RecentlyCompleted />
      <OurTestimonial />
      <FarmBenifit />
      <TheBlog />
      <Blank />
    </>
  )
}
export default Home;