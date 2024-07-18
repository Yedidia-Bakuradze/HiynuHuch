import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Style/Root.css";
import Root from "./routes/Root";
import { Outlet } from "react-router-dom";

import MainScreen from "./Screens/MainScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";
import { Tab } from "react-bootstrap";
import TabInJobPage from "./Screens/TabInJobScreen";
import LobbyScreen from "./Screens/LobbyScreen";
import ApplyForm from "./components/ApplyForm";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <><Outlet/></>,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <MainScreen />,
//         children: [
//           {
//             path: "Dashboard/:id",
//             element: <Dashboard />,
//           },
//         ],
//       },

//       {
//         path: "recruiter",
//         element: <LobbyScreen />,
//       },

//       {
//         path: "Newposition",
//         element: <EditScreen />,
//       },
//       {
//         path: "positions/position/edit",
//         element: <EditScreen />,
//       },
//       {
//         path: "positions/position/destroy",
//         errorElement: <div>Oops! There was an error.</div>,
//       },
//       {
//         path: "position/delete",
//         element: <Destroy />,
//       },
//       {
//         path: "Moredetails/:id",
//         element: <Moredetails />,
//       },
//     ],
//   },

//   {
//     path: "login",
//     element: <LoginScreen />,
//   },
//   {
//     path: "signup",
//     element: <SignupScreen />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "recruiter",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <LobbyScreen />,
          },
          {
            path: "login",
            element: <LoginScreen />,
          },
          {
            path: "signup",
            element: <SignupScreen />,
          },
          {
            path: ":id",
            element: <Root />,
            children: [
              {
                path: "",
                element: <TabInJobPage />,
              },
            ],
          },
        ],
      },
      {
        path: "form",
        element: <Outlet />,
        children: [
          {
            path: ":id",
            element: <ApplyForm />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
