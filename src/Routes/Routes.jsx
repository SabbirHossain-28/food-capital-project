import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivetRoute from "./PrivetRoute";
import PrivatePage from "../Pages/PrivatePage/PrivatePage";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";

export  const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/menu",
                element: <Menu></Menu>
            },
            {
                path:"/shop/:category",
                element:<OurShop></OurShop>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/registration",
                element:<Registration></Registration>
            },
            {
                path:"/private",
                element:<PrivetRoute>
                    <PrivatePage></PrivatePage>
                </PrivetRoute>
            },
        ]
    },
    {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"cart",
                element:<Cart></Cart>
            }
        ]
    }
])