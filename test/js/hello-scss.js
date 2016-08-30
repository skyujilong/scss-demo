/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/test/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	console.log('hello scss!!');


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.23.1@css-loader/index.js?sourceMap!./../../node_modules/.0.11.0@postcss-loader/index.js?sourceMap=inline!./../../node_modules/.4.0.0@sass-loader/index.js?sourceMap!./hello-scss.scss", function() {
				var newContent = require("!!./../../node_modules/.0.23.1@css-loader/index.js?sourceMap!./../../node_modules/.0.11.0@postcss-loader/index.js?sourceMap=inline!./../../node_modules/.4.0.0@sass-loader/index.js?sourceMap!./hello-scss.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\nSCSS variables are information about icon's compiled state, stored under its original file name\n\n.icon-home {\n  width: $icon-home-width;\n}\n\nThe large array-like variables contain all information about a single icon\n$icon-home: x y offset_x offset_y width height total_width total_height image_path;\n\nAt the bottom of this section, we provide information about the spritesheet itself\n$spritesheet: width height image $spritesheet-sprites;\n*/\n/*\nThe provided mixins are intended to be used with the array-like variables\n\n.icon-home {\n  @include sprite-width($icon-home);\n}\n\n.icon-email {\n  @include sprite($icon-email);\n}\n\nExample usage in HTML:\n\n`display: block` sprite:\n<div class=\"icon-home\"></div>\n\nTo change `display` (e.g. `display: inline-block;`), we suggest using a common CSS class:\n\n// CSS\n.icon {\n  display: inline-block;\n}\n\n// HTML\n<i class=\"icon icon-home\"></i>\n*/\n/*\nThe `sprites` mixin generates identical output to the CSS template\n  but can be overridden inside of SCSS\n\n@include sprites($spritesheet-sprites);\n*/\nbody {\n  font-family: Helvetica,Tahoma,Arial, \"Hiragino Sans GB\",\"Microsoft YaHei\",SimSun,Heiti,sans-serif; }\n\nh1, .extend {\n  color: red; }\n\n.nav {\n  overflow: hidden;\n  height: 82px;\n  width: 1240px;\n  margin: 0 auto; }\n  .nav .logo {\n    background-image: url(" + __webpack_require__(4) + ");\n    background-position: 0px -42px;\n    width: 115px;\n    height: 20px;\n    float: left;\n    margin-top: 32px; }\n  .nav ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    overflow: hidden;\n    margin-top: 32px; }\n  .nav li {\n    padding: 0;\n    margin: 0;\n    display: block;\n    float: left;\n    padding: 0 22px;\n    color: #515151;\n    cursor: pointer;\n    font-size: 14px; }\n    .nav li:hover {\n      color: #3697ce; }\n\n.test-var h2 {\n  color: red; }\n\n.sp-1 {\n  color: blue; }\n\n.ie-test {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1; }\n\n.outer a {\n  color: #515151; }\n\na {\n  color: red; }\n\n.extend {\n  text-align: center; }\n\n.zhanwei {\n  color: red;\n  height: 50px;\n  line-height: 50px; }\n\n.test-mixin {\n  opacity: 0.5;\n  background-color: red; }\n\n.test-mixin-args {\n  opacity: 0.5;\n  background-color: blue; }\n\n.test-mixin-2 {\n  opacity: 0.5;\n  background-color: red;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Njc3Mvc3ByaXRlLnNjc3MiLCJwYWdlc1xcc2Nzc1xcaGVsbG8tc2Nzcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7RUFZRTtBQTZCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXlCRTtBQTJCRjs7Ozs7RUFLRTtBQ2hHRjtFQUNJLGtHQUM2RCxFQUNoRTs7QUFFRDtFQUNJLFdBQVcsRUFDZDs7QUFFRDtFQUNJLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWUsRUE2QmxCO0VBakNEO0lEd0VFLHlDQUF1QjtJQUx2QiwrQkE1QzJCO0lBa0MzQixhQWxDa0M7SUFzQ2xDLGFBdEN3QztJQ2ZsQyxZQUFZO0lBQ1osaUJBQWlCLEVBQ3BCO0VBVkw7SUFhUSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCLEVBQ3BCO0VBbEJMO0lBcUJRLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFJbkI7SUFoQ0w7TUE4QlksZUFBVSxFQUNiOztBQUlUO0VBRVEsV0FIRSxFQUlMOztBQU9MO0VBQ0ksWUFBWSxFQUNmOztBQUVEO0VBQ0ksc0JBQXNCO0dBQ3RCLGdCQUFpQjtHQUNqQixRQUFRLEVBQ1g7O0FBR0Q7RUFFUSxlQUFlLEVBQ2xCOztBQUNRO0VBQ0wsV0FBVyxFQUNkOztBQUlMO0VBRUksbUJBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0IsRUFDckI7O0FBUUQ7RUFISSxhQUFpQjtFQUNqQixzQkFGb0MsRUFNdkM7O0FBRUQ7RUFQSSxhQUFpQjtFQUNqQix1QkFPK0IsRUFDbEM7O0FBQ0Q7RUFWSSxhQUFpQjtFQUNqQixzQkFGb0M7RUFhcEMsbUJBQW1CLEVBQ3RCIiwiZmlsZSI6ImhlbGxvLXNjc3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5TQ1NTIHZhcmlhYmxlcyBhcmUgaW5mb3JtYXRpb24gYWJvdXQgaWNvbidzIGNvbXBpbGVkIHN0YXRlLCBzdG9yZWQgdW5kZXIgaXRzIG9yaWdpbmFsIGZpbGUgbmFtZVxuXG4uaWNvbi1ob21lIHtcbiAgd2lkdGg6ICRpY29uLWhvbWUtd2lkdGg7XG59XG5cblRoZSBsYXJnZSBhcnJheS1saWtlIHZhcmlhYmxlcyBjb250YWluIGFsbCBpbmZvcm1hdGlvbiBhYm91dCBhIHNpbmdsZSBpY29uXG4kaWNvbi1ob21lOiB4IHkgb2Zmc2V0X3ggb2Zmc2V0X3kgd2lkdGggaGVpZ2h0IHRvdGFsX3dpZHRoIHRvdGFsX2hlaWdodCBpbWFnZV9wYXRoO1xuXG5BdCB0aGUgYm90dG9tIG9mIHRoaXMgc2VjdGlvbiwgd2UgcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc3ByaXRlc2hlZXQgaXRzZWxmXG4kc3ByaXRlc2hlZXQ6IHdpZHRoIGhlaWdodCBpbWFnZSAkc3ByaXRlc2hlZXQtc3ByaXRlcztcbiovXG4kdXNlci1pY29uLW5hbWU6ICd1c2VyLWljb24nO1xuJHVzZXItaWNvbi14OiAxMzVweDtcbiR1c2VyLWljb24teTogMHB4O1xuJHVzZXItaWNvbi1vZmZzZXQteDogLTEzNXB4O1xuJHVzZXItaWNvbi1vZmZzZXQteTogMHB4O1xuJHVzZXItaWNvbi13aWR0aDogMjJweDtcbiR1c2VyLWljb24taGVpZ2h0OiAyMnB4O1xuJHVzZXItaWNvbi10b3RhbC13aWR0aDogMTU3cHg7XG4kdXNlci1pY29uLXRvdGFsLWhlaWdodDogNjJweDtcbiR1c2VyLWljb24taW1hZ2U6ICcuLi9pbWcvc3ByaXRlLnBuZyc7XG4kdXNlci1pY29uOiAoMTM1cHgsIDBweCwgLTEzNXB4LCAwcHgsIDIycHgsIDIycHgsIDE1N3B4LCA2MnB4LCAnLi4vaW1nL3Nwcml0ZS5wbmcnLCAndXNlci1pY29uJywgKTtcbiRsb2dvLW5hbWU6ICdsb2dvJztcbiRsb2dvLXg6IDBweDtcbiRsb2dvLXk6IDQycHg7XG4kbG9nby1vZmZzZXQteDogMHB4O1xuJGxvZ28tb2Zmc2V0LXk6IC00MnB4O1xuJGxvZ28td2lkdGg6IDExNXB4O1xuJGxvZ28taGVpZ2h0OiAyMHB4O1xuJGxvZ28tdG90YWwtd2lkdGg6IDE1N3B4O1xuJGxvZ28tdG90YWwtaGVpZ2h0OiA2MnB4O1xuJGxvZ28taW1hZ2U6ICcuLi9pbWcvc3ByaXRlLnBuZyc7XG4kbG9nbzogKDBweCwgNDJweCwgMHB4LCAtNDJweCwgMTE1cHgsIDIwcHgsIDE1N3B4LCA2MnB4LCAnLi4vaW1nL3Nwcml0ZS5wbmcnLCAnbG9nbycsICk7XG4kc3ByaXRlc2hlZXQtd2lkdGg6IDE1N3B4O1xuJHNwcml0ZXNoZWV0LWhlaWdodDogNjJweDtcbiRzcHJpdGVzaGVldC1pbWFnZTogJy4uL2ltZy9zcHJpdGUucG5nJztcbiRzcHJpdGVzaGVldC1zcHJpdGVzOiAoJHVzZXItaWNvbiwgJGxvZ28sICk7XG4kc3ByaXRlc2hlZXQ6ICgxNTdweCwgNjJweCwgJy4uL2ltZy9zcHJpdGUucG5nJywgJHNwcml0ZXNoZWV0LXNwcml0ZXMsICk7XG5cbi8qXG5UaGUgcHJvdmlkZWQgbWl4aW5zIGFyZSBpbnRlbmRlZCB0byBiZSB1c2VkIHdpdGggdGhlIGFycmF5LWxpa2UgdmFyaWFibGVzXG5cbi5pY29uLWhvbWUge1xuICBAaW5jbHVkZSBzcHJpdGUtd2lkdGgoJGljb24taG9tZSk7XG59XG5cbi5pY29uLWVtYWlsIHtcbiAgQGluY2x1ZGUgc3ByaXRlKCRpY29uLWVtYWlsKTtcbn1cblxuRXhhbXBsZSB1c2FnZSBpbiBIVE1MOlxuXG5gZGlzcGxheTogYmxvY2tgIHNwcml0ZTpcbjxkaXYgY2xhc3M9XCJpY29uLWhvbWVcIj48L2Rpdj5cblxuVG8gY2hhbmdlIGBkaXNwbGF5YCAoZS5nLiBgZGlzcGxheTogaW5saW5lLWJsb2NrO2ApLCB3ZSBzdWdnZXN0IHVzaW5nIGEgY29tbW9uIENTUyBjbGFzczpcblxuLy8gQ1NTXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLy8gSFRNTFxuPGkgY2xhc3M9XCJpY29uIGljb24taG9tZVwiPjwvaT5cbiovXG5AbWl4aW4gc3ByaXRlLXdpZHRoKCRzcHJpdGUpIHtcbiAgd2lkdGg6IG50aCgkc3ByaXRlLCA1KTtcbn1cblxuQG1peGluIHNwcml0ZS1oZWlnaHQoJHNwcml0ZSkge1xuICBoZWlnaHQ6IG50aCgkc3ByaXRlLCA2KTtcbn1cblxuQG1peGluIHNwcml0ZS1wb3NpdGlvbigkc3ByaXRlKSB7XG4gICRzcHJpdGUtb2Zmc2V0LXg6IG50aCgkc3ByaXRlLCAzKTtcbiAgJHNwcml0ZS1vZmZzZXQteTogbnRoKCRzcHJpdGUsIDQpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkc3ByaXRlLW9mZnNldC14ICAkc3ByaXRlLW9mZnNldC15O1xufVxuXG5AbWl4aW4gc3ByaXRlLWltYWdlKCRzcHJpdGUpIHtcbiAgJHNwcml0ZS1pbWFnZTogbnRoKCRzcHJpdGUsIDkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoI3skc3ByaXRlLWltYWdlfSk7XG59XG5cbkBtaXhpbiBzcHJpdGUoJHNwcml0ZSkge1xuICBAaW5jbHVkZSBzcHJpdGUtaW1hZ2UoJHNwcml0ZSk7XG4gIEBpbmNsdWRlIHNwcml0ZS1wb3NpdGlvbigkc3ByaXRlKTtcbiAgQGluY2x1ZGUgc3ByaXRlLXdpZHRoKCRzcHJpdGUpO1xuICBAaW5jbHVkZSBzcHJpdGUtaGVpZ2h0KCRzcHJpdGUpO1xufVxuXG4vKlxuVGhlIGBzcHJpdGVzYCBtaXhpbiBnZW5lcmF0ZXMgaWRlbnRpY2FsIG91dHB1dCB0byB0aGUgQ1NTIHRlbXBsYXRlXG4gIGJ1dCBjYW4gYmUgb3ZlcnJpZGRlbiBpbnNpZGUgb2YgU0NTU1xuXG5AaW5jbHVkZSBzcHJpdGVzKCRzcHJpdGVzaGVldC1zcHJpdGVzKTtcbiovXG5AbWl4aW4gc3ByaXRlcygkc3ByaXRlcykge1xuICBAZWFjaCAkc3ByaXRlIGluICRzcHJpdGVzIHtcbiAgICAkc3ByaXRlLW5hbWU6IG50aCgkc3ByaXRlLCAxMCk7XG4gICAgLiN7JHNwcml0ZS1uYW1lfSB7XG4gICAgICBAaW5jbHVkZSBzcHJpdGUoJHNwcml0ZSk7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiLi9zcHJpdGUuc2Nzc1wiO1xuXG5ib2R5e1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsVGFob21hLEFyaWFsLFxuICAgIFwiSGlyYWdpbm8gU2FucyBHQlwiLFwiTWljcm9zb2Z0IFlhSGVpXCIsU2ltU3VuLEhlaXRpLHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4ubmF2IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogODJweDtcbiAgICB3aWR0aDogMTI0MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLmxvZ28ge1xuICAgICAgICBAaW5jbHVkZSBzcHJpdGUoJGxvZ28pO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAwIDIycHg7XG4gICAgICAgIGNvbG9yOiByZ2IoODEsODEsODEpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDU0LDE1MSwyMDYpO1xuICAgICAgICB9XG4gICAgfVxufVxuJGNvbG9yOnJlZDtcbi50ZXN0LXZhcntcbiAgICBoMntcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICB9XG59XG4kY29sb3I6ICNlZmVmZWY7XG4vL+WPmOmHj+S9nOeUqOWfn+aYr+WFqOWxgOeahO+8jOS4gOe7j+S/ruaUue+8jOWwseimgeWujOibi+S6huOAglxuXG4vL+eJueauiuWPmOmHj1xuJGluZGV4OjE7XG4uc3AtI3skaW5kZXh9e1xuICAgIGNvbG9yOiBibHVlO1xufVxuXG4uaWUtdGVzdHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgKmRpc3BsYXk6IGlubGluZTtcbiAgICAqem9vbToxO1xufVxuXG4vL0BhdC1yb2906Lez5Ye65omA5pyJ55qE5bWM5aWXXG4ub3V0ZXJ7XG4gICAgYXtcbiAgICAgICAgY29sb3I6ICM1MTUxNTE7XG4gICAgfVxuICAgIEBhdC1yb290IGF7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxufVxuXG4vL+e7p+aJv0BleHRlbmRcbi5leHRlbmR7XG4gICAgQGV4dGVuZCBoMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vLyDljaDkvY3pgInmi6nlmajvvIzkuI3ooqvosIPnlKjkuI3ooqvop6PmnpBcbiVyMXtcbiAgICBjb2xvcjogcmVkO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbn1cbi56aGFud2Vpe1xuICAgIEBleHRlbmQgJXIxO1xufVxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHk6NTAsJGJnLWNvbG9yOnJlZCkge1xuICAgIG9wYWNpdHk6ICRvcGFjaXR5IC8gMTAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbn1cbi50ZXN0LW1peGlue1xuICAgIEBpbmNsdWRlIG9wYWNpdHk7XG59XG4kYmctY29sb3I6eWVsbG93O1xuLnRlc3QtbWl4aW4tYXJnc3tcbiAgICBAaW5jbHVkZSBvcGFjaXR5KCRiZy1jb2xvcjpibHVlKTtcbn1cbi50ZXN0LW1peGluLTJ7XG4gICAgQGluY2x1ZGUgb3BhY2l0eTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iXX0= */", "", {"version":3,"sources":["/./pages/scss/pages/scss/sprite.scss","/./pages/scss/pages/scss/hello-scss.scss","/./pages/scss/hello-scss.scss"],"names":[],"mappings":"AAAA;;;;;;;;;;;;EAYE;AA6BF;;;;;;;;;;;;;;;;;;;;;;;;;EAyBE;AA2BF;;;;;EAKE;AChGF;EACI,kGAC6D,EAChE;;AAED;EACI,WAAW,EACd;;AAED;EACI,iBAAiB;EACjB,aAAa;EACb,cAAc;EACd,eAAe,EA6BlB;EAjCD;IDwEE,gDAAuB;IALvB,+BA5C2B;IAkC3B,aAlCkC;IAsClC,aAtCwC;ICflC,YAAY;IACZ,iBAAiB,EACpB;EAVL;IAaQ,iBAAiB;IACjB,WAAW;IACX,UAAU;IACV,iBAAiB;IACjB,iBAAiB,EACpB;EAlBL;IAqBQ,WAAW;IACX,UAAU;IACV,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,eAAU;IACV,gBAAgB;IAChB,gBAAgB,EAInB;IAhCL;MA8BY,eAAU,EACb;;AAIT;EAEQ,WAHE,EAIL;;AAOL;EACI,YAAY,EACf;;AAED;EACI,sBAAsB;GC4BxB,gBD3BmB;GC4BnB,QD3BU,EACX;;AAGD;EAEQ,eAAe,EAClB;;AACQ;EACL,WAAW,EACd;;AAIL;EAEI,mBAAmB,EACtB;;AAED;EACI,WAAW;EACX,aAAa;EACb,kBAAkB,EACrB;;AAQD;EAHI,aAAiB;EACjB,sBAFoC,EAMvC;;AAED;EAPI,aAAiB;EACjB,uBAO+B,EAClC;;AACD;EAVI,aAAiB;EACjB,sBAFoC;EAapC,mBAAmB,EACtB;;ACeD,yqOAAyqO","file":"hello-scss.scss","sourcesContent":["/*\nSCSS variables are information about icon's compiled state, stored under its original file name\n\n.icon-home {\n  width: $icon-home-width;\n}\n\nThe large array-like variables contain all information about a single icon\n$icon-home: x y offset_x offset_y width height total_width total_height image_path;\n\nAt the bottom of this section, we provide information about the spritesheet itself\n$spritesheet: width height image $spritesheet-sprites;\n*/\n$user-icon-name: 'user-icon';\n$user-icon-x: 135px;\n$user-icon-y: 0px;\n$user-icon-offset-x: -135px;\n$user-icon-offset-y: 0px;\n$user-icon-width: 22px;\n$user-icon-height: 22px;\n$user-icon-total-width: 157px;\n$user-icon-total-height: 62px;\n$user-icon-image: '../img/sprite.png';\n$user-icon: (135px, 0px, -135px, 0px, 22px, 22px, 157px, 62px, '../img/sprite.png', 'user-icon', );\n$logo-name: 'logo';\n$logo-x: 0px;\n$logo-y: 42px;\n$logo-offset-x: 0px;\n$logo-offset-y: -42px;\n$logo-width: 115px;\n$logo-height: 20px;\n$logo-total-width: 157px;\n$logo-total-height: 62px;\n$logo-image: '../img/sprite.png';\n$logo: (0px, 42px, 0px, -42px, 115px, 20px, 157px, 62px, '../img/sprite.png', 'logo', );\n$spritesheet-width: 157px;\n$spritesheet-height: 62px;\n$spritesheet-image: '../img/sprite.png';\n$spritesheet-sprites: ($user-icon, $logo, );\n$spritesheet: (157px, 62px, '../img/sprite.png', $spritesheet-sprites, );\n\n/*\nThe provided mixins are intended to be used with the array-like variables\n\n.icon-home {\n  @include sprite-width($icon-home);\n}\n\n.icon-email {\n  @include sprite($icon-email);\n}\n\nExample usage in HTML:\n\n`display: block` sprite:\n<div class=\"icon-home\"></div>\n\nTo change `display` (e.g. `display: inline-block;`), we suggest using a common CSS class:\n\n// CSS\n.icon {\n  display: inline-block;\n}\n\n// HTML\n<i class=\"icon icon-home\"></i>\n*/\n@mixin sprite-width($sprite) {\n  width: nth($sprite, 5);\n}\n\n@mixin sprite-height($sprite) {\n  height: nth($sprite, 6);\n}\n\n@mixin sprite-position($sprite) {\n  $sprite-offset-x: nth($sprite, 3);\n  $sprite-offset-y: nth($sprite, 4);\n  background-position: $sprite-offset-x  $sprite-offset-y;\n}\n\n@mixin sprite-image($sprite) {\n  $sprite-image: nth($sprite, 9);\n  background-image: url(#{$sprite-image});\n}\n\n@mixin sprite($sprite) {\n  @include sprite-image($sprite);\n  @include sprite-position($sprite);\n  @include sprite-width($sprite);\n  @include sprite-height($sprite);\n}\n\n/*\nThe `sprites` mixin generates identical output to the CSS template\n  but can be overridden inside of SCSS\n\n@include sprites($spritesheet-sprites);\n*/\n@mixin sprites($sprites) {\n  @each $sprite in $sprites {\n    $sprite-name: nth($sprite, 10);\n    .#{$sprite-name} {\n      @include sprite($sprite);\n    }\n  }\n}\n","@import \"./sprite.scss\";\n\nbody{\n    font-family: Helvetica,Tahoma,Arial,\n    \"Hiragino Sans GB\",\"Microsoft YaHei\",SimSun,Heiti,sans-serif;\n}\n\nh1 {\n    color: red;\n}\n\n.nav {\n    overflow: hidden;\n    height: 82px;\n    width: 1240px;\n    margin: 0 auto;\n\n    .logo {\n        @include sprite($logo);\n        float: left;\n        margin-top: 32px;\n    }\n\n    ul {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        overflow: hidden;\n        margin-top: 32px;\n    }\n\n    li {\n        padding: 0;\n        margin: 0;\n        display: block;\n        float: left;\n        padding: 0 22px;\n        color: rgb(81,81,81);\n        cursor: pointer;\n        font-size: 14px;\n        &:hover {\n            color: rgb(54,151,206);\n        }\n    }\n}\n$color:red;\n.test-var{\n    h2{\n        color: $color;\n    }\n}\n$color: #efefef;\n//变量作用域是全局的，一经修改，就要完蛋了。\n\n//特殊变量\n$index:1;\n.sp-#{$index}{\n    color: blue;\n}\n\n.ie-test{\n    display: inline-block;\n    *display: inline;\n    *zoom:1;\n}\n\n//@at-root跳出所有的嵌套\n.outer{\n    a{\n        color: #515151;\n    }\n    @at-root a{\n        color: red;\n    }\n}\n\n//继承@extend\n.extend{\n    @extend h1;\n    text-align: center;\n}\n// 占位选择器，不被调用不被解析\n%r1{\n    color: red;\n    height: 50px;\n    line-height: 50px;\n}\n.zhanwei{\n    @extend %r1;\n}\n@mixin opacity($opacity:50,$bg-color:red) {\n    opacity: $opacity / 100;\n    background-color: $bg-color;\n}\n.test-mixin{\n    @include opacity;\n}\n$bg-color:yellow;\n.test-mixin-args{\n    @include opacity($bg-color:blue);\n}\n.test-mixin-2{\n    @include opacity;\n    border-radius: 50%;\n}\n","/*\nSCSS variables are information about icon's compiled state, stored under its original file name\n\n.icon-home {\n  width: $icon-home-width;\n}\n\nThe large array-like variables contain all information about a single icon\n$icon-home: x y offset_x offset_y width height total_width total_height image_path;\n\nAt the bottom of this section, we provide information about the spritesheet itself\n$spritesheet: width height image $spritesheet-sprites;\n*/\n/*\nThe provided mixins are intended to be used with the array-like variables\n\n.icon-home {\n  @include sprite-width($icon-home);\n}\n\n.icon-email {\n  @include sprite($icon-email);\n}\n\nExample usage in HTML:\n\n`display: block` sprite:\n<div class=\"icon-home\"></div>\n\nTo change `display` (e.g. `display: inline-block;`), we suggest using a common CSS class:\n\n// CSS\n.icon {\n  display: inline-block;\n}\n\n// HTML\n<i class=\"icon icon-home\"></i>\n*/\n/*\nThe `sprites` mixin generates identical output to the CSS template\n  but can be overridden inside of SCSS\n\n@include sprites($spritesheet-sprites);\n*/\nbody {\n  font-family: Helvetica,Tahoma,Arial, \"Hiragino Sans GB\",\"Microsoft YaHei\",SimSun,Heiti,sans-serif; }\n\nh1, .extend {\n  color: red; }\n\n.nav {\n  overflow: hidden;\n  height: 82px;\n  width: 1240px;\n  margin: 0 auto; }\n  .nav .logo {\n    background-image: url(../img/sprite.png);\n    background-position: 0px -42px;\n    width: 115px;\n    height: 20px;\n    float: left;\n    margin-top: 32px; }\n  .nav ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    overflow: hidden;\n    margin-top: 32px; }\n  .nav li {\n    padding: 0;\n    margin: 0;\n    display: block;\n    float: left;\n    padding: 0 22px;\n    color: #515151;\n    cursor: pointer;\n    font-size: 14px; }\n    .nav li:hover {\n      color: #3697ce; }\n\n.test-var h2 {\n  color: red; }\n\n.sp-1 {\n  color: blue; }\n\n.ie-test {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1; }\n\n.outer a {\n  color: #515151; }\n\na {\n  color: red; }\n\n.extend {\n  text-align: center; }\n\n.zhanwei {\n  color: red;\n  height: 50px;\n  line-height: 50px; }\n\n.test-mixin {\n  opacity: 0.5;\n  background-color: red; }\n\n.test-mixin-args {\n  opacity: 0.5;\n  background-color: blue; }\n\n.test-mixin-2 {\n  opacity: 0.5;\n  background-color: red;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Njc3Mvc3ByaXRlLnNjc3MiLCJwYWdlc1xcc2Nzc1xcaGVsbG8tc2Nzcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7RUFZRTtBQTZCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXlCRTtBQTJCRjs7Ozs7RUFLRTtBQ2hHRjtFQUNJLGtHQUM2RCxFQUNoRTs7QUFFRDtFQUNJLFdBQVcsRUFDZDs7QUFFRDtFQUNJLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWUsRUE2QmxCO0VBakNEO0lEd0VFLHlDQUF1QjtJQUx2QiwrQkE1QzJCO0lBa0MzQixhQWxDa0M7SUFzQ2xDLGFBdEN3QztJQ2ZsQyxZQUFZO0lBQ1osaUJBQWlCLEVBQ3BCO0VBVkw7SUFhUSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCLEVBQ3BCO0VBbEJMO0lBcUJRLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFJbkI7SUFoQ0w7TUE4QlksZUFBVSxFQUNiOztBQUlUO0VBRVEsV0FIRSxFQUlMOztBQU9MO0VBQ0ksWUFBWSxFQUNmOztBQUVEO0VBQ0ksc0JBQXNCO0dBQ3RCLGdCQUFpQjtHQUNqQixRQUFRLEVBQ1g7O0FBR0Q7RUFFUSxlQUFlLEVBQ2xCOztBQUNRO0VBQ0wsV0FBVyxFQUNkOztBQUlMO0VBRUksbUJBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0IsRUFDckI7O0FBUUQ7RUFISSxhQUFpQjtFQUNqQixzQkFGb0MsRUFNdkM7O0FBRUQ7RUFQSSxhQUFpQjtFQUNqQix1QkFPK0IsRUFDbEM7O0FBQ0Q7RUFWSSxhQUFpQjtFQUNqQixzQkFGb0M7RUFhcEMsbUJBQW1CLEVBQ3RCIiwiZmlsZSI6ImhlbGxvLXNjc3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5TQ1NTIHZhcmlhYmxlcyBhcmUgaW5mb3JtYXRpb24gYWJvdXQgaWNvbidzIGNvbXBpbGVkIHN0YXRlLCBzdG9yZWQgdW5kZXIgaXRzIG9yaWdpbmFsIGZpbGUgbmFtZVxuXG4uaWNvbi1ob21lIHtcbiAgd2lkdGg6ICRpY29uLWhvbWUtd2lkdGg7XG59XG5cblRoZSBsYXJnZSBhcnJheS1saWtlIHZhcmlhYmxlcyBjb250YWluIGFsbCBpbmZvcm1hdGlvbiBhYm91dCBhIHNpbmdsZSBpY29uXG4kaWNvbi1ob21lOiB4IHkgb2Zmc2V0X3ggb2Zmc2V0X3kgd2lkdGggaGVpZ2h0IHRvdGFsX3dpZHRoIHRvdGFsX2hlaWdodCBpbWFnZV9wYXRoO1xuXG5BdCB0aGUgYm90dG9tIG9mIHRoaXMgc2VjdGlvbiwgd2UgcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc3ByaXRlc2hlZXQgaXRzZWxmXG4kc3ByaXRlc2hlZXQ6IHdpZHRoIGhlaWdodCBpbWFnZSAkc3ByaXRlc2hlZXQtc3ByaXRlcztcbiovXG4kdXNlci1pY29uLW5hbWU6ICd1c2VyLWljb24nO1xuJHVzZXItaWNvbi14OiAxMzVweDtcbiR1c2VyLWljb24teTogMHB4O1xuJHVzZXItaWNvbi1vZmZzZXQteDogLTEzNXB4O1xuJHVzZXItaWNvbi1vZmZzZXQteTogMHB4O1xuJHVzZXItaWNvbi13aWR0aDogMjJweDtcbiR1c2VyLWljb24taGVpZ2h0OiAyMnB4O1xuJHVzZXItaWNvbi10b3RhbC13aWR0aDogMTU3cHg7XG4kdXNlci1pY29uLXRvdGFsLWhlaWdodDogNjJweDtcbiR1c2VyLWljb24taW1hZ2U6ICcuLi9pbWcvc3ByaXRlLnBuZyc7XG4kdXNlci1pY29uOiAoMTM1cHgsIDBweCwgLTEzNXB4LCAwcHgsIDIycHgsIDIycHgsIDE1N3B4LCA2MnB4LCAnLi4vaW1nL3Nwcml0ZS5wbmcnLCAndXNlci1pY29uJywgKTtcbiRsb2dvLW5hbWU6ICdsb2dvJztcbiRsb2dvLXg6IDBweDtcbiRsb2dvLXk6IDQycHg7XG4kbG9nby1vZmZzZXQteDogMHB4O1xuJGxvZ28tb2Zmc2V0LXk6IC00MnB4O1xuJGxvZ28td2lkdGg6IDExNXB4O1xuJGxvZ28taGVpZ2h0OiAyMHB4O1xuJGxvZ28tdG90YWwtd2lkdGg6IDE1N3B4O1xuJGxvZ28tdG90YWwtaGVpZ2h0OiA2MnB4O1xuJGxvZ28taW1hZ2U6ICcuLi9pbWcvc3ByaXRlLnBuZyc7XG4kbG9nbzogKDBweCwgNDJweCwgMHB4LCAtNDJweCwgMTE1cHgsIDIwcHgsIDE1N3B4LCA2MnB4LCAnLi4vaW1nL3Nwcml0ZS5wbmcnLCAnbG9nbycsICk7XG4kc3ByaXRlc2hlZXQtd2lkdGg6IDE1N3B4O1xuJHNwcml0ZXNoZWV0LWhlaWdodDogNjJweDtcbiRzcHJpdGVzaGVldC1pbWFnZTogJy4uL2ltZy9zcHJpdGUucG5nJztcbiRzcHJpdGVzaGVldC1zcHJpdGVzOiAoJHVzZXItaWNvbiwgJGxvZ28sICk7XG4kc3ByaXRlc2hlZXQ6ICgxNTdweCwgNjJweCwgJy4uL2ltZy9zcHJpdGUucG5nJywgJHNwcml0ZXNoZWV0LXNwcml0ZXMsICk7XG5cbi8qXG5UaGUgcHJvdmlkZWQgbWl4aW5zIGFyZSBpbnRlbmRlZCB0byBiZSB1c2VkIHdpdGggdGhlIGFycmF5LWxpa2UgdmFyaWFibGVzXG5cbi5pY29uLWhvbWUge1xuICBAaW5jbHVkZSBzcHJpdGUtd2lkdGgoJGljb24taG9tZSk7XG59XG5cbi5pY29uLWVtYWlsIHtcbiAgQGluY2x1ZGUgc3ByaXRlKCRpY29uLWVtYWlsKTtcbn1cblxuRXhhbXBsZSB1c2FnZSBpbiBIVE1MOlxuXG5gZGlzcGxheTogYmxvY2tgIHNwcml0ZTpcbjxkaXYgY2xhc3M9XCJpY29uLWhvbWVcIj48L2Rpdj5cblxuVG8gY2hhbmdlIGBkaXNwbGF5YCAoZS5nLiBgZGlzcGxheTogaW5saW5lLWJsb2NrO2ApLCB3ZSBzdWdnZXN0IHVzaW5nIGEgY29tbW9uIENTUyBjbGFzczpcblxuLy8gQ1NTXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLy8gSFRNTFxuPGkgY2xhc3M9XCJpY29uIGljb24taG9tZVwiPjwvaT5cbiovXG5AbWl4aW4gc3ByaXRlLXdpZHRoKCRzcHJpdGUpIHtcbiAgd2lkdGg6IG50aCgkc3ByaXRlLCA1KTtcbn1cblxuQG1peGluIHNwcml0ZS1oZWlnaHQoJHNwcml0ZSkge1xuICBoZWlnaHQ6IG50aCgkc3ByaXRlLCA2KTtcbn1cblxuQG1peGluIHNwcml0ZS1wb3NpdGlvbigkc3ByaXRlKSB7XG4gICRzcHJpdGUtb2Zmc2V0LXg6IG50aCgkc3ByaXRlLCAzKTtcbiAgJHNwcml0ZS1vZmZzZXQteTogbnRoKCRzcHJpdGUsIDQpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkc3ByaXRlLW9mZnNldC14ICAkc3ByaXRlLW9mZnNldC15O1xufVxuXG5AbWl4aW4gc3ByaXRlLWltYWdlKCRzcHJpdGUpIHtcbiAgJHNwcml0ZS1pbWFnZTogbnRoKCRzcHJpdGUsIDkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoI3skc3ByaXRlLWltYWdlfSk7XG59XG5cbkBtaXhpbiBzcHJpdGUoJHNwcml0ZSkge1xuICBAaW5jbHVkZSBzcHJpdGUtaW1hZ2UoJHNwcml0ZSk7XG4gIEBpbmNsdWRlIHNwcml0ZS1wb3NpdGlvbigkc3ByaXRlKTtcbiAgQGluY2x1ZGUgc3ByaXRlLXdpZHRoKCRzcHJpdGUpO1xuICBAaW5jbHVkZSBzcHJpdGUtaGVpZ2h0KCRzcHJpdGUpO1xufVxuXG4vKlxuVGhlIGBzcHJpdGVzYCBtaXhpbiBnZW5lcmF0ZXMgaWRlbnRpY2FsIG91dHB1dCB0byB0aGUgQ1NTIHRlbXBsYXRlXG4gIGJ1dCBjYW4gYmUgb3ZlcnJpZGRlbiBpbnNpZGUgb2YgU0NTU1xuXG5AaW5jbHVkZSBzcHJpdGVzKCRzcHJpdGVzaGVldC1zcHJpdGVzKTtcbiovXG5AbWl4aW4gc3ByaXRlcygkc3ByaXRlcykge1xuICBAZWFjaCAkc3ByaXRlIGluICRzcHJpdGVzIHtcbiAgICAkc3ByaXRlLW5hbWU6IG50aCgkc3ByaXRlLCAxMCk7XG4gICAgLiN7JHNwcml0ZS1uYW1lfSB7XG4gICAgICBAaW5jbHVkZSBzcHJpdGUoJHNwcml0ZSk7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiLi9zcHJpdGUuc2Nzc1wiO1xuXG5ib2R5e1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsVGFob21hLEFyaWFsLFxuICAgIFwiSGlyYWdpbm8gU2FucyBHQlwiLFwiTWljcm9zb2Z0IFlhSGVpXCIsU2ltU3VuLEhlaXRpLHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4ubmF2IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogODJweDtcbiAgICB3aWR0aDogMTI0MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLmxvZ28ge1xuICAgICAgICBAaW5jbHVkZSBzcHJpdGUoJGxvZ28pO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAwIDIycHg7XG4gICAgICAgIGNvbG9yOiByZ2IoODEsODEsODEpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDU0LDE1MSwyMDYpO1xuICAgICAgICB9XG4gICAgfVxufVxuJGNvbG9yOnJlZDtcbi50ZXN0LXZhcntcbiAgICBoMntcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICB9XG59XG4kY29sb3I6ICNlZmVmZWY7XG4vL+WPmOmHj+S9nOeUqOWfn+aYr+WFqOWxgOeahO+8jOS4gOe7j+S/ruaUue+8jOWwseimgeWujOibi+S6huOAglxuXG4vL+eJueauiuWPmOmHj1xuJGluZGV4OjE7XG4uc3AtI3skaW5kZXh9e1xuICAgIGNvbG9yOiBibHVlO1xufVxuXG4uaWUtdGVzdHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgKmRpc3BsYXk6IGlubGluZTtcbiAgICAqem9vbToxO1xufVxuXG4vL0BhdC1yb2906Lez5Ye65omA5pyJ55qE5bWM5aWXXG4ub3V0ZXJ7XG4gICAgYXtcbiAgICAgICAgY29sb3I6ICM1MTUxNTE7XG4gICAgfVxuICAgIEBhdC1yb290IGF7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxufVxuXG4vL+e7p+aJv0BleHRlbmRcbi5leHRlbmR7XG4gICAgQGV4dGVuZCBoMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vLyDljaDkvY3pgInmi6nlmajvvIzkuI3ooqvosIPnlKjkuI3ooqvop6PmnpBcbiVyMXtcbiAgICBjb2xvcjogcmVkO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbn1cbi56aGFud2Vpe1xuICAgIEBleHRlbmQgJXIxO1xufVxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHk6NTAsJGJnLWNvbG9yOnJlZCkge1xuICAgIG9wYWNpdHk6ICRvcGFjaXR5IC8gMTAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbn1cbi50ZXN0LW1peGlue1xuICAgIEBpbmNsdWRlIG9wYWNpdHk7XG59XG4kYmctY29sb3I6eWVsbG93O1xuLnRlc3QtbWl4aW4tYXJnc3tcbiAgICBAaW5jbHVkZSBvcGFjaXR5KCRiZy1jb2xvcjpibHVlKTtcbn1cbi50ZXN0LW1peGluLTJ7XG4gICAgQGluY2x1ZGUgb3BhY2l0eTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iXX0= */"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/sprite-7aeee3e9f729ad18b5787b2cc12c43f9.png";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=hello-scss.js.map