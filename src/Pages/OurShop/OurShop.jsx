import Cover from "../../Shared/Cover/Cover";
import shopBannerImage from "../../assets/images/shop/banner2.jpg"

const OurShop = () => {
    return (
        <div>
            <div>
                <Cover img={shopBannerImage} title={"OUR SHOP"} subTitle={"Would you like to try a dish?"}></Cover>
            </div>
        </div>
    );
};

export default OurShop;