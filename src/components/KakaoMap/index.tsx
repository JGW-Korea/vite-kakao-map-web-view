import "./index.style.scss";
import useKakaoMapController from "./useKakaoMapController";

export default function KakaoMap() {
  const { kakaoMapRef } = useKakaoMapController();

  return (
    <div
      ref={kakaoMapRef}
      className="map-container"
    />
  );
}
