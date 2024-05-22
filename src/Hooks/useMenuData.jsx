import { useEffect, useState } from "react";

const useMenuData = () => {
    const [menuData,setMenuData]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch("http://localhost:5000/menu")
        .then(res => res.json())
        .then(data => {
            setMenuData(data)
            setLoading(false)
        })

    },[])
    return [menuData,loading]
};

export default useMenuData;