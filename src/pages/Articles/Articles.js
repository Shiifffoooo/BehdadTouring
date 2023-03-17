import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import NeededDatasApp from "../../contextData/NeededDataApp";
import "./Articles.css";

export default function Articles() {
  document.title =`BehdadTouring | بلاگ ها`

  return (
    <NeededDatasApp>
      <NavBar />
      <Outlet />
      <Footer top={true} quote={true} />
    </NeededDatasApp>
  );
}
