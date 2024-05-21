
const RecommendItemCard = ({data}) => {
    return (
            <div className="">
                <div className="">
                    <img src={data.image} alt="" />
                </div>
                <div className=" flex flex-col items-center text-center p-2 space-y-3 bg-[#F3F3F3]">
                    <h4 className="text-[#151515] text-2xl font-semibold">{data.name}</h4>
                    <p className="w-72 h-16 text-[#151515] text-sm">{data.recipe}</p>
                    <button className="px-6 py-2 text-[#BB8506] bg-[#E8E8E8] border-b-2 border-[#BB8506] rounded-lg hover:bg-[#151515] transition-all duration-200 ">Add to Cart</button>
                </div>
            </div>
    );
};

export default RecommendItemCard;