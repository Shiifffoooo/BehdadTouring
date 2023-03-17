import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./NotFound.css";

export default function NotFound() {
  document.title ="BehdadTouring | NotFound"
  const navigate = useNavigate();
  return (
    <div className="not-font--body">
      <div className="box">
        <Link onClick={() => navigate(-1)}>برگشت !</Link>
        <p className="mt-2">
          <span>error 404 !</span> ببخشید آدرسی که دنبالش میگردید وجود ندارد
        </p>
      </div>
    </div>
  );
}
