import KakaoMapUserMarker from "./components/KakaoMapUserMarker";
import KakaoMap from "./components/KakaoMap";

// 카카오 지도 루트 컴포넌트
export default function App() {
  return (
    <>
      <KakaoMap />
      <KakaoMapUserMarker />
    </>
  );
}
