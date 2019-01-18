import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Tab = props => {
  const TabBlock = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;

    ${props.selectedTab === props.tabName &&
      `background-color: #fff;
       color: #333;
       border: 2px solid #333;`}

    &:hover {
      text-decoration: underline;
    }
  `;

  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  return (
    <TabBlock
      className={props.selectedTab === props.tabName ? "tab active-tab" : "tab"}
      /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. -> everything needed will be in the event */
      data-click="tab-selection"
      data-tab={props.tabName}
      onClick={props.handleClick}
    >
      {props.tabName.toUpperCase()}
    </TabBlock>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tabName: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Tab;
