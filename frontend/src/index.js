import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import { Outlet } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";
import ListOfAppliedApplications from "./Screens/ListOfAppliedApplications";
import LobbyScreen from "./Screens/LobbyScreen";
// import PositionDetails from "./Components/PositionDetails";
import NewPosition from "./Screens/NewPosition";
import ApplyForm from "./Components/ApplyForm";
import MoreDetails from "./Components/MoreDetails";
import EditScreen from "./Screens/EditScreen";
import axios from "axios";
import { useEffect, useState } from "react";

axios.interceptors.request.use((req) => {
    if (getToken() && req.url.startsWith('api/admin/')) {
      req.headers.Authorization = `Bearer ${getToken()}`;
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// useEffect(async () => {
//   if (getToken()) {
//     try {
//       const config = {
//         headers: { Authorization: `Bearer ${getToken()} `},
//       };
//       const { data } = await axios.get("api/admin/token", config);
//       // setUser(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   getAllCategory();
// }, []);

const getToken = () => {
  return localStorage.getItem("token");
};


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
                element: <NewPosition />,
              },
              {
                path: "position/",
                element: <Outlet />,
                children: [
                  {
                    path: ":positionId",
                    element: <Outlet />,
                    children: [
                      {
                        path: "",
                        element: <ListOfAppliedApplications />,
                      },
                      {
                        path: "details/:employeeId",
                        element: <>Employee details</>,
                      },
                      {
                        path: "edit",
                        element: <EditScreen />,
                      },
                    ],
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
            path: ":formId",
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
