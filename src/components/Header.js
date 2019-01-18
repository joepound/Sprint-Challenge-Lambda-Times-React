import React from "react";

import styled, { css } from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  const LambdaTimesHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 1px solid lightgrey;
    width: 100%;
    height: 120px;
    margin-top: 44px;
    padding-bottom: 15px;

    @media (min-width: 1280px) {
      width: 1280px;
    }
  `;

  const HeaderData = styled.span`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  `;

  const Date = styled(HeaderData)`
    margin-left: 25px;
    flex: 1;
  `;

  const TitleHeading = styled.h1`
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  `;

  const Temperature = styled(HeaderData)`
    text-align: right;
    margin-right: 25px;
    flex: 1;
  `;

  return (
    <LambdaTimesHeader>
      <Date>SMARCH 32, 2018</Date>
      <TitleHeading>Lambda Times</TitleHeading>
      <Temperature>98°</Temperature>
    </LambdaTimesHeader>
  );
};

export default Header;
