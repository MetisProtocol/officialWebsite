const DEFAULT_LNG = 'en';
const LAN_KEY = 'LNG';

export function getLanguage() {
  return window.localStorage.getItem(LAN_KEY) || DEFAULT_LNG;
}

export function setLanguage(lng: string) {
  window.localStorage.setItem(LAN_KEY, lng);
}
