(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CrudComponent.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CrudComponent.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      titulo: "CRUD con Vue 2",
      tareas: [],
      nuevaTarea: ""
    };
  },
  methods: {
    agregarTarea: function agregarTarea() {
      if (this.nuevaTarea.trim() !== "") {
        this.tareas.push({
          id: Date.now(),
          nombre: this.nuevaTarea,
          estado: "pendiente"
        });
        this.nuevaTarea = "";
      }
    },
    switchTarea: function switchTarea(index) {
      this.tareas[index].estado = this.tareas[index].estado === "pendiente" ? "completada" : "pendiente";
    },
    eliminarTarea: function eliminarTarea(index) {
      this.tareas.splice(index, 1);
      console.log("Quedan ".concat(this.tareas.length, " tareas."));
    }
  },
  computed: {
    color: function color() {
      return {
        'btn btn-success': this.tareas.length <= 3,
        'btn btn-warning': this.tareas.length > 3 && this.tareas.length <= 6,
        'btn btn-danger': this.tareas.length > 6
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CrudComponent.vue?vue&type=template&id=768f9b84&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CrudComponent.vue?vue&type=template&id=768f9b84&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h1", [_vm._v(_vm._s(_vm.titulo))]), _vm._v(" "), _c("a-space", {
    staticStyle: {
      width: "100%"
    },
    attrs: {
      direction: "vertical",
      size: "large"
    }
  }, [_c("a-input", {
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.agregarTarea.apply(null, arguments);
      }
    },
    model: {
      value: _vm.nuevaTarea,
      callback: function callback($$v) {
        _vm.nuevaTarea = $$v;
      },
      expression: "nuevaTarea"
    }
  }), _vm._v(" "), _c("a-button", {
    attrs: {
      type: "primary"
    },
    on: {
      click: _vm.agregarTarea
    }
  }, [_vm._v("Primary Button")]), _vm._v(" "), _vm._l(_vm.tareas, function (tarea, index) {
    return _c("div", {
      key: tarea.id,
      staticClass: "d-flex flex-row bd-highlight mb-3"
    }, [_c("a-alert", {
      staticStyle: {
        width: "50%"
      },
      attrs: {
        message: tarea.nombre + " " + tarea.estado,
        type: "success"
      }
    }), _vm._v(" "), _c("button", {
      "class": _vm.color,
      on: {
        click: function click($event) {
          return _vm.switchTarea(index);
        }
      }
    }, [_vm._v("Switch")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-danger",
      on: {
        click: function click($event) {
          return _vm.eliminarTarea(index);
        }
      }
    }, [_vm._v("Eliminar")])], 1);
  })], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CrudComponent.vue?vue&type=style&index=0&id=768f9b84&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CrudComponent.vue?vue&type=style&index=0&id=768f9b84&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/* Estilos específicos para este componente */\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CrudComponent.vue?vue&type=style&index=0&id=768f9b84&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CrudComponent.vue?vue&type=style&index=0&id=768f9b84&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CrudComponent.vue?vue&type=style&index=0&id=768f9b84&scoped=true&lang=css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CrudComponent.vue?vue&type=style&index=0&id=768f9b84&scoped=true&lang=css");

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

/***/ "./resources/js/components/CrudComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/CrudComponent.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CrudComponent_vue_vue_type_template_id_768f9b84_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrudComponent.vue?vue&type=template&id=768f9b84&scoped=true */ "./resources/js/components/CrudComponent.vue?vue&type=template&id=768f9b84&scoped=true");
/* harmony import */ var _CrudComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CrudComponent.vue?vue&type=script&lang=js */ "./resources/js/components/CrudComponent.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _CrudComponent_vue_vue_type_style_index_0_id_768f9b84_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CrudComponent.vue?vue&type=style&index=0&id=768f9b84&scoped=true&lang=css */ "./resources/js/components/CrudComponent.vue?vue&type=style&index=0&id=768f9b84&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CrudComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CrudComponent_vue_vue_type_template_id_768f9b84_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _CrudComponent_vue_vue_type_template_id_768f9b84_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "768f9b84",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CrudComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CrudComponent.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/CrudComponent.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CrudComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CrudComponent.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CrudComponent.vue?vue&type=style&index=0&id=768f9b84&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/CrudComponent.vue?vue&type=style&index=0&id=768f9b84&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudComponent_vue_vue_type_style_index_0_id_768f9b84_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CrudComponent.vue?vue&type=style&index=0&id=768f9b84&scoped=true&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CrudComponent.vue?vue&type=style&index=0&id=768f9b84&scoped=true&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudComponent_vue_vue_type_style_index_0_id_768f9b84_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudComponent_vue_vue_type_style_index_0_id_768f9b84_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudComponent_vue_vue_type_style_index_0_id_768f9b84_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudComponent_vue_vue_type_style_index_0_id_768f9b84_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/CrudComponent.vue?vue&type=template&id=768f9b84&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/CrudComponent.vue?vue&type=template&id=768f9b84&scoped=true ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudComponent_vue_vue_type_template_id_768f9b84_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./CrudComponent.vue?vue&type=template&id=768f9b84&scoped=true */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CrudComponent.vue?vue&type=template&id=768f9b84&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudComponent_vue_vue_type_template_id_768f9b84_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudComponent_vue_vue_type_template_id_768f9b84_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);