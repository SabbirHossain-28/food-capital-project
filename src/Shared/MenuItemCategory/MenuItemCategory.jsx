import { Link } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";

const MenuItemCategory = ({ item,btnText,category }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        {item.map((data, idx) => (
          <ItemCard key={idx} data={data}></ItemCard>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/shop/${category}`}><button className="px-8 py-2 border-b-2 border-[#BB8506] text-[#BB8506] rounded-lg text-xl font-medium hover:bg-[#111827]">
          {btnText}
        </button></Link>
      </div>
    </div>
  );
};

export default MenuItemCategory;
