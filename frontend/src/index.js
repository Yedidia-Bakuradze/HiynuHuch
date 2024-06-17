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
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
