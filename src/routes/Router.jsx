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
      element:<PendingAssign />,
    },
    {
      path: "/createassignments",
      element:<CreateAssignments />,
    },
    {
      path: "/myaemptedassignments",
      element:<MyAemptedAssignments />,
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