import React from "react";
import { Outlet } from "react-router-dom";
import Footers from "../Shared/Footer";
import NavbarHeader from "../Shared/NavbarHeader";

const Main = () => {
  return (
    <div>
      <NavbarHeader></NavbarHeader>
      <Outlet></Outlet>
      <Footers></Footers>
    </div>
  );
};

export default Main;
