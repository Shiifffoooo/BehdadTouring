import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { contextNeededDatas } from "../../contextData/NeededDataApp";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

export default function ShopIndex() {
  const [viewListOrGrid, setViewListOrGrid] = useState("list");
  const contentData = useContext(contextNeededDatas);
  const [products, setProducts] = useState([]);
  const [hasProduct, setHasProduct] = useState(false);

  async function fetchData() {
    await setProducts(contentData.products);
    if (!products.length) {
      setHasProduct(false);
    } else {
      setHasProduct(true);
    }
  }
  useEffect(() => {
    fetchData();
  }, [products]);

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

  return (
    <>
      <header className="container-fluid bg-green-gray overflow-hidden p-0">
        <div className="main-tour__header">
          <div className="position-absolute bottom-0 ms-3">
            <Breadcrumb
              href={[
                ["/", "صفحه اصلی"],
                ["/shop", "فروشگاه"],
              ]}
            />
          </div>
        </div>
      </header>
      <main className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <span className="fs-4">
                نمایش {products.length} از {products.length} نتیجه
              </span>

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
                {products.map((product) => (
                  <div
                    className="d-flex gap-3 p-4 shadow col-11"
                    key={product._id}
                  >
                    <div className="tour-img">
                      <img src={`./${product.images[0]}`} alt="SumPicture" />
                    </div>
                    <div className="tour-box-content">
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
                        <span className="px-1">{product.comments.length}</span>
                        دیدگاه
                      </div>
                      <div className="text-muted fs-6">
                        <span className="text-primary">
                          {" "}
                          {Number(product.price).toLocaleString()} تومان
                        </span>
                      </div>

                      <p className="text-muted fs-6 ps-2">
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
                ))}
              </div>
            ) : (
              <div
                id="tour-box-container-grid"
                className="row justify-content-center my-4"
              >
                {products.map((product) => (
                  <div className="col-6 col-lg-4 mb-4" key={product._id}>
                    <div className="shadow rounded-3 overflow-hidden">
                      <div className="tour-img">
                        <img src={`./${product.images[0]}`} alt="SumPicture" />
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
                          <span className="px-1">
                            {product.comments.length}
                          </span>
                          دیدگاه
                        </div>
                        <div className="text-muted fs-6">
                          <span className="text-primary">
                            {" "}
                            {Number(product.price).toLocaleString()} تومان
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
                ))}
              </div>
            )}
          </div>
          {/* <!-- ______________________________________side bar Products______________________________________ --> */}
          <aside className="d-none d-md-block col-md-3">
            <div className="d-flex flex-column align-items-center">
              <img
                className="col-9 mb-4 rounded-3"
                height="150"
                src="./images/cavir.jpg"
                alt="location"
              />
              <img
                className="col-9 mb-4 rounded-3"
                height="150"
                src="./images/food.jpg"
                alt="location"
              />
              <img
                className="col-9 mb-4 rounded-3"
                height="150"
                src="./images/pexels-denniz-futalan-13119080.jpg"
                alt="location"
              />
            </div>
            <div className="row-fluid">
              <div className="col-11 mx-auto d-none d-lg-flex call-to-action">
                <div className="call-to-action-bg--img">
                  <img src="./images/ship-travel.jpg" alt="SumPicture" />
                </div>
                <div className="call-to-action-wrapper text-white">
                  <h4 className="fs-5 fw-normal">یک سوال بپرسید؟</h4>
                  <p className="fs-6 mt-4 fw-lighter">
                    دریغ نکنید با ما تماس بگیرید. ما یک تیم متخصص و ما خوشحال به
                    صحبت کردن با شما می باشد.
                  </p>
                  <span className="text-warning">
                    <i
                      className="fa-solid fa-phone"
                      style={{ transform: "rotateY(180deg)" }}
                    ></i>
                    09029288498
                  </span>
                  <a href="#">Behdadtns@gmail.com</a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
