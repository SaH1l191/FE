import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] mx-auto py-4">
      <Link to="/">
        <img src={logo} height={32} width={160} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-x-6 text-richblack-100">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Button - Login = Signup = Logout = Dashboard  */}

      <div className="flex ml-5 mr-3 gap-x-4 items-center ">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack-800 text-white py-[12px] px-[12px] border broder-richblack-800 rounded-[8px]">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-richblack-800 text-white py-[12px] px-[12px] border broder-richblack-800 rounded-[8px]">
              Sign Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button className="bg-richblack-800 text-white py-[12px] px-[12px] border broder-richblack-800 rounded-[8px]"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logout Sucessfully");
              }}
            
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 text-white py-[12px] px-[12px] border broder-richblack-800 rounded-[8px]">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
