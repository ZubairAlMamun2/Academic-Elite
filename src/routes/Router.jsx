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

  const router = createBrowserRouter([
    {
      path: "/",
      element:<HomeLayouts />,
    },
    {
      path: "/assignments",
      element:<Assignments />,
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
  ]);

  export default router;