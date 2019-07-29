import * as React from "react";
import TopNav, {
  TopNavBrand,
  TopNavTitle,
  TopNavList,
  TopNavLink,
  TopNavActionsList
} from "calcite-react/TopNav";
import ArcgisAccount, {
  ArcgisAccountMenuItem
} from "calcite-react/ArcgisAccount";
import styled from "styled-components";

const StyledTopNav = styled(TopNav)`
  border-bottom: none;
  flex: 0 1 auto;
`;

const StyledArcgisAccount = styled(ArcgisAccount)`
  border-left: none;
`;

class AppHeader extends React.Component {
  render() {
    return (
      <StyledTopNav>
        <TopNavBrand
          href="#"
          src="https://cdn.iconscout.com/icon/free/png-256/pied-piper-6-569415.png"
        />
        <TopNavTitle href="#">Calcite React</TopNavTitle>
        <TopNavList>
          <TopNavLink href="#" active>
            Plans
          </TopNavLink>
          <TopNavLink href="#">Community</TopNavLink>
          <TopNavLink href="#">Docs</TopNavLink>
        </TopNavList>
        <TopNavActionsList style={{ padding: 0, marginLeft: "auto" }}>
          <StyledArcgisAccount
            user={{ username: "johndoe", fullName: "John Doe" }}
            portal={{ access: "private", allSSL: false }}
            onRequestSwitchAccount={() => console.log("switch account clicked")}
            onRequestSignOut={() => console.log("sign out clicked")}
          >
            <ArcgisAccountMenuItem
              onClick={() => console.log("Profile & Settings clicked")}
            >
              Profile & Settings
            </ArcgisAccountMenuItem>
            <ArcgisAccountMenuItem
              onClick={() => console.log("My Esri clicked")}
            >
              My Esri
            </ArcgisAccountMenuItem>
            <ArcgisAccountMenuItem
              onClick={() => console.log("Training clicked")}
            >
              Training
            </ArcgisAccountMenuItem>
            <ArcgisAccountMenuItem
              onClick={() => console.log("Community & Forums clicked")}
            >
              Community & Forums
            </ArcgisAccountMenuItem>
            <ArcgisAccountMenuItem
              onClick={() => console.log("ArcGIS Online clicked")}
            >
              ArcGIS Online
            </ArcgisAccountMenuItem>
          </StyledArcgisAccount>
        </TopNavActionsList>
      </StyledTopNav>
    );
  }
}

export default AppHeader;
