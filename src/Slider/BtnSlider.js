import React from "react";
import "./Slider.css";
// import {FaAngleDoubleLeft} from "react-icons/fa";
// import {FaAngleDoubleRight} from "react-icons/fa";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {/* <img src={direction === "next" ? <FaAngleDoubleRight/> : <FaAngleDoubleLeft/>} /> */}
    </button>
  );
}