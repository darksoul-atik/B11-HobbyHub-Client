import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/mainlayout";
import Home from "../pages/Home";
import CreateGroups from "../pages/CreateGroups";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        path:"/createGroup",
        element:<CreateGroups></CreateGroups>
      },
    ],    
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"/register",
    element:<Register></Register>
  },
]);
