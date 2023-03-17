import React, { useContext, useEffect, useState } from "react";
import AboutTeam from "../../Components/AboutTeam/AboutTeam";
import Landing from "../../Components/Landing/Landing";
import NavBar from "../../Components/NavBar/NavBar";
import "./Index.css";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import TourSection from "../../Components/TourSection/TourSection";
import Footer from "../../Components/Footer/Footer";
import { contextNeededDatas } from "../../contextData/NeededDataApp";
export default function Index() {
  document.title ="BehdadTouring"
  const contentData = useContext(contextNeededDatas);
  const [tours, setTours] = useState([]);
  function fetchData() {
    setTours(contentData.region);
  }
  useEffect(() => {
    fetchData();
  }, [tours]);

  return (
    <div className="body">
      <ParallaxProvider>
        <NavBar />

        <header id="slogan-header">
          <Parallax translateY={["-90", "50"]} opacity={[3.5, -0.5]}>
            <h2 className="slogan-title text-uppercase display-1 mb-0">
              explore yourself
            </h2>
          </Parallax>
        </header>
        <Landing tours={tours} />
        <AboutTeam tours={tours} />
        <TourSection tours={tours} />
        <Footer top={false} quote={true} />
      </ParallaxProvider>
    </div>
  );
}
