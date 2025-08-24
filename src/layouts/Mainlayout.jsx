import React from "react";
import { Outlet } from "react-router";
import Headers from "../components/Headers";
import Footers from "../components/Footers";
import "../App.css";

const Mainlayout = () => {
  return (
    <div className="bg-cblack  dark:bg-lwhite dark:text-lcyan  ">
      <Headers />

      <div className="min-h-[calc(100vh-116px)] hide-scrollbar overflow-auto">

        <div className="max-w-screen-5xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
          <Outlet />
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default Mainlayout;
