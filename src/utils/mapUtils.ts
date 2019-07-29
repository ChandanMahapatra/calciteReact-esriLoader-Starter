import { loadModules } from "esri-loader";
import config from "../config/config.dev";

// types
import IMap from "esri/Map";
import IMapView from "esri/views/MapView";

class MapUtils {
  private mapNode: any;
  private map!: IMap;
  private mapView!: IMapView;

  constructor(mapRef: any) {
    this.mapNode = mapRef.current;
  }

  public async buildMapView(): Promise<IMapView> {
    const [Map, MapView] = await loadModules([
      "esri/Map",
      "esri/views/MapView"
    ]);
    this.map = new Map({ basemap: config.defaultBasemap });
    this.mapView = new MapView({
      center: [-100, 40],
      container: this.mapNode,
      map: this.map,
      zoom: 5
    });
    return this.mapView;
  }
}

export interface IMapUtils extends MapUtils {}

export default MapUtils;
