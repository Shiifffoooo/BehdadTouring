import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import "./ContactMe.css";

export default function ContactMe() {
  document.title ="BehdadTouring | ContactMe"
  return (
    <>
      <NavBar />
      <header className="container-fluid bg-green-gray overflow-hidden p-0">
        <div className="main-tour__header">
          <div className="position-absolute bottom-0 ms-3">
            <Breadcrumb
              href={[
                ["/", "صفحه اصلی"],
                ["/contact-me", "تماس با من"],
              ]}
            />
          </div>
        </div>
      </header>
      <main className="container my-5">
        <h6 className="border-bottom pb-3">اطلاعات تماس</h6>
        <div className="mt-5 fs-7">
          <div className="d-flex align-items-center gap-5 pb-3 my-4 border-bottom">
            <div className="d-flex align-items-center gap-3 fw-bold fs-6 w-25">
              <i className="fa-solid fa-location-dot bg-secondary rounded-circle p-3 text-light"></i>
              آدرس
            </div>
            <span>کرج / فردیس</span>
          </div>

          <div className="d-flex align-items-center gap-5 pb-3 my-4 border-bottom">
            <div className="d-flex align-items-center gap-3 fw-bold fs-6 w-25">
              <i className="fa-solid fa-phone bg-secondary rounded-circle p-3 text-light"></i>
              تلفن
            </div>
            <span>09029288498</span>
          </div>

          <div className="d-flex align-items-center gap-5 pb-3 my-4 border-bottom">
            <div className="d-flex align-items-center gap-3 fw-bold fs-6 w-25">
              <i className="fa-solid fa-fax bg-secondary rounded-circle p-3 text-light"></i>
              فکس
            </div>
            <span>+012345678 (تور) | +0123456789 (فروش بلیط)</span>
          </div>

          <div className="d-flex align-items-center gap-5 pb-3 my-4 border-bottom">
            <div className="d-flex align-items-center gap-3 fw-bold fs-6 w-25">
              <i className="fa-solid fa-envelope bg-secondary rounded-circle p-3 text-light"></i>
              ایمیل
            </div>
            <span>behdadtns@gmail.com (Front-End)</span>
          </div>

          <div className="d-flex align-items-center gap-5 pb-3 my-4 border-bottom">
            <div className="d-flex align-items-center gap-3 fw-bold fs-6 w-25">
              <i className="fa-solid fa-clock bg-secondary rounded-circle p-3 text-light"></i>
              ساعت کاری
            </div>
            <span>هر روز فقط روزهای تعطیل, تعطیل</span>
          </div>

          <div className="d-flex align-items-center gap-5 pb-3 my-4 border-bottom">
            <div className="d-flex align-items-center gap-3 fw-bold fs-6 w-25">
              <i className="fa-brands fa-telegram bg-secondary rounded-circle p-3 text-light"></i>
              تلگرام
            </div>
            <a
              href="https://t.me/Shiifffoooo"
              className="text-green-gray text-decoration-none fs-4"
              target="_blank"
            >
              Shiifffoooo@
            </a>
          </div>
        </div>

        <h6>سوالی دارید؟</h6>
        <form>
          <div className="mb-3 w-75">
            <label htmlFor="username-comment" className="form-label text-dark">
              نام *
            </label>
            <input
              type="text"
              className="form-control bg-light"
              id="username-comment"
            />
          </div>
          <div className="mb-3 w-75">
            <label htmlFor="useremail-comment" className="form-label text-dark">
              ایمیل *
            </label>
            <input
              type="email"
              className="form-control bg-light"
              id="useremail-comment"
            />
          </div>
          <div className="mb-3 w-75">
            <label htmlFor="email-title" className="form-label text-dark">
              موضوع
            </label>
            <input
              type="email"
              className="form-control bg-light"
              id="email-title"
            />
          </div>

          <div className="mb-3 w-75">
            <label htmlFor="user_comment" className="form-label text-dark">
              دیدگاه شما *
            </label>
            <textarea
              className="form-control bg-light"
              id="user_comment"
              rows="3"
            ></textarea>
          </div>

          <a
          href="https://t.me/Shiifffoooo"
           className="btn-costume btn-costume-dark px-2 text-decoration-none">
            فرستادن دیدگاه
          </a>
        </form>
      </main>
      <Footer top={true} quote={true} />
    </>
  );
}
