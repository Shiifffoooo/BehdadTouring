import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import "./BuyingBasket.css";

export default function BuyingBasket() {
  document.title ="BehdadTouring | سبد خرید"
  const [basket, setBasket] = useState([]);

  async function fetchData() {
    let clientBasket = await JSON.parse(localStorage.getItem("basket"));
    setBasket(clientBasket);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const updatingClientBasket = () => {
    localStorage.setItem("basket", JSON.stringify(basket));
    fetchData();
  };
  return (
    <>
      <NavBar />
      <header className="container-fluid bg-green-gray overflow-hidden p-0">
        <div className="main-tour__header">
          <div className="position-absolute bottom-0 ms-3">
            <Breadcrumb
              href={[
                ["/", "صفحه اصلی"],
                ["/basket", "سبد خرید"],
              ]}
            />
          </div>
        </div>
      </header>
      {basket === undefined ? (
        <>
          <div className="container-fluid px-0">
            <div className="alert alert-danger m-0 d-flex justify-content-between align-items-center">
              <span>
                <i className="fa-solid fa-martini-glass-empty px-2"></i>
                شما هنوز خریدی ثبت نکرده اید.
              </span>
              <Link to="/shop" className="btn btn-danger">
                بریم خرید
                <i className="fa-solid fa-truck-fast"></i>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          {basket.length ? (
            <main className="container">
              <div className="row">
                <>
                  <div className="col-12 my-5">
                    <div className="table-responsive">
                      <table className="table table-striped table-hover mb-0">
                        <thead className="bg-light fw-bold">
                          <tr>
                            <th scope="col" className="d-none d-sm-table-cell">
                              #
                            </th>
                            <th scope="col">حذف</th>
                            <th scope="col">تصویر</th>
                            <th scope="col">محصول</th>
                            <th scope="col" className="d-none d-sm-table-cell">
                              قیمت واحد
                            </th>
                            <th scope="col">تعداد</th>
                            <th scope="col">قیمت جزء</th>
                          </tr>
                        </thead>
                        <tbody className="fs-7">
                          {basket.map((item, index) => (
                            <tr key={item.id}>
                              <th
                                scope="row"
                                className="d-none d-sm-table-cell"
                              >
                                {index + 1}
                              </th>
                              <th>
                                <button
                                  className="btn btn-danger py-0 px-2 fs-3"
                                  type="button"
                                  onClick={() => {
                                    let newBasket = basket.filter(
                                      (filterItem) => item.id !== filterItem.id
                                    );
                                    setBasket(newBasket);
                                    localStorage.setItem(
                                      "basket",
                                      JSON.stringify(newBasket)
                                    );
                                  }}
                                >
                                  ×
                                </button>
                              </th>
                              <td>
                                <img
                                  src={`./${item.images[0]}`}
                                  height="65"
                                  alt="sumPicture"
                                />
                              </td>
                              <td>{item.name}</td>
                              <td className="d-none d-sm-table-cell">
                                {Number(item.price).toLocaleString()} تومن
                              </td>
                              <td>
                                <div className="d-flex align-items-center fs-5">
                                  <div className="d-flex gap-2 me-2">
                                    <button
                                      className="btn btn-outline-success p-1"
                                      onClick={() => {
                                        item.count++;
                                        updatingClientBasket();
                                      }}
                                    >
                                      <i className="fa-solid fa-arrow-up"></i>
                                    </button>
                                    <button
                                      className="btn btn-outline-danger p-1"
                                      onClick={() => {
                                        item.count > 1 && item.count--;
                                        updatingClientBasket();
                                      }}
                                    >
                                      <i className="fa-solid fa-arrow-down"></i>
                                    </button>
                                  </div>
                                  <span>{Number(item.count)}</span>
                                </div>
                              </td>
                              <td>
                                {Number(
                                  item.price * item.count
                                ).toLocaleString()}{" "}
                                تومن
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-12 col-md-7 col-lg-6 offset-0 offset-md-5 offset-lg-6 mb-5">
                    <p className="fs-3">جمع کل سبد خرید</p>

                    <table className="table table-striped table-hover">
                      <thead className="bg-light fw-bold">
                        <tr>
                          <th scope="col">جمع کل</th>
                          <th scope="col">عملیات ویژه</th>
                        </tr>
                      </thead>
                      <tbody className="fs-6">
                        <tr>
                          <td>
                            {Number(
                              basket
                                .map((i) => i.price * i.count)
                                .reduce((pre, curr) => (pre += curr))
                            ).toLocaleString()}
                            تومن
                          </td>
                          <td>
                            <div className="d-flex">
                              <input
                                type="text"
                                className="form-control bg-light w-50 me-3"
                                placeholder="کد تخفیف"
                                id="off"
                              />
                              <button className="btn-costume btn-costume-dark rounded">
                                اعمال کد تخفیف
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="d-grid">
                      <button className="btn-costume btn-costume-dark rounded fs-5">
                        ادامه جهت تسویه حساب
                      </button>
                    </div>
                  </div>
                </>
              </div>
            </main>
          ) : (
            <div className="container-fluid px-0">
              <div className="alert alert-danger m-0 d-flex justify-content-between align-items-center">
                <span>
                  <i className="fa-solid fa-martini-glass-empty px-2"></i>
                  شما هنوز خریدی ثبت نکرده اید.
                </span>
                <Link to="/shop" className="btn btn-danger">
                  بریم خرید
                  <i className="fa-solid fa-truck-fast"></i>
                </Link>
              </div>
            </div>
          )}
        </>
      )}

      <Footer top={true} quote={true} />
    </>
  );
}
