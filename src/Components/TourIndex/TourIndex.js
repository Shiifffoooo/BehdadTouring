import React from "react";
import Footer from "../Footer/Footer";
import ShowTours from "../ShowTours/ShowTours";
import TourSearch from "../TourSearch/TourSearch";

export default function TourIndex() {
  return (
    <>
      <TourSearch />
      <ShowTours />
      <Footer top={true} quote={true} />
    </>
  );
}
