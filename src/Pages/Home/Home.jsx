import AboutBanner from "../../Components/AboutBanner/AboutBanner";
import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import ContactNum from "../../Components/ContactNum/ContactNum";
import PopularMenu from "../../Components/PopularFoodMenu/PopularMenu";
import RecommendItems from "../../Components/RecommendItems/RecommendItems";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto">
            <Category></Category>
            <AboutBanner></AboutBanner>
            <PopularMenu></PopularMenu>
            <ContactNum></ContactNum>
            <RecommendItems></RecommendItems>
            </div>
        </div>
    );
};

export default Home;