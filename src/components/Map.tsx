import * as React from "react";
import styled from "styled-components";

import MapUtils, { IMapUtils } from "../utils/mapUtils";

const StyledMap = styled.div`
  flex: 1;
  padding: 0;
  margin: 0;
  max-height: 100%;
  width: 100%;
`;

class Map extends React.Component<any, any> {
  private mapUtils!: IMapUtils;
  private mapRef: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.mapRef = React.createRef();
  }
  public componentDidMount() {
    this.buildMap();
  }
  public buildMap() {
    this.mapUtils = new MapUtils(this.mapRef);
    this.mapUtils.buildMapView();
  }
  public render(): React.ReactNode {
    return <StyledMap ref={this.mapRef} />;
  }
}

export default Map;
