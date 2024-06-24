import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditContact, { action as editAction } from "./routes/edit";
import Destroy, { action as destroyAction } from "./routes/Destroy";
import Main from "./routes/Main";
import "./routes/Root.css";
import { Form, Button } from "react-bootstrap";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Main /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: "contacts/delete",
        element: <Destroy />,
        loader: contactLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
