import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure=axios.create({
    baseURL:"http://localhost:5000",
})
const useAxios = () => {
    const {logOut}=useAuth();
    const navigate=useNavigate();

    // Request interceptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function(config){
        const token=localStorage.getItem("access-token");
        // console.log("Request stoped by interceptor",token);
        // console.log(config);
        config.headers.authorization=`Bearer ${token}`
        return config
    },function(error){
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use(function(response){
        return response;
    },async function(error){
        const status=error.response.status;
        // console.log("status error in the interceptor",error)
        if(status===401 || status===403){
            await logOut()
            navigate("/login")
        }
        return Promise.reject(error)
    })
   return axiosSecure
};

export default useAxios;