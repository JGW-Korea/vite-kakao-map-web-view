import { CustomOverlayOptionMapUnionValue } from "./kakaoMapUnionValues.type";

// 카카오 지도 Map API 인스턴스 객체 타입 구성
export type MapInstance = {
  [key: string]: unknown;
  setCenter: (latlng: LatLngInstance) => void;
  getCenter: () => LatLngInstance;
  getBounds: () => LatLngBoundsInstance;
  setMaxLevel: (maxLevel: number) => void;
};

// 카카오 지도 LatLng(위도, 경로) API 인스턴스 객체 타입 구성
export type LatLngInstance = {
  getLat: () => number;                            // 위도를 반환한다.
  getLng: () => number;                            // 경도를 반환한다.
  equals: (latlng: LatLngInstance) => boolean;     // 객체가 가지고 있는 좌표와 같은 좌표를 가지고 있는 객체인지 비교한다.
  toString: () => string;                          // 객체가 가지고 있는 좌표를 문자열로 반환한다.
  toCoords: () => CoordsInstance;                  // 객체가 가지고 있는 좌표를 Wcongnamul 좌표로 반환한다.
};

export type CustomOverlayInstance = {
  [key: string]: unknown;
  setMap: (map_or_roadview: CustomOverlayOptionMapUnionValue) => void;
};

export type RoadviewInstance = {
  [key: string]: unknown;
};

export type ViewpointInstance = {
  [key: string]: unknown;
};

export type CoordsInstance = {
  getX: () => number;                              // x 좌표를 반환한다.
  getY: () => number;                              // y 좌표를 반환한다.
  equals: (coords: CoordsInstance) => boolean;     // 객체가 가지고 있는 좌표와 같은 좌표를 가지고 있는 객체인지 비교한다.
  toString: () => string;                          // 객체가 가지고 있는 좌표를 문자열로 반환한다.
  toLatLng: () => LatLngInstance;                  // 객체가 가지고 있는 좌표를 WGS84 좌표로 반환한다.
};

export type LatLngBoundsInstance = {
  equals: (latlngBounds: LatLngBoundsInstance) => boolean;
  toString: () => string;
  getSouthWest: () => LatLngInstance;
  getNorthEast: () => LatLngInstance;
  isEmpty: () => boolean;
  extend: (latlng: LatLngInstance) => void
  contain: (latlng: LatLngInstance) => boolean
}