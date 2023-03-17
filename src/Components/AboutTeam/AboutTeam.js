import React, { useState } from "react";
import "./AboutTeam.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function AboutTeam({ tours }) {
  return (
    <section id="about-team">
      <div className="container pt-5 about-team--content">
        <div className="row">
          <div className="col-6 pt-5">
            <div className="d-flex justify-content-center">
              <div className="food-plate-wrapper">
                <img src="./images/foruit.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-6 py-5">
            <div className="attention-arrow">
              <svg
                version="1.1"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
              >
                <defs />
                <g
                  style={{
                    stroke: "none",
                    strokeWidth: "0",
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: "10",
                    fill: "none",
                    fillRule: "nonzero",
                    opacity: "1",
                  }}
                  transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                >
                  <path
                    style={{
                      stroke: "none",
                      strokeWidth: "1",
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: "10",
                      fill: "#f77000",
                      fillRule: "nonzero",
                      opacity: "1",
                    }}
                    d="M 9.518 37.866 H 1 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 8.518 c 0.552 0 1 0.448 1 1 S 10.07 37.866 9.518 37.866 z"
                    strokeLinecap="round"
                    transform=" matrix(1 0 0 1 0 0) "
                  />
                  <path
                    style={{
                      stroke: "none",
                      strokeWidth: "1",
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: "10",
                      fill: "#f77000",
                      fillRule: "nonzero",
                      opacity: "1",
                    }}
                    d="M 57.872 77.188 c -0.603 0 -1.206 -0.229 -1.665 -0.688 l -9.587 -9.587 c -0.918 -0.92 -0.918 -2.414 0 -3.332 l 9.447 -9.447 H 29.181 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 29.301 c 0.404 0 0.77 0.243 0.924 0.617 c 0.155 0.374 0.069 0.804 -0.217 1.09 L 48.034 64.995 c -0.139 0.139 -0.139 0.365 0.001 0.505 l 9.585 9.585 c 0.139 0.14 0.365 0.139 0.504 0 l 29.78 -29.781 c 0.084 -0.084 0.099 -0.191 0.096 -0.266 c 0.003 -0.15 -0.012 -0.257 -0.096 -0.341 l -29.78 -29.781 c -0.181 -0.18 -0.321 -0.184 -0.504 0 l -9.586 9.585 c -0.139 0.139 -0.139 0.365 0 0.504 l 11.154 11.153 c 0.286 0.286 0.372 0.716 0.217 1.09 c -0.154 0.374 -0.52 0.617 -0.924 0.617 H 18.341 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 37.727 l -9.447 -9.447 c -0.918 -0.919 -0.918 -2.414 0 -3.332 l 9.586 -9.586 c 0.892 -0.891 2.444 -0.89 3.332 0 l 29.78 29.78 c 0.464 0.463 0.705 1.087 0.68 1.755 c 0.025 0.593 -0.216 1.216 -0.68 1.68 l -29.78 29.781 C 59.079 76.958 58.476 77.188 57.872 77.188 z"
                    strokeLinecap="round"
                    transform=" matrix(1 0 0 1 0 0) "
                  />
                  <path
                    style={{
                      stroke: "none",
                      strokeWidth: "1",
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: "10",
                      fill: "#f77000",
                      fillRule: "nonzero",
                      opacity: "1",
                    }}
                    d="M 20.862 54.134 h -8.295 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 8.295 c 0.552 0 1 0.447 1 1 S 21.414 54.134 20.862 54.134 z"
                    strokeLinecap="round"
                    transform=" matrix(1 0 0 1 0 0) "
                  />
                  <path
                    style={{
                      stroke: "none",
                      strokeWidth: "1",
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: "10",
                      fill: "#f77000",
                      fillRule: "nonzero",
                      opacity: "1",
                    }}
                    d="M 41.533 46 H 7.307 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 34.226 c 0.552 0 1 0.448 1 1 S 42.085 46 41.533 46 z"
                    strokeLinecap="round"
                    transform=" matrix(1 0 0 1 0 0) "
                  />
                </g>
              </svg>
            </div>
            <div className="d-flex justify-content-center">
              <h2
                className="display-5 text-green-gray fw-bold mt-5"
                style={{ letterSpacing: "-3px" }}
              >
                <span className="ms-4"> وعده های </span>
                <br />
                <span>غذایی</span>
              </h2>
            </div>
            <p className="w-100 w-sm-75 text-green-gray">
              تمامی وعده های غذایی در سفرهای توسط تیم ما با رعایت پروتوکل های
              بهداشت انجام میشود.تمرکز تیم ما به روی غذاهای سنتی و محلی ایرانی
              است. همچنین اگر...
            </p>
            <button className="btn-costume btn-costume-dark px-2">
              <i className="fa-solid fa-arrows-turn-right"></i>
              مطالعه بیشتر
            </button>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ paddingBottom: "10rem", paddingTop: "5rem" }}
      >
        <div className="row position-relative">
          <div className="row">
            <div className="col-3 col-md-2 recent-tour">
              <div className="d-flex flex-column text-green-gray">
                <img src="./images/tree.png" alt="sumImages" />
                <div className="recent-tour-info">
                  <span className="ms-1 fw-bold">سفر به ترکمنستان</span>
                  <h3
                    className="fs-1 fw-bold"
                    style={{ letterSpacing: "-3px" }}
                  >
                    <span>الاغ </span>
                    <span>سواری</span>
                  </h3>
                  <span className="ms-1 fw-bold">مقاله ها سفر نامه ها</span>
                </div>
              </div>
            </div>

            <div className="col-9 col-md-10">
              <>
                <Swiper
                  style={{ height: "435px", borderRadius: "5px" }}
                  slidesPerView={1}
                  centeredSlides={false}
                  slidesPerGroupSkip={2}
                  grabCursor={true}
                  keyboard={{
                    enabled: true,
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                  scrollbar={true}
                  navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                  className="mySwiper"
                >
                  {tours.slice(0, 7).map((tour) => (
                    <SwiperSlide key={tour._id}>
                      <img src={`./${tour.images[0]}`} alt="sumImage" />
                      <div className="overlay-img rounded-top">
                        <h5>
                          <Link
                            to={`/articles/${tour.href}`}
                            className="text-decoration-none"
                          >
                            درمورد سفر به {tour.location}
                          </Link>
                        </h5>
                        <p className="fs-7 text-white">
                          نوشته شده در شهریور 16, 1395
                        </p>
                        <p className="text-white px-2">{tour.description} </p>
                        <Link
                          to={`/articles/${tour.href}`}
                          className="btn-costume px-2 float-end text-decoration-none"
                        >
                          خواندن
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
