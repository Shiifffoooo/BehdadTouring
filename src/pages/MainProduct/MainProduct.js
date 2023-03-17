import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { contextNeededDatas } from "../../contextData/NeededDataApp";
import NotFound from "../Not-Found/NotFound";
import "./MainProduct.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import TourComments from "../../Components/TourComments/TourComments";

export default function MainProduct() {
  const contentData = useContext(contextNeededDatas);

  const [products, setProducts] = useState([]);
  const [productDetailShow, setProductDetailShow] = useState("desc");
  const [hasMainProduct, setHasMainProduct] = useState(false);
  const [productHasBeenBuyed, setProductHasBeenBuyed] = useState(false);
  const { nameProduct } = useParams();
  const [mainProduct, setMainProduct] = useState([]);
  const [count, setCount] = useState(1);

  async function fetchData() {
    setProducts(contentData.products);
    await setMainProduct(
      products.filter((product) => product.href === nameProduct)
    );

    // if (!mainProduct.length) {
    //   setHasMainProduct(true);
    // }
  }

  useEffect(() => {
    fetchData();
  }, [products]);
  useEffect(() => {
    fetchData();
    setCount(1);
  }, [nameProduct]);

  useEffect(() => {
    mainProduct.length && setHasMainProduct(true);
    console.log(mainProduct);
  }, [mainProduct]);

  const tourContentShow = (event) => {
    let buttons = document.querySelectorAll(".tour-content_link > button");
    buttons.forEach((btn) => {
      btn.classList.contains("active") && btn.classList.remove("active");
    });
    event.target.classList.add("active");
  };

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

  const getRandomItemsFromArray = (arr, randomCount) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, randomCount);
  };
  const numberChange = (event) =>
    setCount((preCount) => (preCount > 0 ? event.target.value : 1));

  function addToClientBasket() {
    let oldBasket = JSON.parse(localStorage.getItem("basket"));
    let basket = [];
    if (oldBasket) {
      oldBasket.map((pr) => basket.push(pr));
      let newShopBasket = {
        id: mainProduct[0]._id,
        name: mainProduct[0].name,
        price: mainProduct[0].price,
        images: mainProduct[0].images,
        count: Number(count),
      };
      if (basket.some((item) => item.id === newShopBasket.id)) {
        // console.log("it is OK");

        let letsSee = basket.map((item) => {
          if (newShopBasket.id === item.id) {
            item.count += Number(count);
          }
          return item;
        });
        console.log("letsSee", letsSee);
        // basket.push(newShopBasket);
        localStorage.setItem("basket", JSON.stringify(basket));
        showSuccess();
      } else {
        // console.log("it is Not OK");
        basket.push(newShopBasket);
        localStorage.setItem("basket", JSON.stringify(basket));
        showSuccess();
      }
    } else {
      let shopBasket = {
        id: mainProduct[0]._id,
        name: mainProduct[0].name,
        price: mainProduct[0].price,
        images: mainProduct[0].images,
        count: Number(count),
      };

      basket.push(shopBasket);
      localStorage.setItem("basket", JSON.stringify(basket));

      showSuccess();
    }
  }

  function showSuccess() {
    setProductHasBeenBuyed(true);
    setTimeout(() => {
      setProductHasBeenBuyed(false);
    }, 4000);
  }

  return (
    <>
      {hasMainProduct && (
        <>
          {mainProduct.length > 0 ? (
            <>
              <header className="container-fluid bg-green-gray overflow-hidden p-0">
                <div className="main-tour__header">
                  <div className="position-absolute bottom-0 ms-3">
                    <Breadcrumb
                      href={[
                        ["/", "صفحه اصلی"],
                        ["/shop", "مجصولات"],
                        [`/shop/${nameProduct}`, mainProduct[0].name],
                      ]}
                    />
                  </div>
                </div>
              </header>
              <main className="container-fluid">
                <div className="row">
                  <div className="col-12 col-md-8">
                    {productHasBeenBuyed ? (
                      <div className="bg-secondary bg-opacity-10 border-top border-3 border-success my-3 p-3 d-flex align-items-center justify-content-between">
                        <span className="d-flex align-items-center fs-7">
                          <i className="fa-solid fa-check bg-success p-2 me-2 rounded-circle text-white"></i>
                          {count} عدد “{mainProduct[0].name}” به سبد خرید شما
                          افزوده شد.
                        </span>
                        <Link
                          to="/basket"
                          className="btn-costume btn-costume-dark text-decoration-none rounded-1 px-2"
                        >
                          مشاهده سبد خرید
                        </Link>
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="row mt-3">
                      <div className="col-7">
                        <div className="tour_images-sweeping border">
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
                                slidesPerView: 1,
                              },
                            }}
                            scrollbar={true}
                            navigation={true}
                            pagination={{
                              clickable: true,
                            }}
                            modules={[
                              Keyboard,
                              Scrollbar,
                              Navigation,
                              Pagination,
                            ]}
                            className="mySwiper"
                          >
                            {mainProduct[0].images.map((img, index) => (
                              <SwiperSlide key={index + 1}>
                                <img src={`../${img}`} alt="sumImage" />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </div>
                      <div className="col-5">
                        <div>
                          <span className="fs-4">{mainProduct[0].name}</span>
                          <div className="d-flex">
                            <div className="tour-popularity">
                              <div className="d-flex">
                                {fillStar(
                                  Math.round(
                                    Number(
                                      mainProduct[0].comments
                                        .map((cm) => cm.score)
                                        .reduce((prev, curr) => {
                                          let allScore = prev + curr;
                                          return allScore;
                                        }) / mainProduct[0].comments.length
                                    )
                                  )
                                )}
                              </div>
                            </div>
                            <span className="text-warning">
                              (دیدگاه {mainProduct[0].comments.length} کاربر)
                            </span>
                          </div>
                        </div>

                        <p className="fw-bold fs-5 py-3 m-0 border-bottom">
                          قیمت: {Number(mainProduct[0].price).toLocaleString()}{" "}
                          تومان
                        </p>
                        <p className="fs-6 py-3 border-bottom">
                          {mainProduct[0].description}
                        </p>
                        <div className="d-flex align-items-center gap-2">
                          <div className="w-25">
                            <input
                              type="number"
                              className="form-control bg-light"
                              id="product-number"
                              value={count}
                              onChange={numberChange}
                            />
                          </div>
                          <button
                            className="btn btn-outline-info"
                            onClick={addToClientBasket}
                          >
                            افزودن به سبد خرید
                          </button>
                          <Link
                            to="/basket"
                            className="btn-costume btn-costume-dark text-decoration-none rounded-1 px-2"
                          >
                            سبد خرید
                          </Link>
                        </div>
                        <div className="my-3 fs-7">
                          <span>
                            <i className="fa-solid fa-tags fs-5 text-warning me-2"></i>
                            دسته بندی :
                          </span>
                          <span className="text-warning ms-1">
                            ابزار های مسافرت
                          </span>
                        </div>
                      </div>
                    </div>

                    <section className="tour-content mx-0">
                      <div className="ms-5">
                        <ul className="d-flex gap-2 gap-md-5 ps-0 mb-0">
                          <li className="tour-content_link">
                            <button
                              className="text-white bg-green-gray border-0 fs-7 p-3 active"
                              onClick={(event) => {
                                tourContentShow(event);
                                setProductDetailShow("desc");
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
                                setProductDetailShow("comments");
                              }}
                            >
                              دیدگاه({mainProduct[0].comments.length})
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div className="row p-3 mx-1">
                        {/* <!--______________________________________توضیح_______________________________________--> */}
                        {productDetailShow === "desc" && (
                          <p className="pb-2 m-0">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است. لورم ایپسوم متن ساختگی با تولید سادگی
                            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                            است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                            سطرآنچنان که لازم است.
                          </p>
                        )}

                        {/* <!--______________________________________دیدگاه_______________________________________--> */}
                        {productDetailShow === "comments" && (
                          <TourComments comments={mainProduct[0].comments} />
                        )}
                      </div>
                    </section>

                    <div className="container relevant-tours my-4">
                      <p className="fs-3">محصولات مرتبط</p>
                      <div
                        id="tour-box-container-grid"
                        className="row justify-content-center my-4"
                      >
                        {getRandomItemsFromArray([...products], 3).map(
                          (product) => (
                            <div
                              className="col-6 col-lg-4 mb-4"
                              key={product._id}
                            >
                              <div className="shadow rounded-3 overflow-hidden">
                                <div className="tour-img">
                                  <img
                                    src={`../${product.images[0]}`}
                                    alt="sumPicture"
                                  />
                                </div>
                                <div className="tour-box-content p-2">
                                  <Link
                                    to={`/shop/${product.href}`}
                                    className="tour-box-title fs-4"
                                  >
                                    {product.name}
                                  </Link>
                                  <div className="tour-popularity">
                                    <div className="d-flex">
                                      {fillStar(
                                        Math.round(
                                          Number(
                                            product.comments
                                              .map((cm) => cm.score)
                                              .reduce((prev, curr) => {
                                                let allScore = prev + curr;
                                                return allScore;
                                              }) / product.comments.length
                                          )
                                        )
                                      )}
                                    </div>
                                    {product.comments.length} دیدگاه
                                  </div>
                                  <div className="text-muted fs-6">
                                    <span className="text-primary">
                                      {" "}
                                      {Number(
                                        product.price
                                      ).toLocaleString()}{" "}
                                      تومان
                                    </span>
                                  </div>

                                  <p className="text-muted fs-7 ps-2">
                                    {product.description}
                                  </p>
                                  <Link
                                    to={`/shop/${product.href}`}
                                    className="btn btn-outline-primary"
                                  >
                                    جزییات را ببینید
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <aside className="col-12 col-md-4" id="price-form">
                    <h5 className="text-white bg-warning pb-2 pt-2 ps-3 mb-0">
                      قیمت: {Number(mainProduct[0].price).toLocaleString()}{" "}
                      تومان
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
                      <a href="https://t.me/Shiifffoooo" className="btn btn-primary text-decoration-none">
                        ارسال
                      </a>
                    </form>
                  </aside>
                </div>
              </main>
            </>
          ) : (
            <NotFound />
          )}
        </>
      )}
    </>
  );
}
