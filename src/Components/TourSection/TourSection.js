import React from "react";
import { Link } from "react-router-dom";
import "./TourSection.css";

export default function TourSection({ tours }) {
  return (
    <main id="tour-section">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-3 px-0 position-relative"
            style={{ backgroundColor: "var(--bs-teal)" }}
          >
            <Link to="/">
              <img
                className="img-fluid h-100 border-0 px-0"
                src="./images/aircraft.jpg"
                alt="sumImages"
              />
              <div className="tour-section--overlay">
                <i className="fa-solid fa-plane-departure display-1 my-auto text-vanilla"></i>
                <p className="fs-6 text-vanilla">تورها مسیر هوایی</p>
              </div>
            </Link>
          </div>
          <div
            className="col-3 px-0 position-relative"
            style={{ backgroundColor: "var(--bs-teal)" }}
          >
            <Link to="/">
              <img
                className="img-fluid h-100 border-0 px-0"
                src="./images/bus-traveling.jpg"
                alt="sumImages"
              />
              <div className="tour-section--overlay">
                <i className="fa-solid fa-van-shuttle display-1 my-auto text-vanilla"></i>
                <p className="fs-6 text-vanilla">تورها مسیر جاده</p>
              </div>
            </Link>
          </div>
          <div
            className="col-3 px-0 position-relative"
            style={{ backgroundColor: "var(--bs-teal)" }}
          >
            <Link to="/">
              <img
                className="img-fluid h-100 border-0 px-0"
                src="./images/train.jpg"
                alt="sumImages"
              />
              <div className="tour-section--overlay">
                <i className="fas fa-train display-1 my-auto text-vanilla"></i>
                <p className="fs-6 text-vanilla">تورها مسیر ریلی</p>
              </div>
            </Link>
          </div>
          <div
            className="col-3 px-0 position-relative"
            style={{ backgroundColor: "var(--bs-teal)" }}
          >
            <Link to="/">
              <img
                className="img-fluid h-100 border-0 px-0"
                src="./images/ship-travel.jpg"
                alt="sumImages"
              />
              <div className="tour-section--overlay">
                <i className="fas fa-ship display-1 my-auto text-vanilla"></i>
                <p className="fs-6 text-vanilla">تورها مسیر دریایی</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="row tour-time">
          <div className="col-6 col-md-3 px-1 py-4 border border-light border-end-0 border-top-0">
            {/* <!-- ______________________________________tour time______________________________________ --> */}
            <div className="tour-month">مـهــــر / October</div>
            <div className="d-flex flex-row text-center justify-content-between">
              <div className="tour-day">
                <span>چهارشنبه</span>
                <span>Wednesday</span>
                <span>15 : 20</span>
              </div>
              <div className="tour-day">
                <span>چهارشنبه</span>
                <span>Wednesday</span>
                <span>15 : 20</span>
              </div>
            </div>
            <div className="tour-location">جنگل های پاییزی</div>
          </div>
          <div className="col-6 col-md-3 px-1 py-4 border border-light border-end-0 border-top-0">
            {/* <!-- ______________________________________tour time______________________________________ --> */}
            <div className="tour-month">مـهــــر / October</div>
            <div className="d-flex flex-row text-center justify-content-between">
              <div className="tour-day">
                <span>چهارشنبه</span>
                <span>Wednesday</span>
                <span>15 : 20</span>
              </div>
              <div className="tour-day">
                <span>چهارشنبه</span>
                <span>Wednesday</span>
                <span>15 : 20</span>
              </div>
            </div>
            <div className="tour-location">جنگل های پاییزی</div>
          </div>
          <div className="col-6 col-md-3 px-1 py-4 border border-light border-end-0 border-top-0">
            {/* <!-- ______________________________________tour time______________________________________ --> */}
            <div className="tour-month">مـهــــر / October</div>
            <div className="d-flex flex-row text-center justify-content-between">
              <div className="tour-day">
                <span>چهارشنبه</span>
                <span>Wednesday</span>
                <span>15 : 20</span>
              </div>
              <div className="tour-day">
                <span>چهارشنبه</span>
                <span>Wednesday</span>
                <span>15 : 20</span>
              </div>
            </div>
            <div className="tour-location">جنگل های پاییزی</div>
          </div>
          <div className="col-6 col-md-3 px-1 py-4 border border-light border-end-0 border-top-0">
            {/* <!-- ______________________________________tour time______________________________________ --> */}
            <div className="tour-month">مـهــــر / October</div>
            <div className="d-flex flex-row text-center justify-content-between">
              <div className="tour-day">
                <span>چهارشنبه</span>
                <span>Wednesday</span>
                <span>15 : 20</span>
              </div>
              <div className="tour-day">
                <span>چهارشنبه</span>
                <span>Wednesday</span>
                <span>15 : 20</span>
              </div>
            </div>
            <div className="tour-location">جنگل های پاییزی</div>
          </div>
        </div>
      </div>
    </main>
  );
}
