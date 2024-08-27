(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SelectComponent.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SelectComponent.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    content: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    name: {
      type: String,
      "default": 'customer_id'
    }
  },
  data: function data() {
    return {
      selectedValue: null
    };
  },
  methods: {
    getId: function getId(item) {
      var keys = Object.keys(item);
      return item[keys[0]];
    },
    getName: function getName(item) {
      var keys = Object.keys(item);
      return item[keys[1]];
    },
    emitSelectedProduct: function emitSelectedProduct() {
      var _this = this;
      var selectedItem = this.content.find(function (item) {
        return _this.getId(item) === _this.selectedValue;
      });
      this.$emit('item-selected', selectedItem);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SelectComponent.vue?vue&type=template&id=54715746":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SelectComponent.vue?vue&type=template&id=54715746 ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("a-select", {
    on: {
      change: _vm.emitSelectedProduct
    },
    model: {
      value: _vm.selectedValue,
      callback: function callback($$v) {
        _vm.selectedValue = $$v;
      },
      expression: "selectedValue"
    }
  }, _vm._l(_vm.content, function (item) {
    return _c("a-select-option", {
      key: _vm.getId(item),
      attrs: {
        value: _vm.getId(item)
      }
    }, [_vm._v("\n            " + _vm._s(_vm.getName(item)) + "\n        ")]);
  }), 1), _vm._v(" "), _c("input", {
    attrs: {
      type: "hidden",
      name: _vm.name
    },
    domProps: {
      value: _vm.selectedValue
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/SelectComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/SelectComponent.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectComponent_vue_vue_type_template_id_54715746__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectComponent.vue?vue&type=template&id=54715746 */ "./resources/js/components/SelectComponent.vue?vue&type=template&id=54715746");
/* harmony import */ var _SelectComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectComponent.vue?vue&type=script&lang=js */ "./resources/js/components/SelectComponent.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SelectComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SelectComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectComponent_vue_vue_type_template_id_54715746__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SelectComponent_vue_vue_type_template_id_54715746__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SelectComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SelectComponent.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/SelectComponent.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SelectComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SelectComponent.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SelectComponent.vue?vue&type=template&id=54715746":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/SelectComponent.vue?vue&type=template&id=54715746 ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectComponent_vue_vue_type_template_id_54715746__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./SelectComponent.vue?vue&type=template&id=54715746 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SelectComponent.vue?vue&type=template&id=54715746");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectComponent_vue_vue_type_template_id_54715746__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectComponent_vue_vue_type_template_id_54715746__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);