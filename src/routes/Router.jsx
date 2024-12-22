import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import Assignments from "../components/Assignments";
import PendingAssign from "../components/PendingAssign";
import AuthLayouts from "../components/AuthLayouts";
import Login from "../components/Login";
import Register from "../components/Register";
import CreateAssignments from "../components/CreateAssignments";
import MyAemptedAssignments from "../components/MyAemptedAssignments";
import ErrorPage from "../components/Error";
import PrivetRoute from "./PrivetRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<HomeLayouts />,
    },
    {
      path: "/assignments",
      element:<Assignments />,
      loader:()=>fetch(`http://localhost:5000/allassignments`)
    },
    {
      path: "/pendingassignments",
      element:<PrivetRoute><PendingAssign /></PrivetRoute>,
    },
    {
      path: "/createassignments",
      element:<PrivetRoute><CreateAssignments /></PrivetRoute>,
    },
    {
      path: "/myaemptedassignments",
      element:<PrivetRoute><MyAemptedAssignments /></PrivetRoute>,
    },
    {
        path: "/auth",
        element:<AuthLayouts />,
        children:[
          {
              path: "/auth/login",
              element: <Login />, 
          },
          {
              path: "/auth/register",
              element: <Register />, 
          },
         
        ]
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
  ]);

  export default router;