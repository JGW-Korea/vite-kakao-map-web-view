# (🚘 Smart Parking) Kakao Map - Web View

[![카카오 지도 API 공식 문서](/public/thumbnail.png)](https://apis.map.kakao.com/)

본 저장소는 React Native 기반의 [Smart Parking](https://github.com/won-won-smart-parking/smart-parking-fe) 애플리케이션에서 카카오 지도를 표기하기 위해 WebView로 연동되는 지도 웹 페이지와, 이를 통한 위치 정보 전달･지도 이동･마커 표시 등 모바일 <-> 웹 간 상호작용을 처리하는 로직을 포함하고 있습니다.

<br/>

> **🤔 KakaoMap Web SDK를 사용하는 이유** <br />
> 카카오 지도 SDK는 iOS, Android, Web 3가지 환경밖에 제공하지 않아 각 모바일 OS에 맞는 네이티브 컴포넌트를 구성하지 않는 이상 사용할 수 있는 방법이 웹 애플리케이션을 배포하여 WebView를 띄우는 브릿지 통신 구조로 구성해야 하기 때문에 본 프로젝트를 구성하게 되었습니다.
