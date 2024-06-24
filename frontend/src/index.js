import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Editposition, { action as editAction } from "./routes/edit";
import Destroy, { action as destroyAction } from "./routes/Destroy";
import Main from "./routes/Main";
import "./routes/Root.css";
import { Form, Button } from "react-bootstrap";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/Root";
import { positions } from "./data/positions.js";
var url = window.location.herf;
const position = url.substr(url.lastIndexOf("/") + 1);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Main /> },
      {
        path: "positions/position",
        element: <Editposition />,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
