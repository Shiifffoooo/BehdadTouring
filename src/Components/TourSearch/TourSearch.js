import React, { useEffect, useState } from "react";
import "./TourSearch.css";

export default function TourSearch() {
  const [region, setRegion] = useState("all");
  const [themeTour, setThemeTour] = useState("all");
  const [tourDuration, setTourDuration] = useState("-1");
  const [searchKey, setSearchKey] = useState("");
  const [tourDate, setTourDate] = useState("");
  const getDate = () => {
    let today = new Date();
    let nowDay = () => {
      if (today.getDate() < 10) {
        return `0${today.getDate()}`;
      } else {
        return today.getDate();
      }
    };

    let nowMonth = () => {
      if (today.getMonth() < 10) {
        return `0${today.getMonth() + 1}`;
      } else {
        return today.getMonth() + 1;
      }
    };

    let date = today.getFullYear() + "-" + nowMonth() + "-" + nowDay();

    console.log(date);
    setTourDate(date);
  };

  useEffect(() => {
    getDate();
  },[]);
  
  return (
    <section id="sorting-tour-section" className="w-100">
      <div className="container">
        <div className="row flex-column h-100 align-items-center">
          <div className="col-12 py-3 px-md-4">
            <h3 className="text-white">
              <i className="fa-solid fa-magnifying-glass me-2"></i>جستجوی تـورها
            </h3>
            <form className="d-md-flex align-items-center">
              <div className="col-12 col-md-2 mb-3">
                <label>کلیدواژه </label>
                <div className="w-100 overflow-hidden">
                  <input
                    className="sorting-inputs"
                    name="tour-search"
                    type="text"
                    value={searchKey}
                    onChange={(event) => setSearchKey(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-12 col-md-2 mb-3">
                <label>دسته بندی</label>
                <div className="w-100 overflow-hidden">
                  <select
                    className="sorting-inputs"
                    onChange={(event) => setRegion(event.target.value)}
                  >
                    <option value="all">همه</option>
                    <option value="argentina">آرژانتین</option>
                    <option value="asia">آسیا</option>
                    <option value="africa">آفریقا</option>
                    <option value="america">آمریکا</option>
                    <option value="south-america">آمریکای جنوبی</option>
                    <option value="europe">اروپا</option>
                    <option value="eastern-europe">اروپای شرقی</option>
                    <option value="spain">اسپانیا</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-2 mb-3">
                <label>برچسب</label>
                <div className="w-100 overflow-hidden">
                  <select
                    className="sorting-inputs"
                    onChange={(event) => setThemeTour(event.target.value)}
                  >
                    <option value="all">همه</option>
                    <option value="popular-deals">پیشنهاد شگفت انگیز</option>
                    <option value="city-tours">تور شهری</option>
                    <option value="top-one-day-tour">تور یک روزه</option>
                    <option value="top-vacation-tours">
                      تورهای تعطیلات بالا
                    </option>
                    <option value="holiday-seasonal-tours">
                      تورهای تعطیلات و فصلی
                    </option>
                    <option value="relaxation-tours">تورهای تفریحی</option>
                    <option value="family-friendly-tours">
                      تورهای خانوادگی دوستانه
                    </option>
                    <option value="cultural-thematic-tours">
                      تورهای فرهنگی و موضوعی
                    </option>
                    <option value="indulgence-luxury-tours">
                      تورهای لاکچری
                    </option>
                    <option value="wild-adventure-tours">
                      تورهای ماجراجویی
                    </option>
                    <option value="outdoor-activites">
                      فعالیت های در فضای باز
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-2 mb-3">
                <label>مدت زمان</label>
                <div className="w-100 overflow-hidden">
                  <select
                    className="sorting-inputs"
                    onChange={(event) => setTourDuration(event.target.value)}
                  >
                    <option value="-1">همه</option>
                    <option value="1">تور 1 روزه</option>
                    <option value="2">2-4 روز تور</option>
                    <option value="5">5-7 روز تور</option>
                    <option value="7">+7 روز تور</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-2 mb-3">
                <label>تاریخ</label>
                <div className="w-100 overflow-hidden">
                  <input
                    className="sorting-inputs"
                    type="date"
                    onChange={(event) => setTourDate(event.target.value)}
                    value={tourDate}
                  />
                </div>
              </div>
              <div className="col-12 col-md-2 mt-2">
                <input
                  className="w-100 btn-costume"
                  type="submit"
                  value="جستجو"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
