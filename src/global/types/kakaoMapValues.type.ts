import { LatLngInstance } from "./kakaoMapInstance.type";

export type MapTypeId = "ROADMAP" | "SKYVIEW" | "HYBRID" | "ROADVIEW" | "OVERLAY" | "TRAFFIC" | "TERRAIN" | "BICYCLE" | "BICYCLE_HYBRID" | "USE_DISTRICT"; // 지도 종류 values

// 
export type Options = {
  center: LatLngInstance;
  level?: number;
  mapTypeId?: MapTypeId;
  draggable?: boolean;
  scrollwheel?: boolean;
  disableDoubleClick?: boolean;
  disableDoubleClickZoom?: boolean;
  projectionId?: string;
  tileAnimation?: boolean;
  keyboardShortcuts?: boolean;
};