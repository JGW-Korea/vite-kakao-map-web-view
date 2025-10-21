import { create } from "zustand";
import { MapInstance } from "../../types/kakaoMapInstance.type";

interface Map {
  kakaoMap: MapInstance | null;
  granted: boolean;
  location: {
    latitude: number;
    longitude: number;
  }
  kakaoMapInit: (state: MapInstance, granted: boolean, location: { latitude: number; longitude: number }) => void;
}

// 생성한 카카오 지도를 전역에서 공유하기 위한 Zustand 전역 스토어
export const useMapStore = create<Map>((set) => ({
  kakaoMap: null,
  granted: false,
  location: {
    latitude: 0,
    longitude: 0,
  },
  kakaoMapInit: (map: MapInstance, granted: boolean, location) => {
    set({
      kakaoMap: map,
      granted,
      location: {
        latitude: location.latitude,
        longitude: location.longitude
      }
    });
  },
}));
