(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TrainedComponent.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TrainedComponent.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

//v-bind para usar variables de javascript en el template

/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'TrainedComponent',
  setup: function setup(__props) {
    var message = 'Vue dinamico 3';
    var arraynumeros = ['red', 'blue', 3, 4, 5];
    var activo = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])(true);
    var count = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    var arrayFrutas = [{
      name: "Manzana",
      price: "$1.00",
      description: "Una manzana",
      stock: 0
    }, {
      name: "Pera",
      price: "$2.00",
      description: "Una pera",
      stock: 10
    }, {
      name: "Naranja",
      price: "$3.00",
      description: "Una naranja",
      stock: 20
    }];
    var frutasobject = {
      manzana: {
        name: "Manzana",
        price: "$1.00",
        description: "Una manzana",
        stock: 20
      },
      banana: {
        name: "Banana",
        price: "$0.50",
        description: "Una banana",
        stock: 30
      },
      pera: {
        name: "Pera",
        price: "$2.00",
        description: "Una pera",
        stock: 0
      },
      naranja: {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
        stock: 5
      }
    };
    var activar = function activar() {
      activo.value = !activo.value;
      console.log('test' + activo);
    };
    var aumentar = function aumentar() {
      count.value++;
    };
    var disminuir = function disminuir() {
      count.value--;
    };
    var reset = function reset() {
      count.value = 0;
    };
    var numeros = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])([]);
    var classComputed = Object(vue__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
      if (count.value < 0) {
        return 'red';
      } else if (count.value > 0) {
        return 'green';
      } else {
        return 'black';
      }
    });
    var add = function add(x) {
      numeros.value.push(x);
    };
    var disabled = Object(vue__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
      if (numeros.value.includes(count.value)) {
        console.log(count);
        console.log(count.value);
        return true;
      } else {
        return false;
      }
    });
    return {
      __sfc: true,
      message: message,
      arraynumeros: arraynumeros,
      activo: activo,
      count: count,
      arrayFrutas: arrayFrutas,
      frutasobject: frutasobject,
      activar: activar,
      aumentar: aumentar,
      disminuir: disminuir,
      reset: reset,
      numeros: numeros,
      classComputed: classComputed,
      add: add,
      disabled: disabled
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TrainedComponent.vue?vue&type=template&id=e51af8fe":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TrainedComponent.vue?vue&type=template&id=e51af8fe ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", [_c("h1", {
    style: "color: ".concat(_setup.arraynumeros[1])
  }, [_vm._v(_vm._s(_setup.message))]), _vm._v(" "), _c("h2", [_vm._v(_vm._s(_setup.arraynumeros[1]))]), _vm._v(" "), _setup.activo === true ? _c("p", [_vm._v("switch activo")]) : _setup.activo === false ? _c("p", [_vm._v("switch desactivo")]) : _c("p", [_vm._v("switch nulo")]), _vm._v(" "), _c("ul", _vm._l(_setup.arraynumeros, function (numero, index) {
    return _c("li", {
      key: index
    }, [_vm._v(_vm._s("".concat(numero, " con el indice ").concat(index)))]);
  }), 0), _vm._v(" "), _c("ul", _vm._l(_setup.arrayFrutas, function (frutas) {
    return _c("li", [_c("ul", _vm._l(frutas, function (fruta) {
      return _c("li", [_vm._v("\n                    " + _vm._s(fruta) + "\n                ")]);
    }), 0)]);
  }), 0), _vm._v(" "), _vm._l(_setup.frutasobject, function (valor, propiedad, index) {
    return [_c("li", [_vm._v(_vm._s(valor.description))])];
  }), _vm._v(" "), _c("button", {
    on: {
      click: _setup.activar
    }
  }, [_vm._v("activar")]), _vm._v("\n    //si el count es menor a cero style color es rojo si es mayor a cero es verde\n    "), _c("p", {
    style: "color : " + _setup.classComputed
  }, [_vm._v(_vm._s(_setup.count))]), _vm._v(" "), _c("button", {
    on: {
      click: _setup.aumentar
    }
  }, [_vm._v("aumentar")]), _vm._v(" "), _c("button", {
    on: {
      click: _setup.disminuir
    }
  }, [_vm._v("disminuir")]), _vm._v(" "), _c("button", {
    on: {
      click: _setup.reset
    }
  }, [_vm._v("reset")]), _vm._v(" "), _c("button", {
    attrs: {
      disabled: _setup.disabled
    },
    on: {
      click: function click($event) {
        return _setup.add(_setup.count);
      }
    }
  }, [_vm._v("add")]), _vm._v(" "), _c("ul", _vm._l(_setup.numeros, function (numero) {
    return _c("li", [_vm._v(_vm._s(numero))]);
  }), 0)], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/TrainedComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/TrainedComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrainedComponent_vue_vue_type_template_id_e51af8fe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrainedComponent.vue?vue&type=template&id=e51af8fe */ "./resources/js/components/TrainedComponent.vue?vue&type=template&id=e51af8fe");
/* harmony import */ var _TrainedComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrainedComponent.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/TrainedComponent.vue?vue&type=script&setup=true&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TrainedComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrainedComponent_vue_vue_type_template_id_e51af8fe__WEBPACK_IMPORTED_MODULE_0__["render"],
  _TrainedComponent_vue_vue_type_template_id_e51af8fe__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TrainedComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TrainedComponent.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/TrainedComponent.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrainedComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TrainedComponent.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TrainedComponent.vue?vue&type=script&setup=true&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrainedComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TrainedComponent.vue?vue&type=template&id=e51af8fe":
/*!************************************************************************************!*\
  !*** ./resources/js/components/TrainedComponent.vue?vue&type=template&id=e51af8fe ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TrainedComponent_vue_vue_type_template_id_e51af8fe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./TrainedComponent.vue?vue&type=template&id=e51af8fe */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TrainedComponent.vue?vue&type=template&id=e51af8fe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TrainedComponent_vue_vue_type_template_id_e51af8fe__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TrainedComponent_vue_vue_type_template_id_e51af8fe__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);