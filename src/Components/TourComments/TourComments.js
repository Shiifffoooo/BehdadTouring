import React, { useEffect, useState } from "react";
import "./TourComments.css";

export default function TourComments({ comments }) {
  const [score, setScore] = useState(-1);

  const fillStar = (score) => {
    const scoreStars = [];
    for (let i = 0; i < score; i++) {
      scoreStars.push(
        <img src="../images/icons&SVG/star_fill.svg" alt="sumPicture" />
      );
    }
    for (let i = 0; i < 5 - score; i++) {
      scoreStars.push(
        <img src="../images/icons&SVG/star.svg" alt="sumPicture" />
      );
    }
    return <>{scoreStars.reverse()}</>;
  };

  return (
    <div className="row p-3 mx-1">
      <div className="main-tour-comments">
        <p className="fs-4">
          {comments.length} دیدگاه برای کمپینگ امریکای غربی
        </p>
        {comments.map((comment, index) => (
          <div className="main-tour-comment_box d-flex" key={index + 1}>
            <img
              src="../images/pexels-chris-leboutillier-929385.jpg"
              className="rounded me-3"
              width="70"
              height="70"
              alt="user"
            />
            <div className="border p-2 w-100">
              <div className="d-flex justify-content-between align-items-center fs-7 mb-2">
                <span className="text-muted">{comment.name} – آذر 9, 1395</span>
                <div className="d-flex">
                  {fillStar(comment.score)}
                  {/* <img src="../images/icons&SVG/star.svg" alt="sumPicture" /> */}
                  {/* <img src="../images/icons&SVG/star.svg" alt="sumPicture" /> */}
                </div>
              </div>
              <p className="fs-6">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="main-tour-comment_send">
        <p className="text-muted m-0">دیدگاه خود را بنویسید</p>
        <p className="text-muted">
          نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند
          *
        </p>
        <form>
          <div className="mb-3 w-75">
            <label htmlFor="username-comment" className="form-label text-black">
              نام *
            </label>
            <input
              type="text"
              className="form-control bg-light"
              id="username-comment"
            />
          </div>
          <div className="mb-3 w-75">
            <label
              htmlFor="useremail-comment"
              className="form-label text-black"
            >
              ایمیل *
            </label>
            <input
              type="email"
              className="form-control bg-light"
              id="useremail-comment"
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="save-name"
            />
            <label
              className="form-check-label fs-7 fw-bold text-black"
              htmlFor="save-name"
            >
              ذخیره نام، ایمیل من در مرورگر برای زمانی که دوباره دیدگاهی
              می‌نویسم.
            </label>
          </div>

          <select
            className="form-select form-select-sm mb-3 w-25 bg-light"
            aria-label=".form-select-lg example"
            onChange={(event) => {
              setScore(event.target.value);
            }}
          >
            <option value={-1}>امتیاز شما *</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          <div className="mb-3 w-75">
            <label htmlFor="user_comment" className="form-label text-black">
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
            className="btn-costume btn-costume-dark px-2 text-decoration-none"
          >
            فرستادن دیدگاه
          </a>
        </form>
      </div>
    </div>
  );
}
