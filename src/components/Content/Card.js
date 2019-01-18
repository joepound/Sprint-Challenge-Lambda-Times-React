import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Card = props => {
  const CardBlock = styled.div`
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: none;
    flex-direction: column;
    background-color: #fff;
    width: 380px;
    margin-bottom: 16px;
    padding: 24px;
  `;

  const CardHeadline = styled.div`
    font-size: 25px;
    font-family: "Didot", serif;
  `;

  const CardAuthorBlock = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
  `;

  const CardAuthorImgBlock = styled.div`
    padding-right: 10px;
    border-right: 1px solid lightgrey;
    height: 40px;
  `;

  const CardAuthorImgElement = styled.img`
    width: 40px;
  `;

  const CardAuthorElement = styled.span`
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  `;

  return (
    <CardBlock>
      <CardHeadline>{props.card.headline}</CardHeadline>
      <CardAuthorBlock>
        <CardAuthorImgBlock>
          <CardAuthorImgElement src={props.card.img} />
        </CardAuthorImgBlock>
        <CardAuthorElement>By {props.card.author}</CardAuthorElement>
      </CardAuthorBlock>
    </CardBlock>
  );
};

// Make sure to include PropTypes.
// Make sure you include prop types for all of your incoming props
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired
};

export default Card;
