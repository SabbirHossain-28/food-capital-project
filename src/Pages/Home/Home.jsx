import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto">
            <Category></Category>
            </div>
        </div>
    );
};

export default Home;