import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import CreateGroups from "../pages/CreateGroups";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Mainlayout from "../layouts/Mainlayout";
import PrivateRoute from "./PrivateRoute";
import AllGroups from "../pages/AllGroups";
import MyGroups from "../pages/MyGroups";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/creategroup",
        element: (
          <PrivateRoute>
            <CreateGroups></CreateGroups>
          </PrivateRoute>
        ),
      },
      {
        path: "/mygroups",
        element: (
          <PrivateRoute>
            <MyGroups></MyGroups>
          </PrivateRoute>
        ),
      },
      {
        path: "/allgroups",
        element: <AllGroups></AllGroups>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
