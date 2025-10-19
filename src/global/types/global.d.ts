import { LatLng, Map } from "./kakaoMapConstructor.type";

declare global {
  interface Window {
    kakao: {
      maps: {
        Map: Map;
        LatLng: LatLng;
        [key in string]: unknown;
      };
    };
  }
}