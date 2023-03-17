import React from "react";
import { Parallax } from "react-scroll-parallax";

import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing({tours}) {

  const getRandomItemsFromArray = (arr, randomCount) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, randomCount);
  };

  return (
    <div id="landing">
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-sm-8 col-md-6">
            <div className="row justify-content-center justify-content-sm-start">
              <div className="col-6 col-sm-6 col-md-6 col-lg-5">
                {getRandomItemsFromArray(tours, 1).map((tour) => (
                  <Parallax
                    className="card-parent"
                    translateY={["0", "-25"]}
                    opacity={[0.7, 1]}
                    key={tour._id}
                  >
                    <div className="card bg-dark text-white border-0 mb-2">
                      <img
                        src={`./${tour.images[0]}`}
                        height="300"
                        className="card-img"
                        alt="..."
                      />
                      <div className="card-img-overlay p-2 text-end">
                        <h5 className="card-title pe-2 pt-3 h-25 overflow-hidden">
                          {tour.location}
                          <div className="card-title-round">
                            <svg
                              height="150"
                              width="120"
                              preserveAspectRatio="xMidYMid meet"
                              version="1.0"
                              viewBox="0 0 634.000000 589.000000"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                fill="#Fff"
                                stroke="none"
                                transform="translate(0.000000,589.000000) scale(0.100000,-0.100000)"
                              >
                                <path
                                  d="M3097 4798 c-8 -18 -42 -102 -77 -186 -53 -127 -61 -155 -49 -163 38&#xA;-24 175 -69 211 -69 80 0 136 95 93 157 -15 21 -14 23 10 29 38 9 65 50 65 97&#xA;0 32 -6 46 -34 72 -28 26 -172 95 -198 95 -4 0 -14 -15 -21 -32z m128 -81 c46&#xA;-26 54 -53 27 -87 -18 -23 -22 -23 -60 -11 -67 22 -68 24 -48 75 10 25 23 46&#xA;29 46 7 0 30 -11 52 -23z m-27 -170 c17 -13 15 -62 -4 -81 -20 -20 -43 -20&#xA;-94 0 -44 18 -44 18 -14 91 l14 33 43 -17 c23 -9 48 -21 55 -26z"
                                />
                                <path
                                  d="M3430 4522 c-81 -40 -123 -161 -81 -229 23 -36 87 -73 127 -73 75 0&#xA;145 75 151 163 5 66 -20 110 -80 137 -52 24 -73 25 -117 2z m110 -72 c24 -24&#xA;25 -39 6 -84 -32 -76 -99 -102 -132 -51 -15 24 -15 28 1 70 28 76 85 105 125&#xA;65z"
                                />
                                <path
                                  d="M3702 4319 c-18 -12 -44 -41 -58 -66 -22 -37 -26 -53 -22 -95 5 -43&#xA;11 -57 41 -84 37 -35 90 -50 132 -40 32 8 92 61 111 98 20 39 20 97 0 135 -35&#xA;69 -137 95 -204 52z m126 -55 c37 -26 27 -80 -26 -136 -29 -32 -66 -36 -94&#xA;-11 -33 30 -15 89 42 137 37 30 47 32 78 10z"
                                />
                                <path
                                  d="M3988 4102 l-148 -156 27 -28 27 -28 36 35 c45 44 75 47 67 6 -3 -15&#xA;-9 -50 -12 -77 -6 -45 -4 -51 23 -77 36 -34 34 -36 53 91 14 95 22 102 107&#xA;102 71 0 80 12 37 44 -34 26 -40 28 -108 21 l-72 -7 85 86 85 86 -30 30 -30&#xA;29 -147 -157z"
                                />
                                <path
                                  d="M4290 3719 c-144 -110 -137 -101 -111 -138 l22 -31 86 65 c47 36 94&#xA;65 105 65 18 0 58 -33 58 -48 0 -18 -33 -51 -104 -102 -41 -30 -75 -59 -75&#xA;-65 0 -11 34 -55 43 -55 4 0 47 30 96 67 106 80 128 114 106 166 -15 38 -50&#xA;67 -79 67 -16 0 -17 3 -7 15 9 11 8 20 -10 45 -12 16 -22 30 -23 29 -1 0 -49&#xA;-36 -107 -80z"
                                />
                                <path
                                  d="M4516 3458 c-22 -6 -57 -29 -82 -53 -40 -38 -44 -46 -44 -89 0 -155&#xA;165 -206 274 -85 31 33 36 46 36 88 0 64 -42 125 -97 140 -21 6 -40 10 -43 10&#xA;-3 -1 -22 -6 -44 -11z m111 -94 c15 -24 15 -29 2 -52 -38 -68 -134 -94 -166&#xA;-46 -15 24 -15 29 -2 52 38 68 134 94 166 46z"
                                />
                                <path
                                  d="M4660 3109 c-100 -73 -124 -96 -122 -113 5 -39 21 -44 107 -35 44 5&#xA;86 8 94 7 10 -2 -91 -93 -137 -123 -1 -1 3 -16 9 -34 10 -28 15 -32 38 -28 14&#xA;3 85 13 157 22 l132 18 -13 30 c-7 17 -18 33 -23 35 -6 2 -47 -4 -93 -13 -45&#xA;-8 -84 -13 -86 -11 -2 2 30 29 72 61 77 60 84 70 63 98 -11 14 -23 15 -92 6&#xA;-43 -5 -86 -9 -94 -7 -9 2 17 24 61 53 42 28 77 55 76 60 0 6 -5 22 -12 38&#xA;l-12 27 -125 -91z"
                                />
                              </g>
                            </svg>
                          </div>
                        </h5>
                        <div className="card-time-book px-2">
                          <i
                            className="fa-solid fa-arrow-left"
                            style={{ color: "red" }}
                          ></i>
                          <br />
                          <p className="m-0">3 تا 15 مهرماه</p>
                        </div>
                      </div>
                    </div>
                  </Parallax>
                ))}
              </div>
              <div
                className="col-6 col-sm-6 col-md-6 col-lg-5"
                style={{ transform: "translateY(-6rem)" }}
              >
                {getRandomItemsFromArray(tours, 2).map((tour) => (
                  <Parallax
                    className="card-parent"
                    key={tour._id}
                    translateY={["0", "-25"]}
                    opacity={[0.7, 1]}
                  >
                    <div className="card bg-dark text-white border-0 mb-2">
                      <img
                        src={`./${tour.images[0]}`}
                        height="300"
                        className="card-img"
                        alt="..."
                      />
                      <div className="card-img-overlay p-2 text-end">
                        <h5 className="card-title pe-2 pt-3 h-25 overflow-hidden">
                          {tour.location}
                          <div className="card-title-round">
                            <svg
                              height="150"
                              width="120"
                              preserveAspectRatio="xMidYMid meet"
                              version="1.0"
                              viewBox="0 0 634.000000 589.000000"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                fill="#Fff"
                                stroke="none"
                                transform="translate(0.000000,589.000000) scale(0.100000,-0.100000)"
                              >
                                <path
                                  d="M3097 4798 c-8 -18 -42 -102 -77 -186 -53 -127 -61 -155 -49 -163 38&#xA;-24 175 -69 211 -69 80 0 136 95 93 157 -15 21 -14 23 10 29 38 9 65 50 65 97&#xA;0 32 -6 46 -34 72 -28 26 -172 95 -198 95 -4 0 -14 -15 -21 -32z m128 -81 c46&#xA;-26 54 -53 27 -87 -18 -23 -22 -23 -60 -11 -67 22 -68 24 -48 75 10 25 23 46&#xA;29 46 7 0 30 -11 52 -23z m-27 -170 c17 -13 15 -62 -4 -81 -20 -20 -43 -20&#xA;-94 0 -44 18 -44 18 -14 91 l14 33 43 -17 c23 -9 48 -21 55 -26z"
                                />
                                <path
                                  d="M3430 4522 c-81 -40 -123 -161 -81 -229 23 -36 87 -73 127 -73 75 0&#xA;145 75 151 163 5 66 -20 110 -80 137 -52 24 -73 25 -117 2z m110 -72 c24 -24&#xA;25 -39 6 -84 -32 -76 -99 -102 -132 -51 -15 24 -15 28 1 70 28 76 85 105 125&#xA;65z"
                                />
                                <path
                                  d="M3702 4319 c-18 -12 -44 -41 -58 -66 -22 -37 -26 -53 -22 -95 5 -43&#xA;11 -57 41 -84 37 -35 90 -50 132 -40 32 8 92 61 111 98 20 39 20 97 0 135 -35&#xA;69 -137 95 -204 52z m126 -55 c37 -26 27 -80 -26 -136 -29 -32 -66 -36 -94&#xA;-11 -33 30 -15 89 42 137 37 30 47 32 78 10z"
                                />
                                <path
                                  d="M3988 4102 l-148 -156 27 -28 27 -28 36 35 c45 44 75 47 67 6 -3 -15&#xA;-9 -50 -12 -77 -6 -45 -4 -51 23 -77 36 -34 34 -36 53 91 14 95 22 102 107&#xA;102 71 0 80 12 37 44 -34 26 -40 28 -108 21 l-72 -7 85 86 85 86 -30 30 -30&#xA;29 -147 -157z"
                                />
                                <path
                                  d="M4290 3719 c-144 -110 -137 -101 -111 -138 l22 -31 86 65 c47 36 94&#xA;65 105 65 18 0 58 -33 58 -48 0 -18 -33 -51 -104 -102 -41 -30 -75 -59 -75&#xA;-65 0 -11 34 -55 43 -55 4 0 47 30 96 67 106 80 128 114 106 166 -15 38 -50&#xA;67 -79 67 -16 0 -17 3 -7 15 9 11 8 20 -10 45 -12 16 -22 30 -23 29 -1 0 -49&#xA;-36 -107 -80z"
                                />
                                <path
                                  d="M4516 3458 c-22 -6 -57 -29 -82 -53 -40 -38 -44 -46 -44 -89 0 -155&#xA;165 -206 274 -85 31 33 36 46 36 88 0 64 -42 125 -97 140 -21 6 -40 10 -43 10&#xA;-3 -1 -22 -6 -44 -11z m111 -94 c15 -24 15 -29 2 -52 -38 -68 -134 -94 -166&#xA;-46 -15 24 -15 29 -2 52 38 68 134 94 166 46z"
                                />
                                <path
                                  d="M4660 3109 c-100 -73 -124 -96 -122 -113 5 -39 21 -44 107 -35 44 5&#xA;86 8 94 7 10 -2 -91 -93 -137 -123 -1 -1 3 -16 9 -34 10 -28 15 -32 38 -28 14&#xA;3 85 13 157 22 l132 18 -13 30 c-7 17 -18 33 -23 35 -6 2 -47 -4 -93 -13 -45&#xA;-8 -84 -13 -86 -11 -2 2 30 29 72 61 77 60 84 70 63 98 -11 14 -23 15 -92 6&#xA;-43 -5 -86 -9 -94 -7 -9 2 17 24 61 53 42 28 77 55 76 60 0 6 -5 22 -12 38&#xA;l-12 27 -125 -91z"
                                />
                              </g>
                            </svg>
                          </div>
                        </h5>
                        <div className="card-time-book px-2">
                          <i
                            className="fa-solid fa-arrow-left"
                            style={{ color: "red" }}
                          ></i>
                          <br />
                          <p className="m-0">3 تا 15 مهرماه</p>
                        </div>
                      </div>
                    </div>
                  </Parallax>
                ))}
              </div>
            </div>
          </div>
          <div dir="ltr" className="col-12 col-sm-4 col-md-6 pt-md-5">
            <Parallax translateY={["0", "-50"]}>
              <h2 className="text-capitalize display-4 fw-bold d-inline text-vanilla">
                detour <br />
                your <br />
                journey
              </h2>
              <Link to="/tours" className="btn-costume px-2 me-3 text-decoration-none d-inline-block">
                تورهای ما
                <i className="fa-solid fa-arrows-turn-right ms-3"></i>
              </Link>
            </Parallax>
          </div>
        </div>
      </div>
    </div>
  );
}
