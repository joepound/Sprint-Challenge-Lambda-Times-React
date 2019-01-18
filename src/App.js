import React, { Component } from "react";

import styled from "styled-components";

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Content from "./components/Content/Content";

const App = () => {
  const AppBlock = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f1f1f1;
    color: #333;
    font-family: "PT Sans", sans-serif;
  `;

  return (
    <AppBlock className="App">
      <TopBar />
      <Header />
      <Content />
    </AppBlock>
  );
};

export default App;
