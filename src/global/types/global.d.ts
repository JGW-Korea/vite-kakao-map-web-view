import * as KakaoMapSDK from "../../types/kakaoMapConstructor.type";
import { MapInstance } from "../../types/kakaoMapInstance.type";
import { MapEventType } from "../../types/kakaoMapValues.type";

declare global {
  interface Window {
    kakao: {
      maps: {
        Map: KakaoMapSDK.Map;
        LatLng: KakaoMapSDK.LatLng;
        CustomOverlay: KakaoMapSDK.CustomOverlay;
        Roadview: KakaoMapSDK.Roadview;
        Viewpoint: KakaoMapSDK.Viewpoint;
        Coords: KakaoMapSDK.Coords;
        LatLngBounds: KakaoMapSDK.LatLngBounds;
        event: {
          addListener: (map: MapInstance, type: MapEventType, cb: (event?: MouseEvent) => void) => void;
          removeListener: (map: MapInstance, type: MapEventType, cb: (event?: MouseEvent) => void) => void;
        }
        [key: string]: unknown;
      };
    };
  }

  interface Document {
      addEventListener(type: "message", listener: (this: Document, ev: MessageEvent) => unknown, options?: boolean | AddEventListenerOptions): void;
      removeEventListener(type: "message", listener: (this: Document, ev: MessageEvent) => unknown, options?: boolean | AddEventListenerOptions): void;
  }
}
