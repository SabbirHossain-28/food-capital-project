import { TiCalendar, TiHome, TiShoppingBag, TiShoppingCart, TiThMenu } from "react-icons/ti";
import { MdBookOnline, MdOutlineRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-72 min-h-screen bg-[#D1A054]">
        <h2 className="text-3xl font-bold text-center my-4">Food Capital</h2>
        <ul className="menu">
          <li>
            <NavLink className="text-lg font-medium" to="/dashboard/userHome">
              <TiHome className="text-xl"></TiHome>UserHome
            </NavLink>
          </li>
          <li>
            <NavLink className="text-lg font-medium" to="/dashboard/cart">
              <TiShoppingCart className="text-xl"></TiShoppingCart>My Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-lg font-medium"
              to="/dashboard/reservation"
            >
              <TiCalendar className="text-xl"></TiCalendar>Reservation
            </NavLink>
          </li>
          <li>
            <NavLink className="text-lg font-medium" to="/dashboard/review">
              <MdOutlineRateReview className="text-xl"></MdOutlineRateReview>Add
              Review
            </NavLink>
          </li>
          <li>
            <NavLink className="text-lg font-medium" to="/dashboard/booking">
              <MdBookOnline className="text-xl"></MdBookOnline>My Bookings
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink className="text-lg font-medium" to="/">
              <TiHome className="text-xl"></TiHome>Home</NavLink>
          </li>
          <li>
            <NavLink className="text-lg font-medium" to="/menu">
              <TiThMenu className="text-xl"></TiThMenu> Menu</NavLink>
          </li>
          <li>
            <NavLink className="text-lg font-medium" to="/shop">
              <TiShoppingBag className="text-xl"></TiShoppingBag> Our Shop</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
