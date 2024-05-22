import { TiShoppingCart } from "react-icons/ti";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";


const Navbar = () => {
  const navMenu = (
    <>
      <li className="text-white">
        <Link to="/">Home</Link>
      </li>
      <li className="text-white">
      <a>Contact Us</a>
      </li>
      <li className="text-white">
        <a>Dashboard</a>
      </li>
      <li className="text-white">
        <Link to="/menu">Our Menu</Link>
      </li>
      <li className="text-white">
        <Link to="/shop">Our Shop</Link>
      </li>
      <li className="text-white">
        <a>Sign out</a>
      </li>
      <li className="text-white">
        <a className="text-2xl"><TiShoppingCart></TiShoppingCart></a>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-40 bg-gray-600">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <a className="text-xl font-bold text-white">
            FoodCapital <br />
            <span className="text-lg">Restaurant</span>
          </a>
        </div>
        <div className="navbar-end">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navMenu}</ul>
          </div>
          {/* <a className="btn">Button</a> */}
          <div className="avatar">
            {/* <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div> */}
            <RxAvatar className="text-5xl"></RxAvatar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
