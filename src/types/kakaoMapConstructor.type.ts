import { CoordsInstance, CustomOverlayInstance, LatLngBoundsInstance, LatLngInstance, MapInstance, RoadviewInstance, ViewpointInstance } from "./kakaoMapInstance.type";
import { CustomOverlayOptions, MapOptions, RoadviewOptions, ViewpointOptions } from "./kakaoMapParameterOptions.type";

export type Map = new (container: Node, options: MapOptions) => MapInstance;                        // 카카오 지도 Map API 클래스 타입 구성
export type LatLng = new (latitude: number, longitude: number) => LatLngInstance;                   // 카카오 지도 LatLng(위도, 경로) API 클래스 타입 구성
export type CustomOverlay = new (options: CustomOverlayOptions) => CustomOverlayInstance;           // 카카오 지도 CustomOverlay API 클래스 타입 구성
export type Roadview = new (container: Node, options: RoadviewOptions) => RoadviewInstance;         // 카카오 지도 Roadview API 클래스 타입 구성
export type Viewpoint = new (options: ViewpointOptions) => ViewpointInstance;                       // 카카오 지도 Viewpoint API 클래스 타입 구성
export type Coords = new (x: number, y: number) => CoordsInstance;                                  // 카카오 지도 Coords API 클래스 타입 구성
export type LatLngBounds = new (sw: LatLngInstance, ne: LatLngInstance) => LatLngBoundsInstance;    // 카카오 지도 LatLngBounds API 클래스 타입 구성