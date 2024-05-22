import FoodCards from "../../Components/FoodCards/FoodCards";

const FoodCardDataTab = ({data}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                data.map((item,idx)=><FoodCards key={idx} item={item}></FoodCards>)
            }
        </div>
    );
};

export default FoodCardDataTab;