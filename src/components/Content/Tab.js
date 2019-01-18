import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  return (
    <div
      className={props.selectedTab === props.tabName ? "tab active-tab" : "tab"}
      /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. -> everything needed will be in the event */
      data-click="tab-selection"
      data-tab={props.tabName}
      onClick={props.handleClick}
    >
      {props.tabName.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tabName: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Tab;
