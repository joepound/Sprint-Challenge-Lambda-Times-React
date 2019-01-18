import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import Card from "./Card";

const Cards = props => {
  const CardsBlock = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: none;
    flex-direction: row;
    width: 100%;
    margin-top: 16px;
    flex-wrap: wrap;

    @media (min-width: 1200px) {
      width: 1200px;
    }
  `;

  return (
    <CardsBlock>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </CardsBlock>
  );
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Cards;
