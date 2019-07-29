import * as React from "react";
import Search from "calcite-react/Search";
import Filter from "./Filter";
import styled, { css } from "styled-components";

const StyledToolbar = styled.div`
  flex: 0 1 auto;
  display: flex;
  padding: 16px;
  background-color: #f7f7f7;
`;

class Toolbar extends React.Component {
  render() {
    return (
      <StyledToolbar>
        <Search />
        <Filter />
      </StyledToolbar>
    );
  }
}

export default Toolbar;
