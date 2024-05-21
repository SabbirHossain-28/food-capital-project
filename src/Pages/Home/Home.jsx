import { Helmet } from "react-helmet-async";
import AboutBanner from "../../Components/AboutBanner/AboutBanner";
import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import ContactNum from "../../Components/ContactNum/ContactNum";
import Featured from "../../Components/Featured/Featured";
import PopularMenu from "../../Components/PopularFoodMenu/PopularMenu";
import RecommendItems from "../../Components/RecommendItems/RecommendItems";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>FoodCapital | Home</title>
        </Helmet>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <Category></Category>
        <AboutBanner></AboutBanner>
        <PopularMenu></PopularMenu>
        <ContactNum></ContactNum>
        <RecommendItems></RecommendItems>
      </div>
      <Featured></Featured>
      <div className="max-w-screen-xl mx-auto">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
