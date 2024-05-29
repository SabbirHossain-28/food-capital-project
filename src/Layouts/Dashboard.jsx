import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-72 min-h-screen bg-[#D1A054]">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/cart">My Cart</NavLink>
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
