import { isNative, isWeb } from '../platformHelpers';

export function setLocalStorageItem(key: string, value: string): void {
  if (isNative()) {
  } else if (isWeb()) {
    localStorage.setItem(key, value);
  }
}

export function getLocalStorageItem(key: string): string | null {
  return localStorage.getItem(key);
}

export function removeLocalStorageItem(key: string) {
  localStorage.removeItem(key);
}
