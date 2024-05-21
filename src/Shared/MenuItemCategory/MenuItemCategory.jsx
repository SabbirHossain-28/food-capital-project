import ItemCard from "../ItemCard/ItemCard";

const MenuItemCategory = ({ item,btnText }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        {item.map((data, idx) => (
          <ItemCard key={idx} data={data}></ItemCard>
        ))}
      </div>
      <div className="text-center">
        <button className="px-8 py-2 border-b-2 border-[#151515] rounded-lg text-xl font-medium">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default MenuItemCategory;
