import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Newposition from "./Page/edit";
import Destroy, { action as destroyAction } from "./Page/Destroy";
import Main from "./Page/Main";
import Login from "./Page/login";
import Signup from "./Page/signup";
import Dashboard from "./components/Dashboard";
import "./css/Root.css";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "Dashboard/:id",
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "Newposition",
        element: <Newposition />,
      },
      {
        path: "positions/position/edit",
        element: <Newposition />,
      },
      {
        path: "positions/position/destroy",
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: "position/delete",
        element: <Destroy />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
