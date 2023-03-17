import React from "react";
import "./TravelProgram.css";

export default function TravelProgram({ plans }) {
  return (
    <div className="row p-3 mx-1">
      <ol className="tour-plan_wrapper">
        {plans.map((plan, index) => (
          <li className="d-flex mb-3" key={index + 1}>
            <div className="me-4">
              <span className="iteration-icon bg-info text-white ">{index + 1}</span>
            </div>
            <span>
              {plan}
             
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
