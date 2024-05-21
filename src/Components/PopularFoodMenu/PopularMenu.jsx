import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ItemCard from "../../Shared/ItemCard/ItemCard";

const PopularMenu = () => {
const [menuData,setMenuData]=useState([]);
    useEffect(()=>{
        fetch("https://sabbirhossain-28.github.io/food-menu-json/menu.json")
        .then(res => res.json())
        .then(data => {
            const popularData=data.filter(item=>item.category==="popular")
            setMenuData(popularData)
        })

    },[])
    console.log(menuData);
    return (
        <div className="my-16">
            <div className="flex justify-center text-center">
                <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></SectionTitle>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                {
                    menuData.map((data,idx)=><ItemCard key={idx} data={data}></ItemCard>)
                }
            </div>
            <div className="text-center">
                <button className="px-8 py-2 border-b-2 border-[#151515] rounded-lg text-xl font-medium">View All</button>
            </div>
        </div>
    );
};

export default PopularMenu;