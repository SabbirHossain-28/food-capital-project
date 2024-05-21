import { useEffect, useState } from "react";

const useMenuData = () => {
    const [menuData,setMenuData]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch("https://sabbirhossain-28.github.io/food-menu-json/menu.json")
        .then(res => res.json())
        .then(data => {
            setMenuData(data)
            setLoading(false)
        })

    },[])
    return [menuData,loading]
};

export default useMenuData;