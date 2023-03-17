import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { contextNeededDatas } from "../../contextData/NeededDataApp";
import NotFound from "../Not-Found/NotFound";
import "./MainArticle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import TourComments from "../../Components/TourComments/TourComments";

export default function MainArticle() {
  const contentData = useContext(contextNeededDatas);
  const [tours, setTours] = useState([]);

  const [hasMainTour, setHasMainTour] = useState(false);
  const { region } = useParams();
  const [mainTour, setMainTour] = useState([]);

  async function fetchData() {
    setTours(contentData.region);
    await setMainTour(tours.filter((tour) => tour.href === region));

    if (mainTour.length > 0) {
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
  }, [mainTour]);

  return (
    <>
      {hasMainTour && (
        <>
          <header className="container-fluid bg-green-gray overflow-hidden p-0">
            <div className="main-tour__header">
              <div className="position-absolute bottom-0 ms-3">
                <Breadcrumb
                  href={[
                    ["/", "صفحه اصلی"],
                    ["/articles", "بلاگ ها"],
                    [`/articles/${region}`, mainTour[0].location],
                  ]}
                />
              </div>
            </div>
          </header>
          {mainTour.length > 0 ? (
            <main className="container-fluid mt-5">
              <div className="row justify-content-center">
                <div className="col-11 col-md-9">
                  <div className="blog-img-wrapper border">
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
                  <div className="my-4 px-3">
                    <h5 className="">
                      نوشته های مربوط به {mainTour[0].location}
                    </h5>
                    <div className="d-flex gap-4">
                      <span className="text-black-50 fs-7">
                        <i className="fa-regular fa-calendar-days fs-6 me-2 text-warning"></i>
                        شهریور 16, 1395
                      </span>
                      <span className="text-black-50 text-decoration-none fs-7">
                        <i className="fa-solid fa-tags fs-6 me-2 text-warning"></i>
                        قطار
                      </span>
                    </div>
                    <div className="fs-6">
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                        برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت
                        و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
                        متخصصان را می طلبد. تا با نرم افزارها شناخت بیشتری را
                        برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                        پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
                        داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
                        سخت تایپ به پایان رسد.
                      </p>
                      <p>
                        وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
                        سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                        قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                        از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                        با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در
                        شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
                        متخصصان را می طلبد. لورم ایپسوم متن ساختگی با تولید
                        سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                        است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                        نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                        باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده
                        شناخت فراوان جامعه و متخصصان را می طلبد. تا با نرم
                        افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                        طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                      </p>
                      <p>
                        در این صورت می توان امید داشت که تمام و دشواری موجود در
                        ارائه راهکارها و شرایط سخت تایپ به پایان رسد. وزمان مورد
                        نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                        گیرد.
                      </p>
                    </div>
                  </div>
                  <div className="row p-3 mx-1">
                    <div className="main-tour-comments">
                      <p className="fs-4">
                        {mainTour[0].comments.length} دیدگاه برای{" "}
                        {mainTour[0].location}
                      </p>
                      <TourComments comments={mainTour[0].comments} />
                    </div>

                    <div className="main-tour-comment_send">
                      <p className="text-muted m-0">دیدگاه خود را بنویسید</p>
                      <p className="text-muted">
                        نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز
                        علامت‌گذاری شده‌اند *
                      </p>
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
                    </div>
                  </div>
                </div>

                <aside className="d-none d-md-block col-md-3">
                  <div className="d-flex flex-column align-items-center">
                    {tours.slice(0, 4).map((tour, index) => (
                      <img
                        className="col-9 mb-4 rounded-3"
                        height="150"
                        src={`../${tour.images[2]}`}
                        key={`${tour._id}${index}`}
                        alt="locationPic"
                      />
                    ))}
                  </div>
                </aside>
              </div>
            </main>
          ) : (
            <NotFound />
          )}
        </>
      )}
    </>
  );
}
