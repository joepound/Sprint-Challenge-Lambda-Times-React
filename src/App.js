import React, { Component, Fragment } from "react";

import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import authenticate from "./components/authenticate";
import Login from "./components/Login";
import Content from "./components/Content/Content";
import GlobalStyles from "./GlobalStyles";

// Importing our tab, carousel and card data. No need to change anything here.
import { tabData, carouselData, cardData } from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: "all",
      tabs: [],
      currentCarouselIndex: 0,
      carouselImages: [],
      cards: []
    };
  }

  // Life cycle methods

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    const tabs = tabData;
    const carouselImages = carouselData;
    const cards = cardData;
    this.setState({
      tabs,
      carouselImages,
      cards
    });
  }

  // Event-based methods

  filterCards(selectedTab) {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selected
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithm for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
    return selectedTab === "all"
      ? cardData
      : cardData.filter(card => card.tab === selectedTab);
  }

  changeSelectedTab(selectedTab) {
    // this function should take in the tab and update the state with the new tab.
    this.setState({ selectedTab, cards: this.filterCards(selectedTab) });
  }

  carouselSlideLeft() {
    this.setState(prevState => ({
      currentCarouselIndex:
        prevState.currentCarouselIndex === 0
          ? this.state.carouselImages.length - 1
          : prevState.currentCarouselIndex - 1
    }));
  }

  carouselSlideRight() {
    this.setState(prevState => ({
      currentCarouselIndex:
        prevState.currentCarouselIndex === this.state.carouselImages.length - 1
          ? 0
          : prevState.currentCarouselIndex + 1
    }));
  }

  // Event handler methods

  handleClick = e => {
    switch (e.currentTarget.name || e.currentTarget.dataset.click) {
      case "tab-selection":
        this.changeSelectedTab(e.currentTarget.dataset.tab);
        break;

      case "carousel-left-btn":
        this.carouselSlideLeft();
        break;

      case "carousel-right-btn":
        this.carouselSlideRight();
        break;
    }
  };

  render() {
    const AppBlock = styled.div`
      display: flex;
      align-items: center;
      flex-direction: column;
      background-color: #f1f1f1;
      color: #333;
      font-family: "PT Sans", sans-serif;
    `;

    return (
      <Fragment>
        <GlobalStyle />
        <AppBlock className="App">
          <TopBar />
          <Header />
          <Content
            selectedTab={this.state.selectedTab}
            tabs={this.state.tabs}
            currentCarouselIndex={this.state.currentCarouselIndex}
            carouselImages={this.state.carouselImages}
            cards={this.state.cards}
            handleClick={this.handleClick}
          />
        </AppBlock>
      </Fragment>
    );
  }
}

export default App;
