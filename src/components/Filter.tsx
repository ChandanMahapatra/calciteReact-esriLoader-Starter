import * as React from "react";
import Popover from "calcite-react/Popover";
import Button from "calcite-react/Button";
import Checkbox from "calcite-react/Checkbox";
import Slider from "calcite-react/Slider";
import Radio from "calcite-react/Radio";
import CaretDownIcon from "calcite-ui-icons-react/CaretDownIcon";
import Menu, { MenuTitle, MenuItem } from "calcite-react/Menu";
import styled, { css } from "styled-components";

const StyledFilterContainer = styled.div`
  flex: 0 1 auto;
  margin-top: 4px;
  margin-left: 32px;
`;

const StyledMenuItemsContainer = styled.div`
  padding: 10px;
`;

class Filter extends React.Component<any, any> {
  state = {
    open: false
  };

  togglePopover = () => {
    this.setState({
      open: !this.state.open
    });
  };

  closePopover = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <StyledFilterContainer>
        <Popover
          targetEl={
            <Button
              clear
              onClick={this.togglePopover}
              icon={<CaretDownIcon size={16} filled />}
            >
              Filter
            </Button>
          }
          open={this.state.open}
          onRequestClose={this.closePopover}
        >
          <Menu style={{ maxWidth: "280px" }}>
            <MenuTitle>Some Checkboxes</MenuTitle>
            <StyledMenuItemsContainer>
              <Checkbox>Checkbox 1</Checkbox>
              <Checkbox>Checkbox 2</Checkbox>
            </StyledMenuItemsContainer>
            <MenuTitle>Slider</MenuTitle>
            <StyledMenuItemsContainer>
              <Slider />
            </StyledMenuItemsContainer>
            <MenuTitle>Some Radios</MenuTitle>
            <StyledMenuItemsContainer>
              <Radio>Radio 1</Radio>
              <Radio>Radio 2</Radio>
            </StyledMenuItemsContainer>
          </Menu>
        </Popover>
      </StyledFilterContainer>
    );
  }
}

export default Filter;
