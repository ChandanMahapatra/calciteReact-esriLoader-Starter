import * as React from "react";
import "./styles/App.css";
import AppHeader from "./components/AppHeader";
import Toolbar from "./components/Toolbar";
import Map from "./components/Map";
import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

class App extends React.Component {
  render() {
    return (
      <StyledMain>
        <AppHeader />
        <Toolbar />
        <Map />
      </StyledMain>
    );
  }
}

export default App;
