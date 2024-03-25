import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { CgDollar } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";

const timeSince = (datetime) => {
  return datetime;
};

const TemplateCard = ({ templateDetails }) => {
  return (
    <div className="d-flex bg-white p-3" style={{ width: "300px" }}>
      <div className="d-flex flex-column gap-3">
        <div>{templateDetails.category}</div>
        <h3>{templateDetails.title}</h3>
        <div style={{ textAlign: "justify" }}>{templateDetails.intention}</div>
      </div>
    </div>
  );
};

export default TemplateCard;
