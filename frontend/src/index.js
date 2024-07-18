import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Style/Root.css";
import Root from "./routes/Root";
import { Outlet } from "react-router-dom";
import "./Style/Root.css";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";
import ListOfAppliedApplications from "./Screens/ListOfAppliedApplications";
import LobbyScreen from "./Screens/LobbyScreen";
// import PositionDetails from "./Components/PositionDetails";

import NewPosition from "./Screens/NewPosition";
import ApplyForm from "./Components/ApplyForm";

import EditScreen from "./Screens/EditScreen";

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
                path: "new-position",
                element: <NewPosition/>
              },
              {
                path: "position/",
                element: <Outlet/>,
                children:[
                  {
                    path: ":positionId",
                    element: <Outlet/>,
                    children:[
                      {
                        path: "",
                        element: <ListOfAppliedApplications/>,
                      },
                      {
                        path: "details/:employeeId",
                        element: <>Employee details</>
                      },
                      {
                        path: "edit",
                        element: <EditScreen/>,
                      },
                    ]
                  },
                  
                ],
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
