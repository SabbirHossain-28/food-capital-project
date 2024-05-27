import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Header/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    const location=useLocation();
    const hideHeaderFooter=location.pathname.includes("login") || location.pathname.includes("registration")
    return (
        <div>
            {hideHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {hideHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;