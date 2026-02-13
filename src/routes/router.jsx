import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import CreateGroups from "../pages/CreateGroups";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Mainlayout from "../layouts/Mainlayout";
import PrivateRoute from "./PrivateRoute";
import AllGroups from "../pages/AllGroups";
import MyGroups from "../pages/MyGroups";
import GroupDetails from "../components/GroupDetails";
import GroupUpdate from "../components/GroupUpdate";
import RemoveMember from "../components/RemoveMember";

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
        loader: () => fetch("https://hobby-hub-server-ivory.vercel.app/groups"),
        element: (
          <PrivateRoute>
            <MyGroups></MyGroups>
          </PrivateRoute>
        ),
      },
      {
        path: "/groups",
        loader: () => fetch("https://hobby-hub-server-ivory.vercel.app/groups"),
        element: <AllGroups></AllGroups>,
      },
      {
        path: "/groups/:id",
        loader: ({ params }) =>
          fetch(
            `https://hobby-hub-server-ivory.vercel.app/groups/${params.id}`,
          ),
        element: (
          <PrivateRoute>
            <GroupDetails></GroupDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateGroup/:id",
        loader: ({ params }) =>
          fetch(
            `https://hobby-hub-server-ivory.vercel.app/groups/${params.id}`,
          ),
        element: (
          <PrivateRoute>
            <GroupUpdate></GroupUpdate>
          </PrivateRoute>
        ),
      },
      {
        path: "/remove/:groupid",
        loader: ({ params }) =>
          fetch(
            `https://hobby-hub-server-ivory.vercel.app/groups/${params.groupid}`,
          ),
        element: (
          <PrivateRoute>
            <RemoveMember></RemoveMember>
          </PrivateRoute>
        ),
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
