import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import NeededDatasApp from "../../contextData/NeededDataApp";
export default function Tours() {
  document.title = "BehdadTouring | تورها";
  return (
    <NeededDatasApp>
      <NavBar />
      <Outlet />
    </NeededDatasApp>
  );
}
