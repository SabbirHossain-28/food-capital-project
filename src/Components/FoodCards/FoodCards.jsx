const FoodCards = ({ item }) => {
  const { name, recipe, price, category } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="absolute right-4 top-2 bg-[#111827] text-white py-1 px-3 rounded-lg">
          <p>${price}</p>
        </div>
        <div className="card-body text-center">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="capitalize text-lg font-medium">{category}</p>
          <div className="h-20">
          <p>{recipe}</p>
          </div>
          <div className="card-actions justify-center">
            <button className="px-14 py-2 bg-[#E8E8E8] text-[#BB8506] border-b-4 border-[#BB8506] rounded-lg hover:bg-[#111827]">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
