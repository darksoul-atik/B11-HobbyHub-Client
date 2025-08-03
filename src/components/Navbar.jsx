import React from "react";
import { NavLink } from "react-router";
import hobbyhub from "../assets/hobbyhub.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/groups">All Groups</NavLink>
      </li>
      <li>
        <NavLink to="/createGroup">Create Group</NavLink>
      </li>
      <li>
        <NavLink to="/myGroups">My Groups</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar lg:text-white roboto-medium bg-cblack lg:px-40 mx-auto">
      
      <div className="navbar-start flex items-center gap-3">
        {/* Mobile dropdown menu button */}
        <div className="dropdown">
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
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-tight px-2 no-underline hover:no-underline select-none"
        >


          {/* <span className="roboto-bold text-cpurple transition-transform duration-200 hover:scale-105">
            Hobby
          </span>
          <span className="roboto-bold text-cpink transition-transform duration-200 hover:scale-105">
            HUB
          </span> */}

          <img className="w-25" src={hobbyhub} alt="hobbyhub" />


        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Profile</a>
        <a className="btn">DarkMode</a>
        <a className="btn">LogOut</a>
      </div>
    </div>
  );
};

export default Navbar;
