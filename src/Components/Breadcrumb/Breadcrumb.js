import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ top, href }) {
  return (
    <nav className={`${top ? "translate-top" : ""}`} aria-label="breadcrumb">
      <ol className="breadcrumb">
        {href.map((link, index) => (
          <li key={index + 1} className="breadcrumb-item">
            <Link to={link[0]} className="text-decoration-none">
              {link[1]}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
