import TitleHelmet from "../../Components/TitleHelmet/TitleHelmet";
import Cover from "../../Shared/Cover/Cover";
import coverImage1 from "../../assets/images/menu/banner3.jpg"

const Menu = () => {
    return (
        <div>
            <TitleHelmet title={"Menu"}></TitleHelmet>
            <Cover img={coverImage1} title={"OUR MENU"} subTitle={"Would you like to try a dish?"}></Cover>
            <h2>This is menu page</h2>
        </div>
    );
};

export default Menu;