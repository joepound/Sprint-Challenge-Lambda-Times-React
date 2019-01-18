import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

// Complete this Carousel
const Carousel = props => {
  const CarouselBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 500px;
    position: relative;
    overflow: hidden;
    margin-top: 16px;

    @media (min-width: 1200px) {
      width: 1200px;
    }
  `;

  const CarouselDirectionalBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    font-size: 40px;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    cursor: pointer;

    &:hover {
      color: #333;
      background-color: #fff;
      border: 2px solid #333;
    }
  `;

  const CarouselLeftBtn = styled(CarouselDirectionalBtn)`
    top: 50%;
    left: 25px;
    transform: translate(0, -50%);
  `;

  const CarouselRightBtn = styled(CarouselDirectionalBtn)`
    top: 50%;
    right: 25px;
    transform: translate(0, -50%);
  `;

  const CarouselImgElement = styled.img`
    width: 100%;
    display: block;
  `;

  return (
    <CarouselBlock>
      <CarouselLeftBtn
        data-click="carousel-left-btn"
        onClick={props.handleClick}
      >
        {"<"}
      </CarouselLeftBtn>
      <CarouselImgElement src={props.currentCarouselImg} />
      <CarouselRightBtn
        data-click="carousel-right-btn"
        onClick={props.handleClick}
      >
        {">"}
      </CarouselRightBtn>
    </CarouselBlock>
  );
};

Carousel.propTypes = {
  currentCarouselImg: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Carousel;
