import { LatLngInstance, MapInstance } from "./kakaoMapInstance.type";
import { Options } from "./kakaoMapValues.type";

export type Map = new (container: Element, options: Options) => MapInstance;  // 카카오 지도 Map API 클래스 타입 구성
export  type LatLng = new (latitude: number, longitude: number) => LatLngInstance; // 카카오 지도 LatLng(위도, 경로) API 클래스 타입 구성