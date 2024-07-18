import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "./Style/Root.css";
import Root from "./routes/Root";
import {Outlet} from "react-router-dom";
import "./Style/Root.css";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";
import TabInJobPage from "./Screens/TabInJobScreen";
import LobbyScreen from "./Screens/LobbyScreen";
import PositionDetails from "./components/PositionDetails";


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
                element: <TabInJobPage/>
              },
              {
                path: "new-position",
                element: <>Create new position</>
              },
              {
                path: "position/:positionId",
                element: <PositionDetails/>,
                children:[
                  {
                    path: "edit",
                    element: <>Edit position</>
                  }
                
                ]
              }
            ]
          }
        ]
      }
    
    ]
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
