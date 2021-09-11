/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = () => {
  const install = document.getElementById('install');
  console.log(install);
  install.addEventListener('click', async () => {
    // Hide the app provided install promotion
    hideInstallPromotion(); // Show the install prompt

    deferredPrompt.prompt(); // Wait for the user to respond to the prompt

    const {
      outcome
    } = await deferredPrompt.userChoice; // Optionally, send analytics event with outcome of user choice

    console.log(`User response to the install prompt: ${outcome}`); // We've used the prompt, and can't use it again, throw it away

    deferredPrompt = null;
  });
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const util = __webpack_require__(1);

let deferredPrompt;
self.addEventListener('beforeinstallprompt', e => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault(); // Stash the event so it can be triggered later.

  deferredPrompt = e; // Update UI notify the user they can install the PWA

  showInstallPromotion(); // Optionally, send analytics event that PWA install promo was shown.

  console.log(`'beforeinstallprompt' event was fired.`);
});
util();
self.addEventListener('appinstalled', () => {
  // Hide the app-provided install promotion
  hideInstallPromotion(); // Clear the deferredPrompt so it can be garbage collected

  deferredPrompt = null; // Optionally, send analytics event to indicate successful install

  console.log('PWA was installed');
});
})();

/******/ })()
;