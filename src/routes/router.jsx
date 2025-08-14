import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/mainlayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
