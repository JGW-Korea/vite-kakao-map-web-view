import { useEffect, useRef } from "react";
import { useMapStore } from "./kakaoMap.store";
import { LatLngInstance, MapInstance } from "../../types/kakaoMapInstance.type";
import { handleDraggableBounds } from "./kakaoMapEvent";

// 카카오 지도 초기화 + 웹뷰 <-> 모바일 통신 처리 커스텀 훅
export default function useKakaoMapController() {
  const kakaoMapInit = useMapStore((state) => state.kakaoMapInit);
  const kakaoMapRef = useRef<HTMLDivElement>(null); // 지도를 연결할 실제 DOM 요소를 가져오기 위한 참조 객체 선언
  const lastValidCenter = useRef<LatLngInstance>(null); // 지도 중심 좌표 저장 참조 객체

  // 카카오 지도 초기화
  useEffect(() => {
    if (!kakaoMapRef.current) return;

    /*
      초기 구성
      - center: 사용자의 현재 위치(위치 권한을 허용하지 않는 경우 강남역 기준)
      - level: 지도의 기본 확대 수준
    */
    const map: MapInstance = new window.kakao.maps.Map(kakaoMapRef.current, {
      center: new window.kakao.maps.LatLng(37.5665, 126.978),
      level: 2,
    });
    map.setMaxLevel(12); // 카카오 지도 확대 축소 값을 12를 최대값으로 지정한다. (이 이상 값이 증가할경우 지도가 제대로 표현이 안됨)

    // 대한민국 지도 경계 허용 범위
    const allowedBounds = new window.kakao.maps.LatLngBounds(
      new window.kakao.maps.LatLng(33.0, 124.0), // 대한민국 북서쪽 좌표
      new window.kakao.maps.LatLng(38.6, 132.0)  // 대한민국 동남쪽 좌표
    );
    lastValidCenter.current = map.getCenter(); // 카카오 지도 초기화 당시 중심 좌표 저장

    window.kakao.maps.event.addListener(map, "center_changed", () => handleDraggableBounds(allowedBounds, lastValidCenter, map)); // 중심 좌표가 대한민국 지도 경계를 벗어난 경우 영역 고정을 위한 이벤트 핸들러 등록

    // Zustand 전역 저장소에 생성한 카카오 지도를 상태 값으로 전달한다.
    kakaoMapInit(map);
  }, [kakaoMapInit]);

  return { kakaoMapRef };
}
