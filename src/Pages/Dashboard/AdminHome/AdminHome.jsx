import useAuth from "../../../Hooks/useAuth";
import { FaMoneyBillTrendUp, FaUsers } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure=useAxios();

    const {data:adminStatsData=[]}=useQuery({
        queryKey:["adminStats"],
        queryFn:async ()=>{
            const res=await axiosSecure.get("/adminStats");
            return res.data
        }
    })
    console.log(adminStatsData);
  return (
    <div className="p-16">
      <div className="mb-4">
        <h2 className="text-3xl font-semibold">
          Hi, Welcome {user?.displayName ? user?.displayName : "back"}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div className="h-32 rounded-lg bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex justify-center">
          <div className="flex justify-center items-center gap-2 ">
            <FaMoneyBillTrendUp className="text-4xl text-white"></FaMoneyBillTrendUp>
            <div>
              <p className="text-3xl font-bold text-white">${adminStatsData.revenue}</p>
              <p className="text-2xl font-medium text-white">Revenue</p>
            </div>
          </div>
        </div>
        <div className="h-32 rounded-lg bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] flex justify-center">
          <div className="flex justify-center items-center gap-2 ">
            <FaUsers className="text-4xl text-white"></FaUsers>
            <div>
              <p className="text-3xl font-bold text-white">{adminStatsData.users}</p>
              <p className="text-2xl font-medium text-white">Customers</p>
            </div>
          </div>
        </div>
        <div className="h-32 rounded-lg bg-gradient-to-r from-[#FE4880] to-[#FECDE9] flex justify-center">
          <div className="flex justify-center items-center gap-2 ">
            <AiOutlineProduct className="text-4xl text-white"></AiOutlineProduct>
            <div>
              <p className="text-3xl font-bold text-white">{adminStatsData.menuItems}</p>
              <p className="text-2xl font-medium text-white">Products</p>
            </div>
          </div>
        </div>
        <div className="h-32 rounded-lg bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] flex justify-center">
          <div className="flex justify-center items-center gap-2 ">
            <LiaShippingFastSolid className="text-4xl text-white"></LiaShippingFastSolid>
            <div>
              <p className="text-3xl font-bold text-white">{adminStatsData.paymentCount}</p>
              <p className="text-2xl font-medium text-white">Orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
