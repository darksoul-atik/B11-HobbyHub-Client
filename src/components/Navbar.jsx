import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import hobbyhub from "../assets/hobbyhub.png";
import GradientShadowButton from "../utils/GradientShadowButton";
import DarkModeToggle from "../utils/DarkModeToggle";
import { AuthContext } from "../contexts/AuthContext";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

 
  
  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log("log out successfull", result);
      })
      .catch((error) => {
        console.log("error while logout", error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allgroups">All Groups</NavLink>
      </li>
      <li>
        <NavLink to="/creategroup">Create Group</NavLink>
      </li>
      <li>
        <NavLink to="/mygroups">My Groups</NavLink>
      </li>
 
    </>
  );

  return (
    <div className="navbar  dark:bg-lwhite dark:text-lcyan flex  items-center lg:text-white roboto-medium bg-cblack lg:px-40 mx-auto">
      <div className="navbar-start  flex items-center  gap-3">
        {/* Mobile dropdown menu button */}
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-xs bg-cpink text-white rounded-md shadow-sm hover:bg-pink-500 hover:scale-105 active:scale-95 transition-all duration-200 lg:hidden"
          >
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
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow-lg bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        {/* Brand Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight px-2 no-underline hover:no-underline select-none"
        >
          <img className="w-25 max-sm:w-20" src={hobbyhub} alt="hobbyhub" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-5 px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <DarkModeToggle></DarkModeToggle>

        <GradientShadowButton className="  p-1 lg:w-10 lg:h-10 max-md:h-9 max-md:w-9  max-sm:btn-xs  max-sm:text-xs rounded-full text-sm  scale-90">
          {user ? (
            <>
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName ||"No User"}
              >
                <img
                  className=" w-full h-full rounded-full"
                  src={user?.photoURL}
                  alt="User Image"
                />
              </a>

              <Tooltip id="my-tooltip" />
            </>
          ) : (
            <>
              <img
                src="https://i.postimg.cc/mgvBzLt5/user.png"
                alt="Default Image"
              />
            </>
          )}
        </GradientShadowButton>

        {user ? (
          <Link onClick={handleLogout}>
            <GradientShadowButton className=" rounded-xl max-sm:btn-xs max-sm:px-2 max-sm:text-xs px-2 text-sm py-2 scale-90">
              Log out
            </GradientShadowButton>
          </Link>
        ) : (
          <Link to="/login">
            <GradientShadowButton className=" rounded-xl max-sm:btn-xs max-sm:px-2 max-sm:text-xs px-2 text-sm py-2 scale-90">
              Log in
            </GradientShadowButton>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
