import React, { Component } from "react";
import PropTypes from "prop-types";

// Complete this Carousel
const Carousel = props => {
  return (
    <div className="carousel">
      <div
        className="left-button"
        data-click="carousel-left-btn"
        onClick={props.handleClick}
      >
        {"<"}
      </div>
      <img src={props.currentCarouselImg} style={{ display: "block" }} />
      <div
        className="right-button"
        data-click="carousel-right-btn"
        onClick={props.handleClick}
      >
        {">"}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  currentCarouselImg: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Carousel;
