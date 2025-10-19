/**
 * - `ROADMAP`: 일반 지도
 * - `SKYVIEW`: 일반 지도
 * - `HYBRID`: 일반 지도
 * - `ROADVIEW`: 일반 지도
 * - `OVERLAY`: 일반 지도
 * - `TRAFFIC`: 일반 지도
 * - `TERRAIN`: 일반 지도
 * - `BICYCLE`: 일반 지도
 * - `BICYCLE_HYBRID`: 일반 지도
 * - `USE_DISTRICT`: 일반 지도
*/
export type MapTypeId = "ROADMAP" | "SKYVIEW" | "HYBRID" | "ROADVIEW" | "OVERLAY" | "TRAFFIC" | "TERRAIN" | "BICYCLE" | "BICYCLE_HYBRID" | "USE_DISTRICT"; // 지도 종류 values


export type MapEventType = "center_changed" | "zoom_start" | "zoom_changed" | "bounds_changed" | "click" | "dblclick" | "rightclick" | "mousemove" | "dragstart" | "drag" | "dragend" | "idle" | "tilesloaded" | "maptypeid_changed";