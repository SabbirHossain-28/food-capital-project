
const ItemCard = ({data}) => {
    console.log(data);
    return (
        <div>
            <div className="flex gap-4 items-center shadow-lg p-4 rounded-lg">
                <div className="w-28 h-24 bg-[#D9D9D9] rounded-tr-full rounded-br-full rounded-bl-full"></div>
                <div>
                    <div className="flex justify-between">
                        <p className="text-[#151515] text-xl">{data.name}----------</p>
                        <p className="text-[#BB8506] text-x">${data.price}</p>
                    </div>
                    <p className="text-[#737373]">{data.recipe}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;