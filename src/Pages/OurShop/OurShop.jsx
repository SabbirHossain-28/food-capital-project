import { useState } from "react";
import TitleHelmet from "../../Components/TitleHelmet/TitleHelmet";
import Cover from "../../Shared/Cover/Cover";
import shopBannerImage from "../../assets/images/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenuData from "../../Hooks/useMenuData";
import FoodCardDataTab from "./FoodCardDataTab";

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  //   console.log(tabIndex);
  const [menuData] = useMenuData();
  //   console.log(menuData);

  const shopDataForDessert = menuData.filter(
    (item) => item.category === "dessert"
  );
  const shopDataForPizza = menuData.filter((item) => item.category === "pizza");
  const shopDataForSalad = menuData.filter((item) => item.category === "salad");
  const shopDataForSoup = menuData.filter((item) => item.category === "soup");
  const shopDataForDrinks = menuData.filter(
    (item) => item.category === "drinks"
  );
  return (
    <div>
      <TitleHelmet title={"Our Shop"}></TitleHelmet>
      <div className="mb-16">
        <Cover
          img={shopBannerImage}
          title={"OUR SHOP"}
          subTitle={"Would you like to try a dish?"}
        ></Cover>
      </div>
      <div className="max-w-7xl mx-auto mb-16">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salads</Tab>
            <Tab>Pizzas</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>DFrinks</Tab>
          </TabList>

          <TabPanel>
            <FoodCardDataTab data={shopDataForSalad}></FoodCardDataTab>
          </TabPanel>
          <TabPanel>
            <FoodCardDataTab data={shopDataForPizza}></FoodCardDataTab>
          </TabPanel>
          <TabPanel>
            <FoodCardDataTab data={shopDataForSoup}></FoodCardDataTab>
          </TabPanel>
          <TabPanel>
            <FoodCardDataTab data={shopDataForDessert}></FoodCardDataTab>
          </TabPanel>
          <TabPanel>
            <FoodCardDataTab data={shopDataForDrinks}></FoodCardDataTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
