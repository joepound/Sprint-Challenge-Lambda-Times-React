import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import Tabs from "./Tabs";
import Carousel from "../Carousel/Carousel";
import Cards from "./Cards";

const Content = props => {
  const ContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <ContentBlock>
      {/* 
        Add 2 props to the Tabs component, 
        
        * `selectedTab` that includes the currently selected tab
        
        * and `selectTabHandler` that includes the function to change the selected tab -> will do this with an event handler instead
      */}
      <Tabs
        selectedTab={props.selectedTab}
        tabs={props.tabs}
        handleClick={props.handleClick}
      />
      <Carousel
        currentCarouselImg={props.carouselImages[props.currentCarouselIndex]}
        handleClick={props.handleClick}
      />
      <Cards cards={props.cards} />
    </ContentBlock>
  );
};

Content.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentCarouselImg: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Content;
