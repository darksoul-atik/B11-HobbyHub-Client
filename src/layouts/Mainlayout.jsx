import React, { useContext, Suspense } from "react";
import { Outlet } from "react-router";
import Headers from "../components/Headers";
import Footers from "../components/Footers";
import "../App.css";
import { AuthContext } from "../contexts/AuthContext";

import FullScreenLoader from "../utils/FullScreenLoader";

const Mainlayout = () => {
  const { loading } = useContext(AuthContext);

  if (loading) return <FullScreenLoader />;

  return (
    <div className="bg-cblack dark:bg-lwhite dark:text-lcyan">
      <Headers />

      <div className="min-h-[calc(100vh-116px)] overflow-auto">
        <div className="max-w-screen-5xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
          <Suspense fallback={<FullScreenLoader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>

      <Footers />
    </div>
  );
};

export default Mainlayout;
