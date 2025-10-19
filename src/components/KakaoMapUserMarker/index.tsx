import "./index.style.scss";
import useKakaoMapUserMarker from "./useKakaoMapUserMarker";

export default function KakaoMapUserMarker() {
  const { userMarkerRef, userMarkerAnimationRef } = useKakaoMapUserMarker();

  return (
    <div ref={userMarkerRef} className="container">
      <div ref={userMarkerAnimationRef} className="outer"></div>
      <div className="inner">
        <div></div>
      </div>
    </div>
  );
}
