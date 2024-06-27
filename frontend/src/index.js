import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Editposition, { action as editAction } from "./routes/edit";
import Destroy, { action as destroyAction } from "./routes/Destroy";
import Main from "./routes/Main";
import Login from "./routes/login";
import Signup from "./routes/signup";
import "./routes/Root.css";
import { Form, Button } from "react-bootstrap";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/Root";
var url = window.location.herf;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Main /> },
      {
        path: "positions/:id",
        element: <Editposition />,
        action: editAction,
      },
      {
        path: "positions/position/edit",
        element: <Editposition />,
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
