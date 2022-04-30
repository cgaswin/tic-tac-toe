import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ symbol }) => {
  switch (symbol) {
    case "cross":
      return <FaTimes className="icons" />;
    case "circle":
      return <FaRegCircle className="icons" />;
    default:
      return <FaPen className="icons" />;
  }
};

export default Icon;
