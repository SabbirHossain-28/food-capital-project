import AboutBanner from "../../Components/AboutBanner/AboutBanner";
import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import PopularMenu from "../../Components/PopularFoodMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto">
            <Category></Category>
            <AboutBanner></AboutBanner>
            <PopularMenu></PopularMenu>
            </div>
        </div>
    );
};

export default Home;