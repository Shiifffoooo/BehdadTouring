import React from "react";
import "./TourDescription.css";

export default function TourDescription({ desc }) {
  return (
    <div className="row p-3 mx-1">
      <p className="border-bottom border-2 pb-2">{desc}</p>
      <p className="d-flex border-bottom border-2 pb-3 ps-4">
        <span className="fw-bold w-50 fs-7">محل خروج / بازگشت</span>
        <span className="w-75 fs-7">فرودگاه بین المللی سان فرانسیسکو</span>
      </p>
      <p className="d-flex border-bottom border-2 pb-3 ps-4">
        <span className="fw-bold w-50 fs-7">زمان خروج</span>
        <span className="w-75 fs-7">
          لطفا حداقل 2 ساعت قبل از پرواز وارد شوید.
        </span>
      </p>
      <p className="d-flex align-items-center border-bottom border-2 pb-3 ps-4">
        <span className="fw-bold w-50 fs-7">شامل</span>
        <span className="d-flex flex-wrap w-75 fs-7">
          <span className="w-50">
            <i className="fa-solid fa-check text-success me-2"></i>
            بلیط هواپیما
          </span>
          <span className="w-50">
            <i className="fa-solid fa-check text-success me-2"></i>
            اقامت
          </span>
          <span className="w-50">
            <i className="fa-solid fa-check text-success me-2"></i>2 روز سفر
            دریایی
          </span>
          <span className="w-50">
            <i className="fa-solid fa-check text-success me-2"></i>
            راهنمای حرفه ای
          </span>
        </span>
      </p>
      <p className="d-flex align-items-center border-bottom border-2 pb-3 ps-4">
        <span className="fw-bold w-50 fs-7">شامل نمی شود</span>
        <span className="d-flex flex-wrap w-75 fs-7">
          <span className="w-50">
            <i className="fa-solid fa-close text-danger me-2"></i>
            هزینه های ورودی
          </span>
          <span className="w-50">
            <i className="fa-solid fa-close text-danger me-2"></i>
            هدایای بی قید و شرط
          </span>
        </span>
      </p>
      <p>{desc}</p>
    </div>
  );
}
