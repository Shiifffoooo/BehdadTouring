import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { contextNeededDatas } from "../../contextData/NeededDataApp";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import "./ShowTours.css";

export default function ShowTours() {
  const [sorting, setSorting] = useState("-1");
  const [viewListOrGrid, setViewListOrGrid] = useState("list");

  const [itemSpliceNum, setItemSpliceNum] = useState(4);
  const [paginateStart, setPaginateStart] = useState(0);
  const [paginatingEnd, setPaginatingEnd] = useState(4);

  const contentData = useContext(contextNeededDatas);

  const [tours, setTours] = useState([]);
  const [shownTours, setShownTours] = useState([]);
  const [hasTour, setHasTour] = useState(false);

  async function fetchData() {
    await setTours(contentData.region);
    if (!tours.length) {
      setHasTour(false);
    } else {
      setHasTour(true);
    }
  }

  const getRandomItemsFromArray = (arr, randomCount) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, randomCount);
  };

  useEffect(() => {
    fetchData();
    setShownTours(tours);
  }, [tours]);

  useEffect(() => {
    switch (sorting) {
      case "-1":
        setShownTours(tours);
        break;
      case "1":
        let averageTours = () => {
          let container = [];
          for (let index = 0; index <= 5; index++) {
            // const  0 / 1 / 2 / 3 / 4 / 5
            let tourCloseToIndex = [...tours].map((tour) => {
              let allScore = Math.round(
                Number(
                  tour.comments
                    .map((cm) => cm.score)
                    .reduce((prev, curr) => {
                      let allScore = prev + curr;
                      return allScore;
                    })
                ) / tour.comments.length
              );

              // console.log(allScore);
              return allScore === index && container.unshift(tour);
            });
          }
          setShownTours(container);
        };
        averageTours();

        break;
      case "2":
        setShownTours([...tours].reverse());
        break;
      case "3":
        console.log("چون قیمت الکی است فعلا هندل نکردم");
        break;
      case "5":
        console.log("چون قیمت الکی است فعلا هندل نکردم");
        break;

      default:
        setShownTours(tours);
        break;
    }
  }, [sorting]);

  const fillStar = (score) => {
    const scoreStars = [];
    for (let i = 0; i < score; i++) {
      scoreStars.push(
        <img
          key={Math.random() * 10}
          src="../images/icons&SVG/star_fill.svg"
          alt="sumPicture"
        />
      );
    }
    for (let i = 0; i < 5 - score; i++) {
      scoreStars.unshift(
        <img
          key={Math.random() * 10}
          src="../images/icons&SVG/star.svg"
          alt="sumPicture"
        />
      );
    }
    return <>{scoreStars}</>;
  };

  const priceFunc = (tour) => {
    if (tour.fly) {
      return Number(tour.fly).toLocaleString();
    } else if (tour.ship) {
      return Number(tour.ship).toLocaleString();
    } else if (tour.train) {
      return Number(tour.train).toLocaleString();
    } else if (tour.bus) {
      return Number(tour.bus).toLocaleString();
    }
  };

  useEffect(() => {
    setPaginateStart(paginatingEnd - itemSpliceNum);
  }, [paginatingEnd]);

  return (
    <main id="tours" className="pt-4">
      <div className="container-fluid">
        <Breadcrumb
          top={true}
          href={[
            ["/", "صفحه اصلی"],
            ["/tours", "تورها"],
          ]}
        />

        <div className="row">
          <div className="col-12 col-md-8">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <span className="fs-4">
                نمایش {paginateStart +1}-{paginatingEnd} از {tours.length} نتیجه
              </span>
              <select
                className="form-select form-select-sm w-auto"
                onChange={(event) => setSorting(event.target.value)}
              >
                <option value="-1">مرتب سازی پیش فرض</option>
                <option value="1">مرتب سازی بر اساس محبوبیت</option>
                <option value="2">مرتب سازی بر اساس جدیدترین</option>
                <option value="3">مرتب سازی بر اساس هزینه: کم به زیاد</option>
                <option value="4">مرتب سازی بر اساس هزینه: زیاد به کم</option>
              </select>
              <div className="d-flex gap-2">
                <button
                  className={`btn ${
                    viewListOrGrid === "list" ? "btn-primary" : "btn-secondary"
                  } d-flex p-2`}
                  onClick={() => setViewListOrGrid("list")}
                >
                  <i
                    className="fas fa-th-list fs-3"
                    style={{ transform: "rotateY(180deg)" }}
                  ></i>
                </button>
                <button
                  className={`btn ${
                    viewListOrGrid === "grid" ? "btn-primary" : "btn-secondary"
                  } d-flex p-2`}
                  onClick={() => setViewListOrGrid("grid")}
                >
                  <i className="fas fa-th-large fs-3"></i>
                </button>
              </div>
            </div>

            {/* <!-- ______________________________________tour box details______________________________________ --> */}

            {/* <!-- ______________________________________list view tour box______________________________________ --> */}
            {viewListOrGrid === "list" ? (
              <div
                id="tour-box-container-list"
                className="row gap-4 justify-content-center my-4"
              >
                {hasTour ? (
                  <>
                    {[...shownTours]
                      .slice(paginateStart, paginatingEnd)
                      .map((tour) => (
                        <div
                          className="d-flex gap-3 p-4 shadow col-11"
                          key={tour._id}
                        >
                          <div className="tour-img">
                            <img src={`./${tour.images[0]}`} alt="sumPicture" />
                          </div>
                          <div className="tour-box-content">
                            <Link
                              to={`/tours/${tour.href}`}
                              className="tour-box-title fs-4"
                            >
                              {tour.location}
                            </Link>
                            <div className="tour-popularity">
                              <div className="d-flex">
                                {fillStar(
                                  Math.round(
                                    Number(
                                      tour.comments
                                        .map((cm) => cm.score)
                                        .reduce((prev, curr) => {
                                          let allScore = prev + curr;
                                          return allScore;
                                        }) / tour.comments.length
                                    )
                                  )
                                )}
                              </div>
                              <span className="px-1">
                                {tour.comments.length}
                              </span>{" "}
                              دیدگاه
                            </div>

                            <div className="text-muted fs-6">
                              <span className="text-primary">
                                {" "}
                                {priceFunc(tour.price)} تومان
                              </span>{" "}
                              / برای هر نفر
                            </div>
                            <div className="bg-light ps-3 fs-6 mb-2">
                              <span className="pe-2">
                                <i className="fa-regular fa-clock text-muted px-2"></i>{" "}
                                {tour.duration}
                              </span>
                              |
                              <span className="pe-2">
                                <i className="fa-regular fa-map text-muted px-2"></i>
                                {tour.travelPlan[0]}
                              </span>
                            </div>

                            <p className="text-muted fs-7 ps-2">
                              {tour.description}
                            </p>
                            <Link
                              to={`/tours/${tour.href}`}
                              className="btn btn-outline-primary"
                            >
                              جزییات را ببینید
                            </Link>
                          </div>
                        </div>
                      ))}
                  </>
                ) : (
                  <>
                    <div className="alert alert-danger w-75">
                      متاسفانه توری در سرور برای نمایش وجود ندارد.
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div
                id="tour-box-container-grid"
                className="row justify-content-center my-4"
              >
                {hasTour ? (
                  <>
                    {[...shownTours]
                      .slice(paginateStart, paginatingEnd)
                      .map((tour) => (
                        <div className="col-6 col-lg-4 mb-4" key={tour._id}>
                          <div className="shadow rounded-3 overflow-hidden">
                            <div className="tour-img">
                              <img
                                src={`./${tour.images[0]}`}
                                alt="sumPicture"
                              />
                            </div>
                            <div className="tour-box-content p-2">
                              <Link
                                to={`/tours/${tour.href}`}
                                className="tour-box-title fs-4"
                              >
                                {tour.location}
                              </Link>
                              <div className="tour-popularity">
                                <div className="d-flex">
                                  {fillStar(
                                    Math.round(
                                      Number(
                                        tour.comments
                                          .map((cm) => cm.score)
                                          .reduce((prev, curr) => {
                                            let allScore = prev + curr;
                                            return allScore;
                                          }) / tour.comments.length
                                      )
                                    )
                                  )}
                                </div>
                                <span className="px-1">
                                  {tour.comments.length}
                                </span>{" "}
                                دیدگاه
                              </div>

                              <div className="text-muted fs-6">
                                <span className="text-primary">
                                  {" "}
                                  {priceFunc(tour.price)} تومان
                                </span>{" "}
                                / برای هر نفر
                              </div>
                              <div className="bg-light ps-3 fs-7 mb-2">
                                <span className="pe-2">
                                  <i className="fa-regular fa-clock text-muted px-2"></i>{" "}
                                  {tour.duration}
                                </span>
                                |
                                <span className="pe-2">
                                  <i className="fa-regular fa-map text-muted px-2"></i>
                                  {tour.travelPlan[0]}
                                </span>
                              </div>

                              <p className="text-muted fs-7 ps-2">
                                {tour.description}
                              </p>
                              <Link
                                to={`/tours/${tour.href}`}
                                className="btn btn-outline-primary"
                              >
                                جزییات را ببینید
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                  </>
                ) : (
                  <>
                    <div className="alert alert-danger w-75">
                      متاسفانه توری در سرور برای نمایش وجود ندارد.
                    </div>
                  </>
                )}
              </div>
            )}

            {hasTour ? (
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() => {
                        0 < paginatingEnd - itemSpliceNum &&
                          setPaginatingEnd(paginatingEnd - itemSpliceNum);
                      }}
                    >
                      <span aria-hidden="true">
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </button>
                  </li>

                  {Array(Math.ceil(Number(tours.length / itemSpliceNum)))
                    .fill(null)
                    .map((value, index) => (
                      <li className="page-item" key={index + 1}>
                        <button
                          className={`page-link ${
                            paginatingEnd / itemSpliceNum === index + 1
                              ? "active"
                              : ""
                          }`}
                          onClick={() => {
                            setPaginatingEnd(itemSpliceNum * (index + 1));
                          }}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}

                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() => {
                        tours.length > paginatingEnd + itemSpliceNum &&
                          setPaginatingEnd(paginatingEnd + itemSpliceNum);
                      }}
                    >
                      <span aria-hidden="true">
                        <i className="fa-solid fa-arrow-left"></i>
                      </span>
                    </button>
                  </li>
                </ul>
              </nav>
            ) : (
              <div className="alert alert-warning w-25 mx-auto text-center">
                Error
              </div>
            )}
          </div>

          {/* <!-- ______________________________________side bar tours______________________________________ --> */}
          <aside className="col-12 col-md-4">
            <div className="row justify-content-center">
              <div id="last-tours" className="mb-4 mt-4 mt-md-0">
                <h4 className="fs-6">آخرین تورها</h4>
                {hasTour ? (
                  <>
                    {[...tours].slice(0, 5).map((tour) => (
                      <div key={tour._id}>
                        <hr />
                        <div className="tour-box">
                          <img src={`./${tour.images[1]}`} alt="sumPicture" />
                          <div className="tour-box-content">
                            <Link
                              to={`/tours/${tour.href}`}
                              className="tour-box-title"
                            >
                              {tour.location} - سفری شگفت انگیز
                            </Link>
                            <div className="tour-box-price">
                              <span className="px-2 py-1">
                                {priceFunc(tour.price)}
                              </span>
                              <span className="ms-1">برای هر نفر</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <div className="alert alert-danger">
                      متاسفانه توری در سرور برای نمایش وجود ندارد.
                    </div>
                  </>
                )}
              </div>

              <div className="row-fluid">
                <div className="col-11 mx-auto d-none d-lg-flex call-to-action">
                  <div className="call-to-action-bg--img">
                    <img src="./images/ship-travel.jpg" alt="sumPicture" />
                  </div>
                  <div className="call-to-action-wrapper text-white">
                    <h4 className="fs-5 fw-normal">یک سوال بپرسید؟</h4>
                    <p className="fs-6 mt-4 fw-lighter">
                      دریغ نکنید با ما تماس بگیرید. ما یک تیم متخصص و ما خوشحال
                      به صحبت کردن با شما می باشد.
                    </p>
                    <span className="text-warning">
                      <i
                        className="fa-solid fa-phone"
                        style={{ transform: "rotateY(180deg)" }}
                      ></i>
                      09029288498
                    </span>
                    <a href="#">Info@Midiyasoft.com</a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
