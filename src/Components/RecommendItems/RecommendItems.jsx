import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import RecommendItemCard from "../../Shared/RecommentItemCard/RecommendItemCard";

const RecommendItems = () => {
  const [itemsData, setItemsData] = useState([]);
  useEffect(() => {
    fetch("https://sabbirhossain-28.github.io/food-menu-json/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const offeredItem = data.filter((item) => item.category === "offered");
        setItemsData(offeredItem);
      });
  }, []);
  return (
    <div className="my-16">
      <div className="flex justify-center text-center">
        <SectionTitle
          heading={"CHEF RECOMMENDS"}
          subHeading={"Should Try"}
        ></SectionTitle>
      </div>
      <div className="flex gap-4 flex-wrap">
        {itemsData.map((data, idx) => (
          <RecommendItemCard key={idx} data={data}></RecommendItemCard>
        ))}
      </div>
    </div>
  );
};

export default RecommendItems;
