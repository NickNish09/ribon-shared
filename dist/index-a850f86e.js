function ___$insertStyle(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}}function isNative(){return"undefined"!=typeof navigator&&"ReactNative"===navigator.product}function isWeb(){return"undefined"!=typeof document}function setLocalStorageItem(e,t){isNative()||isWeb()&&localStorage.setItem(e,t)}function getLocalStorageItem(e){return!isNative()&&isWeb()?localStorage.getItem(e):null}function removeLocalStorageItem(e){isNative()||isWeb()&&localStorage.removeItem(e)}exports.getLocalStorageItem=getLocalStorageItem,exports.isNative=isNative,exports.isWeb=isWeb,exports.removeLocalStorageItem=removeLocalStorageItem,exports.setLocalStorageItem=setLocalStorageItem;
//# sourceMappingURL=index-a850f86e.js.map
