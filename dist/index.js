(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/filters/camelcase.js
const camelcase = Vue => {
  Vue.filter("camelcase", value => {
    if (!value) return;
    return camelcase(value);
  });

  Vue.prototype.$camelcase = value => {
    return camelcase(value);
  };

  function camelcase(value) {
    if (value && isNaN(value)) {
      const splitValue = value.split(/(?=[A-Z])|([0-9]+)/).join(" ");
      const val = value.charAt(0).toUpperCase() + splitValue.substring(1);
      // remove multiple spaces
      return val.replace(/  +/g, " ");
    } else {
      return value;
    }
  }
};

// CONCATENATED MODULE: ./src/filters/capitalize.js
const capitalize = Vue => {
  Vue.filter("capitalize", (value, options) => {
    if (!value) return;
    return capitalize(value, options);
  });

  Vue.prototype.$capitalize = (value, options) => {
    return capitalize(value, options);
  };

  function capitalize(value, options) {
    if (value && isNaN(value)) {
      if (options == "first") {
        value = value.split(" ");
        for (var i = 0; i < value.length; i++) {
          value[i] = value[i][0].toUpperCase() + value[i].substr(1);
        }
        return value.join(" ");
      } else if (!options) {
        return value.toUpperCase();
      }
    }
    return value;
  }
};

// CONCATENATED MODULE: ./src/filters/htmlEntities.js
const htmlEntities = Vue => {
  Vue.filter("htmlEntities", value => {
    if (!value) return;
    return htmlEntities(value);
  });

  Vue.prototype.$htmlEntities = value => {
    return htmlEntities(value);
  };

  function htmlEntities(value) {
    if (value && isNaN(value)) {
      const quote = value.replace(/&quot;/g, '"');
      const quote1 = quote.replace(/&#34;/g, '"');

      const exclamation = quote1.replace(/&excl;/g, "!");
      const exclamation1 = exclamation.replace(/&#33;/g, "!");

      const hash = exclamation1.replace(/&num;/g, "#");
      const hash1 = hash.replace(/&#35;/g, "#");

      const doller = hash1.replace(/&dollar;/g, "$");
      const doller1 = doller.replace(/&#36;/g, "$");

      const percent = doller1.replace(/&percnt;/g, "%");
      const percent1 = percent.replace(/&#37;/g, "%");

      const amp = percent1.replace(/&amp;/g, "%");
      const amp1 = amp.replace(/&#38;/g, "%");

      const apo = amp1.replace(/&apos;/g, "'");
      const apo1 = apo.replace(/&#39;/g, "'");

      const lpar = apo1.replace(/&lpar;/g, "(");
      const lpar1 = lpar.replace(/&#40;/g, "(");

      const rpar = lpar1.replace(/&rpar;/g, ")");
      const rpar1 = rpar.replace(/&#41;/g, ")");

      const ast = rpar1.replace(/&ast;/g, "*");
      const ast1 = ast.replace(/&#42;/g, "*");

      const commat = ast1.replace(/&commat;/g, "@");
      const commat1 = commat.replace(/&#64;/g, "@");

      const space = commat1.replace(/&nbsp;/g, " ");
      const space1 = space.replace(/&#160;/g, " ");

      const copy = space1.replace(/&copy;/g, "©");
      const copy1 = copy.replace(/&#169;/g, "©");

      const pound = copy1.replace(/&pound;/g, "£");
      const pound1 = pound.replace(/&#163;/g, "£");

      const euro = pound1.replace(/&euro;/g, "₤");
      const euro1 = euro.replace(/&#8364;/g, "₤");

      const yen = euro1.replace(/&yen;/g, "¥");
      const yen1 = yen.replace(/&#165;/g, "¥");

      const micro = yen1.replace(/&micro;/g, "μ");
      const micro1 = micro.replace(/&#181;/g, "μ");

      return micro1;
    } else return value;
  }
};

// CONCATENATED MODULE: ./src/filters/decapitalize.js
const decapitalize = Vue => {
  Vue.filter("decapitalize", value => {
    if (!value) return;
    return decapitalize(value);
  });

  Vue.prototype.$decapitalize = value => {
    return decapitalize(value);
  };

  function decapitalize(value) {
    if (value && isNaN(value)) {
      return value.toLowerCase();
    }
    return value;
  }
};

// CONCATENATED MODULE: ./src/filters/replaceAll.js
const replaceAll = (Vue) => {
  Vue.filter('replaceAll', (value, replaceThis, withThis) => {
    if (!value) return;
    return replaceAll(value, replaceThis, withThis);
  });

  Vue.prototype.$replaceAll = (value, replaceThis, withThis) => {
    return replaceAll(value, replaceThis, withThis);
  };

  function replaceAll(value, replaceThis, withThis) {
    if (value && isNaN(value)) {
      const regex = RegExp(replaceThis, 'gi');
      const newValue = value.replace(regex, withThis);
      return newValue;
    } else {
      return value;
    }
  }
};

// CONCATENATED MODULE: ./src/index.js






const vueFiltersCollection = {
  install(Vue, options) {
    camelcase(Vue, options);
    capitalize(Vue, options);
    decapitalize(Vue, options);
    htmlEntities(Vue, options);
    replaceAll(Vue, options);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(vueFiltersCollection);
}

/* harmony default export */ var src = __webpack_exports__["default"] = (vueFiltersCollection);


/***/ })
/******/ ]);
});