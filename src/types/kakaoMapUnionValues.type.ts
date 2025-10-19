import { LatLngInstance, MapInstance, RoadviewInstance, ViewpointInstance } from "./kakaoMapInstance.type";

export type CustomOverlayOptionMapUnionValue = MapInstance | RoadviewInstance;
export type CustomOverlayOptionPositionUnionValue = LatLngInstance | ViewpointInstance;