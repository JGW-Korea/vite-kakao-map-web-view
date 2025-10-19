import { create } from "zustand";
import { MapInstance } from "../../types/kakaoMapInstance.type";

interface Map {
  kakaoMap: MapInstance | null;
  kakaoMapInit: (state: MapInstance) => void;
}

// 생성한 카카오 지도를 전역에서 공유하기 위한 Zustand 전역 스토어
export const useMapStore = create<Map>((set) => ({
  kakaoMap: null,
  kakaoMapInit: (state: MapInstance) => {
    set({
      kakaoMap: state,
    });
  },
}));
