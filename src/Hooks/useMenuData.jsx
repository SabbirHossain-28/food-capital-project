import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiosCommon from "./useAxiosCommon";

const useMenuData = () => {
    const axiosCommon=useAxiosCommon()
    // const [menuData,setMenuData]=useState([]);
    // const [loading,setLoading]=useState(true);
    // useEffect(()=>{
    //     fetch("http://localhost:5000/menu")
    //     .then(res => res.json())
    //     .then(data => {
    //         setMenuData(data)
    //         setLoading(false)
    //     })

    // },[])
    const {data:menuData=[],isPending:loading,refetch}=useQuery({
        queryKey:["menu"],
        queryFn:async()=>{
            const res=await axiosCommon.get("/menu");
            return res.data
        }
    })
    return [menuData,loading,refetch]
};

export default useMenuData;