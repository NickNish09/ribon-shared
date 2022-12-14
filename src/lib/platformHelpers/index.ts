export function isNative() {
  return typeof navigator !== "undefined" && navigator.product === "ReactNative";
}

export function isWeb() {
  return typeof document !== "undefined";
}
