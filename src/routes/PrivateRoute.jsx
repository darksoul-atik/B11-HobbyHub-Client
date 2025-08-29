import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import FullScreenLoader from "../utils/FullScreenLoader";
import { ToastContext } from "../contexts/ToastContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <FullScreenLoader></FullScreenLoader>;
  }
  if (user && user?.email) {
    return children;
  } else {
    return (
      <div>
        <Navigate state={location.pathname} to="/login"></Navigate>
      </div>
    );
  }
};

export default PrivateRoute;
