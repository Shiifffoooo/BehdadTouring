import React, { useCallback, useContext, useEffect, useState } from "react";
import "./MainTour.css";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import TourDescription from "../../Components/TourDescription/TourDescription";
import TravelProgram from "../../Components/TravelProgram/TravelProgram";
import TourComments from "../../Components/TourComments/TourComments";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import { contextNeededDatas } from "../../contextData/NeededDataApp";
import { useParams } from "react-router";
import NotFound from "../../pages/Not-Found/NotFound";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

export default function MainTour() {
  const contentData = useContext(contextNeededDatas);
  const [tourDetailShow, setTourDetailShow] = useState("desc");
  const [tours, setTours] = useState([]);
  const [mainTour, setMainTour] = useState([]);
  const [hasMainTour, setHasMainTour] = useState(false);
  const [price, setPrice] = useState([[0, 0]]);
  const { region } = useParams();

  const tourContentShow = (event) => {
    let buttons = document.querySelectorAll(".tour-content_link > button");
    buttons.forEach((btn) => {
      btn.classList.contains("active") && btn.classList.remove("active");
    });
    event.target.classList.add("active");
  };

  async function fetchData() {
    setTours(contentData.region);
    await setMainTour(tours.filter((tour) => tour.href === region));
    if (!mainTour.length) {
      setHasMainTour(true);
      
    }
  }

  useEffect(() => {
    fetchData();
  }, [tours]);

  useEffect(() => {
    fetchData();
  }, [region]);

  useEffect(() => {
    mainTour.length && setHasMainTour(true);
    document.title =`BehdadTouring | ${region.toLocaleUpperCase()}`
  }, [mainTour]);

  return (
    <>
      {hasMainTour && (
        <>
          {mainTour.length > 0 ? (
            <>
              <header className="container-fluid bg-green-gray overflow-hidden p-0">
                <div className="main-tour__header">
                  <div className="position-absolute bottom-0 ms-3">
                    <Breadcrumb
                      href={[
                        ["/", "صفحه اصلی"],
                        ["/tours", "تورها"],
                        [`/${region}`, mainTour[0].location],
                      ]}
                    />
                  </div>
                </div>
              </header>

              <main className="container-fluid">
                <div className="row">
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2">
                      <span className="fs-4">
                        {mainTour[0].location} رو کشف کنید
                      </span>
                      <select
                        className="form-select form-select-sm w-25 bg-light"
                        onChange={(event) => {
                          if (event.target.value !== "-1") {
                            let filterPrice = Object.entries(
                              mainTour[0].price
                            ).filter(
                              (p) => p[0] === event.target.value && p[0]
                            );
                            setPrice(filterPrice);
                          } else {
                            setPrice([[0, 0]]);
                          }
                        }}
                      >
                        <option value="-1">راه را انتخاب کنید *</option>
                        {mainTour[0].howToGo.map((go, index) => (
                          <option key={index + 1} value={go[1]}>
                            {go[0]}
                          </option>
                        ))}
                      </select>
                      <span className="text-uppercase">
                        کد: {mainTour[0]._id}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
                      <span className="fs-6 fw-bold">
                        <i className="fa-regular fa-clock fs-5 text-warning me-2"></i>{" "}
                        {mainTour[0].duration}
                      </span>
                      <div className="d-flex flex-column">
                        <span>
                          <i className="fa-regular fa-font-awesome fs-5 text-warning me-2"></i>
                          دسته بندی:
                        </span>
                        <span>
                          {price[0][0] === 0 && "انتخاب کنید"}
                          {price[0][0] === "fly" && "با هواپیما"}
                          {price[0][0] === "ship" && "راه دریایی"}
                          {price[0][0] === "train" && "راه ریلی"}
                          {price[0][0] === "bus" && "با اتوبوس"},{" "}
                          {mainTour[0].travelPlan[0]}
                        </span>
                      </div>
                      <span className="">
                        قیمت: {Number(price[0][1]).toLocaleString()} تومان
                      </span>
                    </div>
                    <div className="tour_images-sweeping border rounded">
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
                          476: {
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
                        {mainTour[0].images.map((img, index) => (
                          <SwiperSlide key={index + 1}>
                            <img src={`../${img}`} alt="sumImage" />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <section className="tour-content mx-0">
                      <div className="ms-5">
                        <ul className="d-flex gap-2 gap-md-5 ps-0 mb-0">
                          <li className="tour-content_link">
                            <button
                              className="text-white bg-green-gray border-0 fs-7 p-3 active"
                              onClick={(event) => {
                                tourContentShow(event);
                                setTourDetailShow("desc");
                              }}
                            >
                              توضیح
                            </button>
                          </li>
                          <li className="tour-content_link">
                            <button
                              className="text-white bg-green-gray border-0 fs-7 p-3"
                              onClick={(event) => {
                                tourContentShow(event);
                                setTourDetailShow("travel-program");
                              }}
                            >
                              برنامه سفر
                            </button>
                          </li>
                          <li className="tour-content_link">
                            <button
                              className="text-white bg-green-gray border-0 fs-7 p-3"
                              onClick={(event) => {
                                tourContentShow(event);
                                setTourDetailShow("comments");
                              }}
                            >
                              دیدگاه({mainTour[0].comments.length})
                            </button>
                          </li>
                        </ul>
                      </div>

                      {/* <!--______________________________________توضیح_______________________________________--> */}

                      {tourDetailShow === "desc" && (
                        <TourDescription desc={mainTour[0].description} />
                      )}
                      {/* <!--______________________________________برنامه سفر_______________________________________--> */}
                      {tourDetailShow === "travel-program" && (
                        <TravelProgram plans={mainTour[0].travelPlan} />
                      )}
                      {/* <!--______________________________________دیدگاه_______________________________________--> */}
                      {tourDetailShow === "comments" && (
                        <TourComments comments={mainTour[0].comments} />
                      )}
                    </section>

                    <RelevantTours tours={tours} />
                  </div>

                  <aside className="col-12 col-md-4" id="price-form">
                    <h5 className="text-white bg-warning pb-2 pt-2 ps-3 mb-0">
                      قیمت: {Number(price[0][1]).toLocaleString()} تومان
                    </h5>
                    <form className="border border-1 p-3 rounded-bottom">
                      <div className="mb-3">
                        <label
                          htmlFor="username"
                          className="form-label text-black"
                        >
                          نام
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="familyname"
                          className="form-label text-black"
                        >
                          نام خانوادگی
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="familyname"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="useremail"
                          className="form-label text-black"
                        >
                          ایمیل
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="useremail"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="telnumber"
                          className="form-label text-black"
                        >
                          موبایل
                        </label>
                        <input
                          type="tel"
                          maxLength="11"
                          className="form-control"
                          id="telnumber"
                        />
                      </div>
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check"
                        />
                        <label
                          className="form-check-label text-dark"
                          htmlFor="check"
                        >
                          منو به یاد داشته باش.
                        </label>
                      </div>
                      <a
                        href="https://t.me/Shiifffoooo"
                        className="btn btn-primary text-decoration-none"
                      >
                        ارسال
                      </a>
                    </form>
                  </aside>
                </div>
              </main>
              <Footer top={true} quote={true} />
            </>
          ) : (
            <NotFound />
          )}
        </>
      )}
    </>
  );
}

const RelevantTours = ({ tours }) => {
  // const getRandomItemsFromArray = (arr, randomCount) => {
  //   const shuffled = [...arr].sort(() => 0.5 - Math.random());
  //   return shuffled.slice(0, randomCount);
  // };

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

  return (
    <div className="container relevant-tours my-4">
      <p className="fs-3">تورهای مرتبط</p>
      <div className="row mt-4">
        {tours.slice(0, 3).map((tour) => (
          <div className="col-6 col-lg-4 mb-3" key={tour._id}>
            <div className="shadow rounded-3 overflow-hidden">
              <div className="tour-img">
                <img src={`../${tour.images[0]}`} alt="star" />
              </div>
              <div className="tour-box-content p-2">
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
                  {tour.comments.length} دیدگاه
                </div>
                <Link
                  to={`/tours/${tour.href}`}
                  className="tour-box-title fs-4"
                >
                  {tour.location}
                </Link>
                <div className="text-muted fs-6">
                  <span className="text-primary">
                    {priceFunc(tour.price)} تومان
                  </span>
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
                <p className="text-muted fs-7 ps-2">{tour.description}</p>
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
      </div>
    </div>
  );
};
