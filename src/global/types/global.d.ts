declare global {
  interface Window {
    kakao: {
      maps: {
        [key in string]: unknown;
      };
    };
  }
}

export {};
