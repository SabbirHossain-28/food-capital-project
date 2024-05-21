import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import TitleHelmet from "../../Components/TitleHelmet/TitleHelmet";
import useMenuData from "../../Hooks/useMenuData";
import Cover from "../../Shared/Cover/Cover";
import MenuItemCategory from "../../Shared/MenuItemCategory/MenuItemCategory";
import coverImage1 from "../../assets/images/menu/banner3.jpg";
import coverImage2 from "../../assets/images/menu/dessert-bg.jpeg";
import coverImage3 from "../../assets/images/menu/pizza-bg.jpg";
import coverImage4 from "../../assets/images/menu/salad-bg.jpg";
import coverImage5 from "../../assets/images/menu/soup-bg.jpg";

const Menu = () => {
  const [menuData] = useMenuData();
  const menuDataForOffer = menuData.filter(
    (item) => item.category === "offered"
  );
  const menuDataForDessert = menuData.filter(
    (item) => item.category === "dessert"
  );
  const menuDataForPizza = menuData.filter((item) => item.category === "pizza");
  const menuDataForSalad = menuData.filter((item) => item.category === "salad");
  const menuDataForSoup = menuData.filter((item) => item.category === "soup");
  return (
    <div>
      <TitleHelmet title={"Menu"}></TitleHelmet>
      <Cover
        img={coverImage1}
        title={"OUR MENU"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <div>
        <div className="flex justify-center text-center">
          <SectionTitle
            heading={"TODAY'S OFFER"}
            subHeading={"Don't miss"}
          ></SectionTitle>
        </div>
        <div className="max-w-7xl mx-auto mb-12">
          <MenuItemCategory
            item={menuDataForOffer}
            btnText={"ORDER YOUR FAVOURITE FOOD"}
          ></MenuItemCategory>
        </div>
      </div>
      <Cover
        img={coverImage2}
        title={"DESSERTS"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div className="max-w-7xl mx-auto my-12">
          <MenuItemCategory
            item={menuDataForDessert}
            btnText={"ORDER YOUR FAVOURITE FOOD"}
          ></MenuItemCategory>
        </div>
      <Cover
        img={coverImage3}
        title={"PIZZA"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div className="max-w-7xl mx-auto my-12">
          <MenuItemCategory
            item={menuDataForPizza}
            btnText={"ORDER YOUR FAVOURITE FOOD"}
          ></MenuItemCategory>
        </div>
      <Cover
        img={coverImage4}
        title={"SALADS"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div className="max-w-7xl mx-auto my-12">
        <MenuItemCategory
          item={menuDataForSalad}
          btnText={"ORDER YOUR FAVOURITE FOOD"}
        ></MenuItemCategory>
      </div>
      <Cover
        img={coverImage5}
        title={"SOUPS"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div className="max-w-7xl mx-auto my-12">
        <MenuItemCategory
          item={menuDataForSoup}
          btnText={"ORDER YOUR FAVOURITE FOOD"}
        ></MenuItemCategory>
      </div>
    </div>
  );
};

export default Menu;
