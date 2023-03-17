import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "reset.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./styles/style.css"
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
