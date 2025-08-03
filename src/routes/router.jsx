import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/mainlayout";
import Home from "../components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
        {
            index:true,
            element:<Home></Home>
        }
    ]
  },
]);