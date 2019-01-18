import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import Tab from "./Tab";

const Tabs = props => {
  const TabsBlock = styled.div`
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 47px;
    background-color: #fff;

    @media (min-width: 1280px) {
      width: 1280px;
    }
  `;

  const TabTopics = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
  `;

  const TopicTitle = styled.div`
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  `;

  return (
    <TabsBlock>
      <TabTopics>
        <TopicTitle>TRENDING TOPICS:</TopicTitle>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map((tabItem, i) => (
          <Tab
            key={i}
            tabName={tabItem}
            selectedTab={props.selectedTab}
            handleClick={props.handleClick}
          />
        ))}
      </TabTopics>
    </TabsBlock>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Tabs;
