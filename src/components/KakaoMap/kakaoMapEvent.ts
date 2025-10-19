import { LatLngBoundsInstance, LatLngInstance, MapInstance } from "../../types/kakaoMapInstance.type";

// ------------------------------------------
// 🔯 중앙 좌표 변경 이벤트 핸들러
// ------------------------------------------

/**  중앙 좌표 기준 대한민국 지도 경계 벗어난 경우 중앙 좌표 재지정 이벤트 리스너 */
export function handleDraggableBounds(
  allowedBounds: LatLngBoundsInstance,
  lastValidCenter: React.RefObject<LatLngInstance | null>,
  map: MapInstance
) {
  if (!lastValidCenter.current) return;
  const center = map.getCenter(); // 드래그(Drag) 이후의 지도 중앙 좌표를 전달받는다.

  // 대한민국 지도 경계 범위 내 중심을 벗어났는지 검사
  if (allowedBounds.contain(center)) lastValidCenter.current = center; // ✅ 아직 범위 안이면 중심 업데이트
  else {
    map.setCenter(lastValidCenter.current); // ❌ 범위를 벗어난 경우 가장 마지막에 저장한 중심으로 좌표 이동
  }
}
