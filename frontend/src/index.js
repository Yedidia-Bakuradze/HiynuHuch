import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider ,createRoutesFromElements, Router} from "react-router-dom";
import EditScreen from "./Screens/EditScreen";
import Destroy, { destroyAction } from "./Screens/Destroy";
import Moredetails from "./Components/MoreDetails";
import Dashboard from "./Components/Dashboard";
import "./Style/Root.css";
import Root from "./Routes/Root";

import MainScreen from "./Screens/MainScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/LoginScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainScreen />,
        children: [
          {
            path: "Dashboard/:id",
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "Newposition",
        element: <EditScreen />,
      },
      {
        path: "positions/position/edit",
        element: <EditScreen />,
      },
      {
        path: "positions/position/destroy",
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: "position/delete",
        element: <Destroy />,
      },
      {
        path: "Moredetails/:id",
        element: <Moredetails />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginScreen />,
  },
  {
    path: "signup",
    element: <SignupScreen />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
