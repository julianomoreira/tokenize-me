var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/tokens.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/tokens.js":
/*!***********************!*\
  !*** ./src/tokens.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//import sketch from 'sketch'
var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom"); //var sketch = require('sketch');
// documentation: https://developer.sketchapp.com/reference/api/
// export default function() {
//   sketch.UI.message("It's alive 🙌")
// }
//const getSelectedDocument = require('sketch/dom').getSelectedDocument;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var getSelectedDocument = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument;

  var document = getSelectedDocument();
}); // var Document = sketch.Document
// var page = Document.SelectedPage
//console.log(page);
// export default function(context) {
//   const selectedLayers = context.selection
//   const selectedCount = selectedLayers.length
//   const selectedName = selectedLayers.forEach(function(item){ console.log(item) })
//
//   if (selectedCount === 0) {
//     context.document.showMessage('No layers are selected.')
//   } else {
//     context.document.showMessage(`${selectedCount} layers selected. My name is: ${selectedCount}`)
//   }
//
// }
// export default function(context) {
//   // we use this to get hold of native sketch doc
//
//   //const page = document.SelectedPage
//   const selectedLayers = context.selection
//   const selectedCount = selectedLayers.length
//   const layerName = selectedLayers.forEach(function(item){ console.log(item.name())  })
//   context.document.showMessage(`${layerName}`)
// }
// export default function(context) {
//   // We are passed a context variable when we're run.
//   // We use this to get hold of the native Sketch document and wrap it.
//   const document = sketch.fromNative(context.document)
//
//   // Next we want to extract the selected page of the selected (front-most) document
//   const page = document.selectedPage
//
//   // Now let's create a new text layer, and a traditional value...
//   const layer = new sketch.Text({
//     parent: page,
//     alignment: sketch.Text.Alignment.center,
//     text: 'Hello World',
//   })
//
//   // ...resize it so that the text just fits...
//   layer.adjustToFit()
//
//   // Finally, lets center the view on our new layer
//   // so that we can see where it is.
//   document.centerOnLayer(layer)
// }
// export default (context) => {
//   //const doc = sketch.getSelectedDocument()
//   const selectedLayers = context.selection
//   console.log(selectedLayers)
//   var items = selectedLayers.forEach(function(item){
//       context.document.showMessage(`${item.name()}`)
//   })
// }
// var openPanel = NSOpenPanel.openPanel()
// openPanel.setCanChooseDirectories(false)
// openPanel.setCanChooseFiles(true)
// openPanel.setCanCreateDirectories(true)
// openPanel.setDirectoryURL(NSURL.fileURLWithPath('~/Documents/'))
//
// openPanel.setTitle('Choose a file')
// openPanel.setPrompt('Choose')
// openPanel.runModal()
//
// var newWindow = NSWindow.window()
// var document = sketch.getSelectedDocument()
// var page = document.selectedPage
//
// var artboards = page.layers.filter(function (layer) {
//   return layer.type === "Artboard"
// })
// var page = context.document.addBlankPage();
// page.setName('Whatever you wanna call it');
// var document = sketch.getSelectedDocument()
//var page = document.selectedPage
// page.layer.duplicate()
// const selectedLayers = context.selection
// console.log(document);

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=tokens.js.map