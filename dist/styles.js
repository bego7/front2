(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/perfect-scrollbar/css/perfect-scrollbar.css":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/perfect-scrollbar/css/perfect-scrollbar.css ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9jc3MvcGVyZmVjdC1zY3JvbGxiYXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0g7RUFDRSw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsdUJBQXVCO0NBQ3hCO0FBRUQ7O0dBRUc7QUFDSDtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsNERBQTREO0VBQzVELG9FQUFvRTtFQUNwRSxhQUFhO0VBQ2Isb0RBQW9EO0VBQ3BELFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLDREQUE0RDtFQUM1RCxvRUFBb0U7RUFDcEUsWUFBWTtFQUNaLG9EQUFvRDtFQUNwRCxTQUFTO0VBQ1Qsb0NBQW9DO0VBQ3BDLG1CQUFtQjtDQUNwQjtBQUVEOztFQUVFLGVBQWU7RUFDZiw4QkFBOEI7Q0FDL0I7QUFFRDs7Ozs7O0VBTUUsYUFBYTtDQUNkO0FBRUQ7Ozs7OztFQU1FLHVCQUF1QjtFQUN2QixhQUFhO0NBQ2Q7QUFFRDs7R0FFRztBQUNIO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnRUFBZ0U7RUFDaEUsd0VBQXdFO0VBQ3hFLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsK0RBQStEO0VBQy9ELHVFQUF1RTtFQUN2RSxXQUFXO0VBQ1gsMkNBQTJDO0VBQzNDLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsbUJBQW1CO0NBQ3BCO0FBRUQ7OztFQUdFLHVCQUF1QjtFQUN2QixhQUFhO0NBQ2Q7QUFFRDs7O0VBR0UsdUJBQXVCO0VBQ3ZCLFlBQVk7Q0FDYjtBQUVELGlCQUFpQjtBQUNqQjtFQUNFO0lBQ0UsMEJBQTBCO0dBQzNCO0NBQ0Y7QUFFRDtFQUNFO0lBQ0UsMEJBQTBCO0dBQzNCO0NBQ0YiLCJmaWxlIjoibm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL2Nzcy9wZXJmZWN0LXNjcm9sbGJhci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29udGFpbmVyIHN0eWxlXG4gKi9cbi5wcyB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctYW5jaG9yOiBub25lO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogYXV0bztcbiAgLW1zLXRvdWNoLWFjdGlvbjogYXV0bztcbn1cblxuLypcbiAqIFNjcm9sbGJhciByYWlsIHN0eWxlc1xuICovXG4ucHNfX3JhaWwteCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgb3BhY2l0eSAuMnMgbGluZWFyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgb3BhY2l0eSAuMnMgbGluZWFyO1xuICBoZWlnaHQ6IDE1cHg7XG4gIC8qIHRoZXJlIG11c3QgYmUgJ2JvdHRvbScgb3IgJ3RvcCcgZm9yIHBzX19yYWlsLXggKi9cbiAgYm90dG9tOiAwcHg7XG4gIC8qIHBsZWFzZSBkb24ndCBjaGFuZ2UgJ3Bvc2l0aW9uJyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wc19fcmFpbC15IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBvcGFjaXR5IC4ycyBsaW5lYXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBvcGFjaXR5IC4ycyBsaW5lYXI7XG4gIHdpZHRoOiAxNXB4O1xuICAvKiB0aGVyZSBtdXN0IGJlICdyaWdodCcgb3IgJ2xlZnQnIGZvciBwc19fcmFpbC15ICovXG4gIHJpZ2h0OiAwO1xuICAvKiBwbGVhc2UgZG9uJ3QgY2hhbmdlICdwb3NpdGlvbicgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHMtLWFjdGl2ZS14ID4gLnBzX19yYWlsLXgsXG4ucHMtLWFjdGl2ZS15ID4gLnBzX19yYWlsLXkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5wczpob3ZlciA+IC5wc19fcmFpbC14LFxuLnBzOmhvdmVyID4gLnBzX19yYWlsLXksXG4ucHMtLWZvY3VzID4gLnBzX19yYWlsLXgsXG4ucHMtLWZvY3VzID4gLnBzX19yYWlsLXksXG4ucHMtLXNjcm9sbGluZy14ID4gLnBzX19yYWlsLXgsXG4ucHMtLXNjcm9sbGluZy15ID4gLnBzX19yYWlsLXkge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5wcyAucHNfX3JhaWwteDpob3Zlcixcbi5wcyAucHNfX3JhaWwteTpob3Zlcixcbi5wcyAucHNfX3JhaWwteDpmb2N1cyxcbi5wcyAucHNfX3JhaWwteTpmb2N1cyxcbi5wcyAucHNfX3JhaWwteC5wcy0tY2xpY2tpbmcsXG4ucHMgLnBzX19yYWlsLXkucHMtLWNsaWNraW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4vKlxuICogU2Nyb2xsYmFyIHRodW1iIHN0eWxlc1xuICovXG4ucHNfX3RodW1iLXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgaGVpZ2h0IC4ycyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIGhlaWdodCAuMnMgZWFzZS1pbi1vdXQ7XG4gIGhlaWdodDogNnB4O1xuICAvKiB0aGVyZSBtdXN0IGJlICdib3R0b20nIGZvciBwc19fdGh1bWIteCAqL1xuICBib3R0b206IDJweDtcbiAgLyogcGxlYXNlIGRvbid0IGNoYW5nZSAncG9zaXRpb24nICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnBzX190aHVtYi15IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIHdpZHRoIC4ycyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIHdpZHRoIC4ycyBlYXNlLWluLW91dDtcbiAgd2lkdGg6IDZweDtcbiAgLyogdGhlcmUgbXVzdCBiZSAncmlnaHQnIGZvciBwc19fdGh1bWIteSAqL1xuICByaWdodDogMnB4O1xuICAvKiBwbGVhc2UgZG9uJ3QgY2hhbmdlICdwb3NpdGlvbicgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHNfX3JhaWwteDpob3ZlciA+IC5wc19fdGh1bWIteCxcbi5wc19fcmFpbC14OmZvY3VzID4gLnBzX190aHVtYi14LFxuLnBzX19yYWlsLXgucHMtLWNsaWNraW5nIC5wc19fdGh1bWIteCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gIGhlaWdodDogMTFweDtcbn1cblxuLnBzX19yYWlsLXk6aG92ZXIgPiAucHNfX3RodW1iLXksXG4ucHNfX3JhaWwteTpmb2N1cyA+IC5wc19fdGh1bWIteSxcbi5wc19fcmFpbC15LnBzLS1jbGlja2luZyAucHNfX3RodW1iLXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICB3aWR0aDogMTFweDtcbn1cblxuLyogTVMgc3VwcG9ydHMgKi9cbkBzdXBwb3J0cyAoLW1zLW92ZXJmbG93LXN0eWxlOiBub25lKSB7XG4gIC5wcyB7XG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSksICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAucHMge1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/scss/material-dashboard.scss":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/assets/scss/material-dashboard.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/demo.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/assets/css/demo.css ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*my-app .main-panel .main-content .card{\n    animation-duration: 750ms;\n    opacity: 0;\n    animation-name: fadeIn;\n    animation-fill-mode: forwards;\n}*/\n\n.tim-typo{\n  padding-left: 25%;\n  margin-bottom: 40px;\n  position: relative;\n  width: 100%;\n}\n\n.tim-typo .tim-note{\n  bottom: 5px;\n  color: #c0c1c2;\n  display: block;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 15px;\n  left: 0;\n  margin-left: 20px;\n  position: absolute;\n  width: 260px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2RlbW8uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHOztBQUVIO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsWUFBWTtDQUNiOztBQUNEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hc3NldHMvY3NzL2RlbW8uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypteS1hcHAgLm1haW4tcGFuZWwgLm1haW4tY29udGVudCAuY2FyZHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDc1MG1zO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn0qL1xuXG4udGltLXR5cG97XG4gIHBhZGRpbmctbGVmdDogMjUlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRpbS10eXBvIC50aW0tbm90ZXtcbiAgYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjYzBjMWMyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI2MHB4O1xufVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/perfect-scrollbar/css/perfect-scrollbar.css":
/*!******************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/css/perfect-scrollbar.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!./perfect-scrollbar.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/perfect-scrollbar/css/perfect-scrollbar.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/assets/css/demo.css":
/*!*********************************!*\
  !*** ./src/assets/css/demo.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!./demo.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/demo.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/assets/scss/material-dashboard.scss":
/*!*************************************************!*\
  !*** ./src/assets/scss/material-dashboard.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--14-3!./material-dashboard.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/scss/material-dashboard.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!********************************************************************************************************************************************!*\
  !*** multi ./node_modules/perfect-scrollbar/css/perfect-scrollbar.css ./src/assets/scss/material-dashboard.scss ./src/assets/css/demo.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Bego Montes\Documents\SemestreI\WEB\front2\node_modules\perfect-scrollbar\css\perfect-scrollbar.css */"./node_modules/perfect-scrollbar/css/perfect-scrollbar.css");
__webpack_require__(/*! C:\Users\Bego Montes\Documents\SemestreI\WEB\front2\src\assets\scss\material-dashboard.scss */"./src/assets/scss/material-dashboard.scss");
module.exports = __webpack_require__(/*! C:\Users\Bego Montes\Documents\SemestreI\WEB\front2\src\assets\css\demo.css */"./src/assets/css/demo.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map