import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer({ top, quote }) {
  return (
    <footer id="footer" className={`${top ? "top-0" : ""}`}>
      <div className="container-fluid">
        {quote ? (
          <div className="row justify-content-center py-5">
            <h2 className="w-50 text-center text-green-gray" dir="ltr">
              'Traveling <br />
              it leaves you speechless <br />
              then turns you into a storyteller.'
            </h2>
            <span>- Ibn Battuta</span>
          </div>
        ) : (
          ""
        )}
        <div className="row">
          <div className="jojo-icon">
            <svg
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
              viewBox="0 0 1352.000000 1036.000000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="#000000"
                stroke="none"
                transform="translate(0.000000,1036.000000) scale(0.100000,-0.100000)"
              >
                <path
                  d="M2500 9185 c-102 -21 -234 -80 -260 -116 -3 -4 -33 -29 -67 -55 -34&#xA;          -27 -78 -73 -98 -102 -29 -43 -171 -437 -721 -1999 -376 -1071 -689 -1952&#xA;          -695 -1960 -9 -10 -51 -13 -181 -13 -156 0 -169 -1 -166 -18 3 -15 20 -17 166&#xA;          -20 89 -1 162 -6 162 -11 0 -5 -52 -157 -115 -337 -64 -180 -113 -334 -110&#xA;          -342 3 -7 13 -12 22 -10 14 2 47 87 139 348 l121 345 977 3 976 2 0 -2450 0&#xA;          -2450 25 0 25 0 0 2450 0 2450 243 0 c133 0 252 3 265 6 l22 6 0 -2456 0&#xA;          -2456 25 0 25 0 0 2459 0 2460 48 6 c88 13 274 81 317 117 5 5 25 19 42 32 50&#xA;          35 112 119 128 173 13 41 15 189 15 965 l0 918 4588 2 c4579 3 4587 3 4587 23&#xA;          0 20 -8 20 -4155 23 l-4155 2 -447 447 c-328 328 -448 454 -448 471 0 12 -17&#xA;          75 -38 140 -21 64 -51 155 -65 202 -15 47 -62 150 -104 230 -72 135 -85 153&#xA;          -183 250 -106 107 -253 214 -354 258 -45 20 -64 22 -270 21 -142 -1 -244 -6&#xA;          -286 -14z m525 -40 c18 -9 41 -24 52 -34 11 -10 29 -22 41 -25 12 -4 22 -12&#xA;          22 -17 0 -5 5 -9 11 -9 26 0 142 -91 229 -180 144 -146 208 -275 325 -645 31&#xA;          -99 61 -185 66 -191 5 -6 9 -308 9 -735 -1 -398 2 -1010 6 -1359 8 -712 8&#xA;          -701 -63 -788 -36 -45 -159 -132 -185 -132 -8 0 -18 -4 -24 -9 -17 -16 -178&#xA;          -58 -265 -70 -109 -14 -2529 -16 -2529 -1 0 8 1312 3744 1361 3875 14 39 38&#xA;          71 87 120 71 69 190 152 232 161 14 3 48 14 75 24 67 26 80 27 313 29 166 1&#xA;          210 -2 237 -14z m1205 -1570 l395 -395 -398 0 -397 0 0 395 c0 217 1 395 3&#xA;          395 1 0 180 -178 397 -395z"
                />
                <path
                  d="M2233 8354 c-3 -8 -1 -20 4 -25 5 -5 211 -8 524 -7 506 3 514 3 514&#xA;          23 0 20 -8 20 -518 23 -463 2 -518 1 -524 -14z"
                />
              </g>
            </svg>
          </div>
          <div className="social-wrapper">
            <a
              href="mailto: behdadtns@gmail.com"
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-google"></i>
            </a>
            <a href="#" className="text-decoration-none">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
            <a
              href="https://wa.me/+989029288498"
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="https://t.me/Shiifffoooo"
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a
              href="https://instagram.com/_u/behdadfr/"
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-9 col-sm-9 col-md-7 text-green-gray">
              <div className="row mt-md-4 mt-lg-4" id="footer-links">
                <div className="col-4">
                  <h4>سفرها</h4>
                  <p className="mb-2">
                    <Link
                      to="/tours/isfahan"
                      className="text-decoration-none word-break"
                    >
                      اصفهان
                    </Link>
                  </p>
                  <p className="mb-2">
                    <Link
                      to="/tours/kerman"
                      className="text-decoration-none word-break"
                    >
                      کرمان
                    </Link>
                  </p>
                  <p className="mb-2">
                    <Link
                      to="/tours/mashhad"
                      className="text-decoration-none word-break"
                    >
                      مشهد
                    </Link>
                  </p>
                </div>
                <div className="col-4">
                  <h4>وبلاگ</h4>
                  <p className="mb-2">
                    <Link
                      to="/articles/isfahan"
                      className="text-decoration-none word-break"
                    >
                      سفر ما به تنکابن
                    </Link>
                  </p>
                  <p className="mb-2">
                    <Link
                      to="/articles/gheshm"
                      className="text-decoration-none word-break"
                    >
                      منو لیدر در هتل
                    </Link>
                  </p>
                  <p className="mb-2">
                    <Link
                      to="/articles/kish"
                      className="text-decoration-none word-break"
                    >
                      الاغ سواری در شهر
                    </Link>
                  </p>
                </div>
                <div className="col-4">
                  <h4>درباره ما</h4>
                  <p className="mb-2">
                    <Link
                      to="/contact-me"
                      className="text-decoration-none word-break"
                    >
                      آدرس
                    </Link>
                  </p>

                  <p className="mb-2">
                    <Link
                      to="/user/login"
                      className="btn-costume btn-costume-dark px-2 w-75 fs-5 text-decoration-none"
                    >
                      ورود
                    </Link>
                  </p>

                  <p className="mb-2">
                    <Link
                      to="/user/sign-in"
                      className="btn-costume btn-costume-dark px-2 w-75 fs-5 text-decoration-none"
                    >
                      ثبت نام
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
