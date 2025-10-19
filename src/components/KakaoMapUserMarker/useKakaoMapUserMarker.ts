import { useEffect, useRef } from "react";
import { useMapStore } from "../KakaoMap/kakaoMap.store";

export default function useKakaoMapUserMarker() {
  const kakaoMap = useMapStore((state) => state.kakaoMap);

  const userMarkerRef = useRef<HTMLDivElement>(null);
  const userMarkerAnimationRef = useRef<HTMLDivElement>(null); // 사용자 현재 위치 마커의 애니메이션을 제어하기 위한 DOM Element 참조 객체

  // 요소의 애니메이션 제어 + 카카오 지도에 추가하기 위한 사이드 이펙트(side-effect)
  useEffect(() => {
    if (!userMarkerAnimationRef.current) return;

    const element = userMarkerAnimationRef.current;

    // 애니메이션 제어
    let loop = 0;
    const handleAnimationIteration = (event: AnimationEvent) => {
      if (loop === 5) {
        if (event.target instanceof HTMLDivElement) {
          event.target.style.animationPlayState = "paused";
        }

        element.removeEventListener("animationiteration", handleAnimationIteration);
      }

      loop += 1;
    };

    element.addEventListener("animationiteration", handleAnimationIteration); // 애니메이션 반복 과정 이벤트 리스너 등록

    // 카카오 지도에 커스텀 오버레이를 추가한다.
    if (kakaoMap && userMarkerRef.current) {
      const position = new window.kakao.maps.LatLng(37.5665, 126.978);

      // 커스텀 오버레이를 생성합니다
      new window.kakao.maps.CustomOverlay({
        content: userMarkerRef.current,
        position,
        map: kakaoMap,
      });
    }

    // 언마운트 시 메모리 최적화를 위한 클린업 작업 수행
    return () => {
      element.removeEventListener("animationiteration", handleAnimationIteration);
    };
  }, [kakaoMap]);

  return { userMarkerRef, userMarkerAnimationRef };
}
