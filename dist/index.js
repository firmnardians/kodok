/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helper/index.js":
/*!*****************************!*\
  !*** ./src/helper/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "response": () => (/* binding */ response),
/* harmony export */   "fetching": () => (/* binding */ fetching)
/* harmony export */ });
/**
 * Kodok
 * Author firmnardians
 * Copyright(c) firmnardians
 * MIT Licensed
 */

const response = (r) =>
	r.json().then((d) => ({
		status: r.status,
		data: d,
		date_time: new Date().toISOString(),
		user_agent: {
			ua_browser_version: navigator.appVersion,
			ua_browser_language: navigator.language,
			ua_isCookiesEnabled: navigator.cookieEnabled,
			ua_isOnline: navigator.onLine,
			ua_platform: navigator.platform,
			ua_header: navigator.userAgent,
		},
	}));

function fetching(type, url, payload, header) {
	if (type === 'GET') {
		return fetch(url, {
			method: type,
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
		});
	} else if (type === 'POST' || type === 'PUT' || type === 'DELETE') {
		const dataObject = {
			method: type,
			headers: header
				? header
				: {
						'Content-Type': 'application/json',
				  },
		};

		if (payload) {
			dataObject.body = JSON.stringify(payload);
		}

		const res = fetch(url, dataObject);

		return res;
	} else {
		console.error('Error - Method only GET, POST, PUT & DELETE');
	}
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Kodok
 * Author firmnardians
 * Copyright(c) firmnardians
 * MIT Licensed
 */

const { response, fetching } = __webpack_require__(/*! ./helper */ "./src/helper/index.js");

const kodok = (function () {
	const get = async function (url = '') {
		const hit = await fetching('GET', url).then(response);

		return hit;
	};

	const pos = async function (url = '', payload = {}, header = {}) {
		const hit = await fetching('POST', url, payload, header).then(response);

		return hit;
	};

	const put = async function (url = '', payload = {}, header = {}) {
		const hit = await fetching('PUT', url, payload, header).then(response);

		return hit;
	};

	const del = async function (url = '', payload = {}, header = {}) {
		const hit = await fetching('DELETE', url, payload, header).then(response);

		return hit;
	};

	return {
		get: get,
		post: pos,
		put: put,
		delete: del,
	};
})();

module.exports = kodok;


/***/ })

/******/ 	});
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/helper/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map