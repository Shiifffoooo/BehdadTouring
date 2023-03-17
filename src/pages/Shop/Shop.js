import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import NeededDatasApp from "../../contextData/NeededDataApp";
import "./Shop.css";

export default function Shop() {
  document.title = `BehdadTouring | فروشگاه`;

  return (
    <NeededDatasApp>
      <NavBar />
      <Outlet />
      <Footer top={true} quote={true} />
    </NeededDatasApp>
  );
}
