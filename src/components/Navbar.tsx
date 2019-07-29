import * as React from "react";
import Tabs, {
  TabNav,
  TabTitle,
  TabContents,
  TabSection
} from "calcite-react/Tabs";
import styled, { css } from "styled-components";
import Toolbar from "./Toolbar";

const StyledTabs = styled(Tabs)`
  flex: 0 1 auto;
`;

const StyledTabTitle = styled(TabTitle)`
  font-size: 20px;
  ${props =>
    props.translucent &&
    css`
      border: none;
      border-bottom: 4px solid ${props => props.theme.palette.opaqueWhite};
      margin-bottom: 0;
      &:hover,
      &:focus {
        background-color: ${props => props.theme.palette.opaqueWhite};
        border-bottom-color: ${props => props.theme.palette.blue};
        background-image: none;
      }
      ${props =>
        props.active &&
        css`
          border-bottom: 4px solid ${props => props.theme.palette.blue};
        `};
    `};
`;

class Navbar extends React.Component {
  render() {
    return (
      <StyledTabs translucent activeTabIndex={0}>
        <TabNav style={{ boxShadow: "0px 4px 8px rgba(124, 123, 123, 0.12)" }}>
          <StyledTabTitle>Tab 1</StyledTabTitle>
          <StyledTabTitle>Tab 2</StyledTabTitle>
        </TabNav>
        <TabContents>
          <Toolbar />
        </TabContents>
      </StyledTabs>
    );
  }
}

export default Navbar;

/*
  ${props =>
    props.translucent &&
    css`
      background-color: ${props => props.theme.palette.transparentWhite};
      background-image: none;
      border: none;
      border-bottom: 4px solid ${props => props.theme.palette.transparentWhite};
      color: ${props => props.theme.palette.offBlack};
      margin-right: 2px;
      margin-bottom: 3px;
      transition: none;
      &:first-child,
      &:last-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      &:hover,
      &:focus {
        background-color: ${props => props.theme.palette.opaqueWhite};
        border-bottom-color: ${props => props.theme.palette.blue};
        background-image: none;
      }
    `};
*/
