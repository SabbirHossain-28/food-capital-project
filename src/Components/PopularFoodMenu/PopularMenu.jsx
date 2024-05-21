import SectionTitle from "../SectionTitle/SectionTitle";
import ItemCard from "../../Shared/ItemCard/ItemCard";
import useMenuData from "../../Hooks/useMenuData";

const PopularMenu = () => {
  const [menuData] = useMenuData(); /*load data using useMenuData hook */
  const menuDataForPopular = menuData.filter(
    (item) => item.category === "popular"
  );
  return (
    <div className="my-16">
      <div className="flex justify-center text-center">
        <SectionTitle
          heading={"FROM OUR MENU"}
          subHeading={"Check it out"}
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        {menuDataForPopular.map((data, idx) => (
          <ItemCard key={idx} data={data}></ItemCard>
        ))}
      </div>
      <div className="text-center">
        <button className="px-8 py-2 border-b-2 border-[#151515] rounded-lg text-xl font-medium">
          View All
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
