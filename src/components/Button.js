import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../components/button.scss";
const Button = ({ type, children }) => {
  console.log(type, ":type");
  return (
    <button
      className={`button-${type} hover:scale-110 hover:transition hover:ease-in-out hover:duration-300`}
    >
      <div className="flex items-center justify-between">
        {children}
        <FontAwesomeIcon icon={faCircleArrowRight} className="ml-4 " />
      </div>
    </button>
  );
};

export default Button;
