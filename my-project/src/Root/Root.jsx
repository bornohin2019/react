import React from "react";
import Navber from "../Pages/Sheard/Navber";
import Footter from "../Pages/Sheard/Footter";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footter></Footter>
    </div>
  );
};

export default Root;
