import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/home";
import Root from "../Root/Root";
import About from "../Pages/About/about";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
    ],
  },
]);

export default Router;
