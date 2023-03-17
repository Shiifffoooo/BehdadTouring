import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import NeededDatasApp from "../../contextData/NeededDataApp";

export default function Users() {
  return (
    <NeededDatasApp>
      <NavBar />
      <Outlet />
    </NeededDatasApp>
  );
}
