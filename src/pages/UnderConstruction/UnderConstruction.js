import React from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import "./UnderConstruction.css";
export default function UnderConstruction() {
  document.title ="BehdadTouring | در دست ساخت"
  return (
    <>
      <NavBar />
      <div className="bg-for--loader">
        <div className="loader-parent">
          <div className="loader-wrapper">
            <span className="loader"></span>
          </div>
          <div className="container-fluid d-flex justify-content-center">
            <div className="text-white border border-light rounded-3 p-2 col-12 col-sm-10">
              <div className="text-center">
                <span className="fs-5 text-success">با سلام!</span> <br />{" "}
                امیدوارم تا اینجا از سایت تستی من , راضی بوده باشید
              </div>

              <div>
                متاسفانه به علت ذیق وقت و بلد نبودن
                <span className="text-danger fw-bold px-1">[ Back-End ]</span>از
                ساختن ادامه این سایت منصرف شده و الان مشغول انجام پروژه ی دیگه
                ای برای رزومه ام هستم. <br /> به امید دیدار
              </div>
              <div className="text-center">
                <i
                  className="fa-solid fa-face-kiss-wink-heart display-1"
                  style={{ color: "var(--bs-code-color)" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer top={true} quote={false} />
    </>
  );
}
