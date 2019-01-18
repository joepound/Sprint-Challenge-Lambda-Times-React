import React from "react";
import PropTypes from "prop-types";

import Tab from "./Tab";

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
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
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectedTab: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Tabs;
