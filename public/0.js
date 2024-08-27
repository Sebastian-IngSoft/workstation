(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AntDesignComponents.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AntDesignComponents.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      visible: false,
      // Estado de visibilidad del modal
      columns: [
      // Columnas de la tabla
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
      }],
      data: [
      // Datos de la tabla
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park'
      }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park'
      }],
      treeData: [
      // Datos del árbol
      {
        title: 'parent 1',
        key: '0-0',
        children: [{
          title: 'child 1',
          key: '0-0-0',
          children: [{
            title: 'leaf',
            key: '0-0-0-0'
          }, {
            title: 'leaf',
            key: '0-0-0-1'
          }]
        }, {
          title: 'child 2',
          key: '0-0-1',
          children: [{
            title: 'leaf',
            key: '0-0-1-0'
          }]
        }]
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AntDesignComponents.vue?vue&type=template&id=795ac3e0&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AntDesignComponents.vue?vue&type=template&id=795ac3e0&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("a-button", {
    attrs: {
      type: "primary"
    }
  }, [_vm._v("Primary Button")]), _vm._v(" "), _c("a-date-picker"), _vm._v(" "), _c("a-input", {
    attrs: {
      placeholder: "Basic usage"
    }
  }), _vm._v(" "), _c("a-table", {
    attrs: {
      columns: _vm.columns,
      dataSource: _vm.data
    }
  }), _vm._v(" "), _c("a-modal", {
    attrs: {
      title: "Basic Modal"
    },
    model: {
      value: _vm.visible,
      callback: function callback($$v) {
        _vm.visible = $$v;
      },
      expression: "visible"
    }
  }, [_c("p", [_vm._v("Some contents...")])]), _vm._v(" "), _c("a-form", [_c("a-form-item", {
    attrs: {
      label: "Select"
    }
  }, [_c("a-select", [_c("a-select-option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Option 1")]), _vm._v(" "), _c("a-select-option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Option 2")])], 1)], 1), _vm._v(" "), _c("a-form-item", {
    attrs: {
      label: "Checkbox"
    }
  }, [_c("a-checkbox", [_vm._v("Checkbox")])], 1), _vm._v(" "), _c("a-form-item", {
    attrs: {
      label: "Radio"
    }
  }, [_c("a-radio-group", [_c("a-radio", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Radio 1")]), _vm._v(" "), _c("a-radio", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Radio 2")])], 1)], 1), _vm._v(" "), _c("a-form-item", {
    attrs: {
      label: "Switch"
    }
  }, [_c("a-switch")], 1), _vm._v(" "), _c("a-form-item", {
    attrs: {
      label: "Slider"
    }
  }, [_c("a-slider")], 1), _vm._v(" "), _c("a-form-item", {
    attrs: {
      label: "Upload"
    }
  }, [_c("a-upload", [_c("a-button", [_c("a-icon", {
    attrs: {
      type: "upload"
    }
  }), _vm._v(" Click to Upload\n                ")], 1)], 1)], 1)], 1), _vm._v(" "), _c("a-alert", {
    attrs: {
      message: "Success Text",
      type: "success"
    }
  }), _vm._v(" "), _c("a-avatar", {
    attrs: {
      icon: "user"
    }
  }), _vm._v(" "), _c("a-badge", {
    attrs: {
      count: "5"
    }
  }, [_c("a-button", [_vm._v("Badge")])], 1), _vm._v(" "), _c("a-breadcrumb", [_c("a-breadcrumb-item", [_vm._v("Home")]), _vm._v(" "), _c("a-breadcrumb-item", [_vm._v("Application Center")]), _vm._v(" "), _c("a-breadcrumb-item", [_vm._v("Application List")]), _vm._v(" "), _c("a-breadcrumb-item", [_vm._v("An Application")])], 1), _vm._v(" "), _c("a-calendar"), _vm._v(" "), _c("a-card", {
    attrs: {
      title: "Card Title"
    }
  }, [_c("p", [_vm._v("Card content")])]), _vm._v(" "), _c("a-carousel", [_c("div", {
    staticClass: "carousel-item"
  }, [_c("h3", [_vm._v("1")])]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("h3", [_vm._v("2")])]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("h3", [_vm._v("3")])]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("h3", [_vm._v("4")])])]), _vm._v(" "), _c("a-collapse", [_c("a-collapse-panel", {
    key: "1",
    attrs: {
      header: "This is panel header 1"
    }
  }, [_c("p", [_vm._v("Panel content")])])], 1), _vm._v(" "), _c("a-dropdown", [_c("a-button", [_vm._v("\n            Actions "), _c("a-icon", {
    attrs: {
      type: "down"
    }
  })], 1), _vm._v(" "), _c("a-menu", {
    attrs: {
      slot: "overlay"
    },
    slot: "overlay"
  }, [_c("a-menu-item", {
    key: "1"
  }, [_vm._v("1st menu item")]), _vm._v(" "), _c("a-menu-item", {
    key: "2"
  }, [_vm._v("2nd menu item")]), _vm._v(" "), _c("a-menu-item", {
    key: "3"
  }, [_vm._v("3rd menu item")])], 1)], 1), _vm._v(" "), _c("a-pagination", {
    attrs: {
      defaultCurrent: 1,
      total: 50
    }
  }), _vm._v(" "), _c("a-progress", {
    attrs: {
      percent: 50
    }
  }), _vm._v(" "), _c("a-rate"), _vm._v(" "), _c("a-spin"), _vm._v(" "), _c("a-steps", {
    attrs: {
      current: 1
    }
  }, [_c("a-step", {
    attrs: {
      title: "Step 1"
    }
  }), _vm._v(" "), _c("a-step", {
    attrs: {
      title: "Step 2"
    }
  }), _vm._v(" "), _c("a-step", {
    attrs: {
      title: "Step 3"
    }
  })], 1), _vm._v(" "), _c("a-tabs", [_c("a-tab-pane", {
    key: "1",
    attrs: {
      tab: "Tab 1"
    }
  }, [_vm._v("Content of Tab Pane 1")]), _vm._v(" "), _c("a-tab-pane", {
    key: "2",
    attrs: {
      tab: "Tab 2"
    }
  }, [_vm._v("Content of Tab Pane 2")]), _vm._v(" "), _c("a-tab-pane", {
    key: "3",
    attrs: {
      tab: "Tab 3"
    }
  }, [_vm._v("Content of Tab Pane 3")])], 1), _vm._v(" "), _c("a-tooltip", {
    attrs: {
      title: "prompt text"
    }
  }, [_c("a-button", [_vm._v("Tooltip")])], 1), _vm._v(" "), _c("a-tree", {
    attrs: {
      treeData: _vm.treeData
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AntDesignComponents.vue?vue&type=style&index=0&id=795ac3e0&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AntDesignComponents.vue?vue&type=style&index=0&id=795ac3e0&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.carousel-item[data-v-795ac3e0] {\r\n    height: 160px;\r\n    color: #fff;\r\n    line-height: 160px;\r\n    text-align: center;\r\n    background: #364d79;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AntDesignComponents.vue?vue&type=style&index=0&id=795ac3e0&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AntDesignComponents.vue?vue&type=style&index=0&id=795ac3e0&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AntDesignComponents.vue?vue&type=style&index=0&id=795ac3e0&scoped=true&lang=css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AntDesignComponents.vue?vue&type=style&index=0&id=795ac3e0&scoped=true&lang=css");

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

/***/ "./resources/js/components/AntDesignComponents.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/AntDesignComponents.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AntDesignComponents_vue_vue_type_template_id_795ac3e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AntDesignComponents.vue?vue&type=template&id=795ac3e0&scoped=true */ "./resources/js/components/AntDesignComponents.vue?vue&type=template&id=795ac3e0&scoped=true");
/* harmony import */ var _AntDesignComponents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AntDesignComponents.vue?vue&type=script&lang=js */ "./resources/js/components/AntDesignComponents.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _AntDesignComponents_vue_vue_type_style_index_0_id_795ac3e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AntDesignComponents.vue?vue&type=style&index=0&id=795ac3e0&scoped=true&lang=css */ "./resources/js/components/AntDesignComponents.vue?vue&type=style&index=0&id=795ac3e0&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AntDesignComponents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AntDesignComponents_vue_vue_type_template_id_795ac3e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _AntDesignComponents_vue_vue_type_template_id_795ac3e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "795ac3e0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AntDesignComponents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AntDesignComponents.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/AntDesignComponents.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AntDesignComponents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AntDesignComponents.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AntDesignComponents.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AntDesignComponents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AntDesignComponents.vue?vue&type=style&index=0&id=795ac3e0&scoped=true&lang=css":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/AntDesignComponents.vue?vue&type=style&index=0&id=795ac3e0&scoped=true&lang=css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AntDesignComponents_vue_vue_type_style_index_0_id_795ac3e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AntDesignComponents.vue?vue&type=style&index=0&id=795ac3e0&scoped=true&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AntDesignComponents.vue?vue&type=style&index=0&id=795ac3e0&scoped=true&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AntDesignComponents_vue_vue_type_style_index_0_id_795ac3e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AntDesignComponents_vue_vue_type_style_index_0_id_795ac3e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AntDesignComponents_vue_vue_type_style_index_0_id_795ac3e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AntDesignComponents_vue_vue_type_style_index_0_id_795ac3e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/AntDesignComponents.vue?vue&type=template&id=795ac3e0&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/AntDesignComponents.vue?vue&type=template&id=795ac3e0&scoped=true ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AntDesignComponents_vue_vue_type_template_id_795ac3e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./AntDesignComponents.vue?vue&type=template&id=795ac3e0&scoped=true */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AntDesignComponents.vue?vue&type=template&id=795ac3e0&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AntDesignComponents_vue_vue_type_template_id_795ac3e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AntDesignComponents_vue_vue_type_template_id_795ac3e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);