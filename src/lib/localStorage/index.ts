import { isNative, isWeb } from "../platformHelpers";

export function setLocalStorageItem(key: string, value: string): void {
  if (isNative()) {
  } else if (isWeb()) {
    localStorage.setItem(key, value);
  }
}

export function getLocalStorageItem(key: string): string | null {
  if (isNative()) {
    return null;
  } else if (isWeb()) {
    return localStorage.getItem(key);
  }

  return null;
}

export function removeLocalStorageItem(key: string) {
  if (isNative()) {
  } else if (isWeb()) {
    localStorage.removeItem(key);
  }
}
