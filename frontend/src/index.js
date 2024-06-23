<<<<<<< HEAD
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditContact, { action as editAction } from "./routes/edit";
import Destroy, { action as destroyAction } from "./routes/Destroy";
import Main from "./routes/Main";
import "./index.css";
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
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './Main';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    //Route to the home screen
    <>
      //Route to the home screen
      <Route path="/Main" element={<Main />}>
        {/* The home screen is the default screen that will be displayed when the website is loaded
    The index = true is used to prevent multiple startup of pages but rather a single page will load each page at a time*/}
      </Route><Route path="/Login" element={<Login />}>
        {/* The home screen is the default screen that will be displayed when the website is loaded
    The index = true is used to prevent multiple startup of pages but rather a single page will load each page at a time*/}

      </Route></>
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* Router been provided to be used */}
>>>>>>> efb246126e93b96eda99f2be993fcf9c62c6451b
    <RouterProvider router={router} />
  </React.StrictMode>
);
