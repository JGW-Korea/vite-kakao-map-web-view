import { LatLngInstance } from "./kakaoMapInstance.type";
import { CustomOverlayOptionMapUnionValue, CustomOverlayOptionPositionUnionValue } from "./kakaoMapUnionValues.type";
import { MapTypeId } from "./kakaoMapValues.type";

/**
 * - center: 중심 좌표 (필수)
 * - level Number : 확대 수준 (기본값: 3)
 * - mapTypeId: 지도 종류 (기본값: 일반 지도)
 * - draggable: 마우스 드래그, 휠, 모바일 터치를 이용한 시점 변경(이동, 확대, 축소) 가능 여부
 * - scrollwheel: 마우스 휠, 모바일 터치를 이용한 확대 및 축소 가능 여부
 * - disableDoubleClick: 더블클릭 이벤트 및 더블클릭 확대 가능 여부
 * - disableDoubleClickZoom: 더블클릭 확대 가능 여부
 * - projectionId: 투영법 지정 (기본값: kakao.maps.ProjectionId.WCONG)
 * - tileAnimation: 지도 타일 애니메이션 설정 여부 (기본값: true)
 * - keyboardShortcuts: 키보드의 방향키와 +, – 키로 지도 이동,확대,축소 가능 여부 (기본값: false)
 *    - speed Number : 지도 이동 속도
*/
export type MapOptions = {
  center: LatLngInstance;
  level?: number;
  mapTypeId?: MapTypeId;
  draggable?: boolean;
  scrollwheel?: boolean;
  disableDoubleClick?: boolean;
  disableDoubleClickZoom?: boolean;
  projectionId?: string;
  tileAnimation?: boolean;
  keyboardShortcuts?: boolean | { speed: number };
};

/**
 * - clickable: true 로 설정하면 컨텐츠 영역을 클릭했을 경우 지도 이벤트를 막아준다.
 * - content: 엘리먼트 또는 HTML 문자열 형태의 내용
 * - map: 커스텀 오버레이가 올라갈 지도 또는 로드뷰
 * - position: 커스텀 오버레이의 좌표 또는 로드뷰에서의 시점
 * - xAnchor: 컨텐츠의 x축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5
 * - yAnchor: 컨텐츠의 y축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5
 * - zIndex: 커스텀 오버레이의 z-index
*/
export type CustomOverlayOptions = {
  content: Node | string;
  clickable?: boolean;
  map?: CustomOverlayOptionMapUnionValue;
  position?: CustomOverlayOptionPositionUnionValue;
  xAnchor?: number;
  yAnchor?: number;
  zIndex?: number;
};

/**
 * - panoId: 로드뷰 시작 지역의 고유 아이디 값.
 * - panoX: panoId가 유효하지 않을 경우 지도좌표를 기반으로 데이터를 요청할 수평 좌표값.
 * - panoY: panoId가 유효하지 않을 경우 지도좌표를 기반으로 데이터를 요청할 수직 좌표값.
 * - pan: 로드뷰 처음 실행시에 바라봐야 할 수평 각. 0이 정북방향. (0_360)
 * - tilt: 로드뷰 처음 실행시에 바라봐야 할 수직 각.(-90_90)
 * - zoom: 로드뷰 줌 초기값.(-3_3)
*/
export type RoadviewOptions = {
  panoId: number;
  panoX: number;
  panoY: number;
  pan: number;
  tilt: number;
  zoom: number;
}

/**
 * - pan: 가로 각도, 0부터 360 사이의 값으로 북쪽부터 시계방향으로 대응한다.
 * - tilt: 세로 각도, -90부터 90 사이의 값으로 위쪽부터 아래쪽으로 대응한다.
 * - zoom: 확대 수준, -3부터 3 사이의 정수이다.
 * - panoId: 특정 위치의 로드뷰 고유의 아이디 값
*/
export type ViewpointOptions = {
  pan: number;
  tilt: number;
  zoom: number;
  panoId: number;
}