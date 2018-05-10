/*! For license information please see LICENSES */
webpackJsonp([4],{"/g97":function(t,e,r){var n=r("4dDm");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("55bca78c",n,!1,{sourceMap:!1})},"0LgO":function(t,e,r){"use strict";var n,o=r("qPzS"),i=(r.n(o),r("O+20")),a=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),u=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.exampleContent="%3Cpre%3E%3Ccode%3Evar%20JoinLogic=%7B%0A%20%20%20%20Table1:%7B%0A%20%20%20%20%20%20%20%20Table:'Orders',%0A%20%20%20%20%20%20%20%20Column:'customerId'%0A%20%20%20%20%7D,%0A%20%20%20%20Join:'inner',%0A%20%20%20%20Table2:%7B%0A%20%20%20%20%20%20%20%20Table:'Customers',%0A%20%20%20%20%20%20%20%20Column:'customerId'%0A%20%20%20%20%7D%0A%7D%0A%0Avar%20Connection%20=%20new%20JsStore.Instance();%0AConnection.openDb(%22Demo%22).select(%7B%0A%20%20%20%20From:%20JoinLogic,%0A%20%20%20%20OnSuccess:function%20(results)%7B%0A%20%20%20%20%20%20%20%20log(results);%0A%20%20%20%20%7D,%0A%20%20%20%20OnError:function%20(error)%20%7B%0A%20%20%20%20%20%20%20%20log(error);%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E",e.title="Simple Join",e}return a(e,t),e=u([Object(o.Component)({components:{Example:i.a}})],e)}(o.Vue);e.a=c},"4dDm":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"#divExampleCode{margin-top:50px;background-color:#f1f1f1;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}#divExampleCode #divResult{margin-top:30px;min-height:200px;background-color:#fff;font-family:sans-serif}#divExampleCode .content-heading{margin-top:20px;font-size:25px}#divExampleCode p{font-size:16px;font-size:1rem}#divExampleCode #btnExecute{float:right;background-color:#00c853}#divExampleCode #btnExecute i{vertical-align:bottom}#divExampleCode #divResult table{width:100%}#divExampleCode #divResult table tr th{text-align:center}#divExampleCode #divResult table tr td{word-break:break-all;text-align:center;border-bottom:1px solid;border-right:1px solid}#divDbInfo table tr td,#divDbInfo table tr th{text-align:center;width:50%;padding:10px 5px}#divDbInfo table tr td:first-child{text-decoration:underline;cursor:pointer}#divDbInfo table caption{background-color:#dd5959;color:#fff;padding:10px 0;margin-bottom:25px}#divCode{margin-top:30px;min-height:200px;font-size:14px}pre{padding:10px 15px}pre code{width:inherit;display:block;background-color:#fff;padding:10px;color:#000}",""])},I8yv:function(t,e,r){(function(t,e){var r;!function(r){!function(n){var o="object"==typeof e?e:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=a(r);function a(t,e){return function(r,n){"function"!=typeof t[r]&&Object.defineProperty(t,r,{configurable:!0,writable:!0,value:n}),e&&e(r,n)}}void 0===o.Reflect?o.Reflect=r:i=a(o.Reflect,i),function(e){var r=Object.prototype.hasOwnProperty,n="function"==typeof Symbol,o=n&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",i=n&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",a="function"==typeof Object.create,u={__proto__:[]}instanceof Array,c=!a&&!u,s={create:a?function(){return I(Object.create(null))}:u?function(){return I({__proto__:null})}:function(){return I({})},has:c?function(t,e){return r.call(t,e)}:function(t,e){return e in t},get:c?function(t,e){return r.call(t,e)?t[e]:void 0}:function(t,e){return t[e]}},p=Object.getPrototypeOf(Function),f="object"==typeof t&&t.env&&"true"===t.env.REFLECT_METADATA_USE_MAP_POLYFILL,l=f||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],r=function(){function t(t,e,r){this._index=0,this._keys=t,this._values=e,this._selector=r}return t.prototype["@@iterator"]=function(){return this},t.prototype[i]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var r=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var r=this._find(t,!0);return this._values[r]=e,this},e.prototype.delete=function(e){var r=this._find(e,!1);if(r>=0){for(var n=this._keys.length,o=r+1;o<n;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new r(this._keys,this._values,n)},e.prototype.values=function(){return new r(this._keys,this._values,o)},e.prototype.entries=function(){return new r(this._keys,this._values,a)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[i]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function o(t,e){return e}function a(t,e){return[t,e]}}():Map,d=f||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new l}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[i]=function(){return this.keys()},t}():Set,_=new(f||"function"!=typeof WeakMap?function(){var t=16,e=s.create(),n=o();return function(){function t(){this._key=o()}return t.prototype.has=function(t){var e=i(t,!1);return void 0!==e&&s.has(e,this._key)},t.prototype.get=function(t){var e=i(t,!1);return void 0!==e?s.get(e,this._key):void 0},t.prototype.set=function(t,e){var r=i(t,!0);return r[this._key]=e,this},t.prototype.delete=function(t){var e=i(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=o()},t}();function o(){var t;do{t="@@WeakMap@@"+u()}while(s.has(e,t));return e[t]=!0,t}function i(t,e){if(!r.call(t,n)){if(!e)return;Object.defineProperty(t,n,{value:s.create()})}return t[n]}function a(t,e){for(var r=0;r<e;++r)t[r]=255*Math.random()|0;return t}function u(){var e=function(t){if("function"==typeof Uint8Array)return"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):a(new Uint8Array(t),t);return a(new Array(t),t)}(t);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var r="",n=0;n<t;++n){var o=e[n];4!==n&&6!==n&&8!==n||(r+="-"),o<16&&(r+="0"),r+=o.toString(16).toLowerCase()}return r}}():WeakMap);function h(t,e,r){var n=_.get(t);if(x(n)){if(!r)return;n=new l,_.set(t,n)}var o=n.get(e);if(x(o)){if(!r)return;o=new l,n.set(e,o)}return o}function y(t,e,r){var n=h(e,r,!1);return!x(n)&&!!n.has(t)}function v(t,e,r){var n=h(e,r,!1);if(!x(n))return n.get(t)}function m(t,e,r,n){var o=h(r,n,!0);o.set(t,e)}function g(t,e){var r=[],n=h(t,e,!1);if(x(n))return r;for(var o=n.keys(),a=function(t){var e=C(t,i);if(!T(e))throw new TypeError;var r=e.call(t);if(!w(r))throw new TypeError;return r}(o),u=0;;){var c=k(a);if(!c)return r.length=u,r;var s=c.value;try{r[u]=s}catch(t){try{j(a)}finally{throw t}}u++}}function b(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function x(t){return void 0===t}function N(t){return null===t}function w(t){return"object"==typeof t?null!==t:"function"==typeof t}function E(t,e){switch(b(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var r=3===e?"string":5===e?"number":"default",n=C(t,o);if(void 0!==n){var i=n.call(t,r);if(w(i))throw new TypeError;return i}return function(t,e){if("string"===e){var r=t.toString;if(T(r)){var n=r.call(t);if(!w(n))return n}var o=t.valueOf;if(T(o)){var n=o.call(t);if(!w(n))return n}}else{var o=t.valueOf;if(T(o)){var n=o.call(t);if(!w(n))return n}var i=t.toString;if(T(i)){var n=i.call(t);if(!w(n))return n}}throw new TypeError}(t,"default"===r?"number":r)}function D(t){var e=E(t,3);return"symbol"==typeof e?e:function(t){return""+t}(e)}function O(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function T(t){return"function"==typeof t}function P(t){return"function"==typeof t}function C(t,e){var r=t[e];if(void 0!==r&&null!==r){if(!T(r))throw new TypeError;return r}}function k(t){var e=t.next();return!e.done&&e}function j(t){var e=t.return;e&&e.call(t)}function A(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===p)return e;if(e!==p)return e;var r=t.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return e;var o=n.constructor;return"function"!=typeof o?e:o===t?e:o}function I(t){return t.__=void 0,delete t.__,t}e("decorate",function(t,e,r,n){if(x(r)){if(!O(t))throw new TypeError;if(!P(e))throw new TypeError;return function(t,e){for(var r=t.length-1;r>=0;--r){var n=t[r],o=n(e);if(!x(o)&&!N(o)){if(!P(o))throw new TypeError;e=o}}return e}(t,e)}if(!O(t))throw new TypeError;if(!w(e))throw new TypeError;if(!w(n)&&!x(n)&&!N(n))throw new TypeError;return N(n)&&(n=void 0),r=D(r),function(t,e,r,n){for(var o=t.length-1;o>=0;--o){var i=t[o],a=i(e,r,n);if(!x(a)&&!N(a)){if(!w(a))throw new TypeError;n=a}}return n}(t,e,r,n)}),e("metadata",function(t,e){return function(r,n){if(!w(r))throw new TypeError;if(!x(n)&&!function(t){switch(b(t)){case 3:case 4:return!0;default:return!1}}(n))throw new TypeError;m(t,e,r,n)}}),e("defineMetadata",function(t,e,r,n){if(!w(r))throw new TypeError;x(n)||(n=D(n));return m(t,e,r,n)}),e("hasMetadata",function(t,e,r){if(!w(e))throw new TypeError;x(r)||(r=D(r));return function t(e,r,n){var o=y(e,r,n);if(o)return!0;var i=A(r);if(!N(i))return t(e,i,n);return!1}(t,e,r)}),e("hasOwnMetadata",function(t,e,r){if(!w(e))throw new TypeError;x(r)||(r=D(r));return y(t,e,r)}),e("getMetadata",function(t,e,r){if(!w(e))throw new TypeError;x(r)||(r=D(r));return function t(e,r,n){var o=y(e,r,n);if(o)return v(e,r,n);var i=A(r);if(!N(i))return t(e,i,n);return}(t,e,r)}),e("getOwnMetadata",function(t,e,r){if(!w(e))throw new TypeError;x(r)||(r=D(r));return v(t,e,r)}),e("getMetadataKeys",function(t,e){if(!w(t))throw new TypeError;x(e)||(e=D(e));return function t(e,r){var n=g(e,r);var o=A(e);if(null===o)return n;var i=t(o,r);if(i.length<=0)return n;if(n.length<=0)return i;var a=new d;var u=[];for(var c=0,s=n;c<s.length;c++){var p=s[c],f=a.has(p);f||(a.add(p),u.push(p))}for(var l=0,_=i;l<_.length;l++){var p=_[l],f=a.has(p);f||(a.add(p),u.push(p))}return u}(t,e)}),e("getOwnMetadataKeys",function(t,e){if(!w(t))throw new TypeError;x(e)||(e=D(e));return g(t,e)}),e("deleteMetadata",function(t,e,r){if(!w(e))throw new TypeError;x(r)||(r=D(r));var n=h(e,r,!1);if(x(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var o=_.get(e);return o.delete(r),o.size>0||(_.delete(e),!0)})}(i)}()}(r||(r={}))}).call(e,r("W2nU"),r("DuR2"))},K2nM:function(t,e,r){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("Example",{attrs:{innerHtml:this.exampleContent,pageTitle:this.title}})};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},"O+20":function(t,e,r){"use strict";var n=r("TpTd"),o=r("yjPv"),i=!1;var a=function(t){i||r("/g97")},u=r("VU/8")(n.a,o.a,!1,a,null,null);u.options.__file="code\\components\\example.vue",e.a=u.exports},PLHH:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("0LgO"),o=r("K2nM"),i=r("VU/8")(n.a,o.a,!1,null,null,null);i.options.__file="code\\pages\\v1\\example\\simple_join.vue",e.default=i.exports},TpTd:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_nuxt_property_decorator__=__webpack_require__("qPzS"),__WEBPACK_IMPORTED_MODULE_0_nuxt_property_decorator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nuxt_property_decorator__),__WEBPACK_IMPORTED_MODULE_1__service_demo_db_service__=__webpack_require__("tqNX"),__WEBPACK_IMPORTED_MODULE_2__common_var__=__webpack_require__("kPbQ"),__extends=this&&this.__extends||(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}extendStatics(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),extendStatics,__decorate=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},codeInitTime,isJoin=!1,Example=function(_super){function Example(){var t=_super.call(this)||this;return t.isEditorLoading=!0,t.dbInfo=[],t.version=2,t.catchEvents(),t}return __extends(Example,_super),Example.prototype.mounted=function(){var t=this;this.version=this.getVersion(),JsStore.enableLog(),(new __WEBPACK_IMPORTED_MODULE_1__service_demo_db_service__.a).createDemoDataBase().then(function(e){t.isEditorLoading=!1,t.dbInfo=e,document.getElementById("btnExecute").removeAttribute("disabled")}).catch(function(t){console.log(t)})},Example.prototype.catchEvents=function(){__WEBPACK_IMPORTED_MODULE_2__common_var__.a.$on("version_change",this.onVersionChange)},Example.prototype.getVersion=function(){return this.$route.path.indexOf("v1")>=0?1:2},Example.prototype.onVersionChange=function(t){this.version=t;var e=this.$route.path,r=this.getRelativeUrl_()+e.split("/").reverse()[0];this.$router.push(r)},Example.prototype.getRelativeUrl_=function(){switch(this.version){case 1:return"/v1/example/";case 2:return"/example/"}},Example.prototype.head=function(){return{title:"Example - "+this.pageTitle,script:[{src:"/scripts/jsstore.js"}]}},Example.prototype.restoreDb=function(){this.isEditorLoading=!0,(new __WEBPACK_IMPORTED_MODULE_1__service_demo_db_service__.a).restoreDb(function(){setTimeout(function(){window.location.reload()},200)})},Example.prototype.execute=function(){var code=document.querySelector("#divCode pre").innerText;code.indexOf("Join")>=0&&(isJoin=!0),eval(code),codeInitTime=performance.now()},Object.defineProperty(Example.prototype,"exampleHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Example=__decorate([Object(__WEBPACK_IMPORTED_MODULE_0_nuxt_property_decorator__.Component)({props:{innerHtml:String,pageTitle:String}})],Example),Example}(__WEBPACK_IMPORTED_MODULE_0_nuxt_property_decorator__.Vue);function $(t){return document.querySelector(t)}function log(t){var e=(performance.now()-codeInitTime)/1e3;switch($("#timeTakenContainer").classList.remove("hidden"),$("#timeCount").innerText=e.toString(),JsStore.getType(t)){case JsStore.Data_Type.Array:var r=document.createElement("Table"),n=t.length,o="<tr>",i=[];for(var a in t[0])i.push(a),o+="<th>"+a+"</th>";o+="</tr>";for(var u=100/i.length,c=0;c<n;c++){for(var s="<tr>",p=0;p<i.length;p++)s+=isJoin?"<td style=width:"+u+"%>"+JSON.stringify(t[c][i[p]])+"</td>":"<td>"+t[c][i[p]]+"</td>";o+=s+="</tr>"}r.innerHTML=o,r.className="bordered responsive-table centered",(l=$("#divResult")).innerHTML="",l.appendChild(r),(f=$("#recordCount")).classList.remove("hidden"),f.innerText="No of Record : "+t.length;break;case JsStore.Data_Type.Object:t=JSON.stringify(t);case JsStore.Data_Type.String:case JsStore.Data_Type.Number:var f,l;(f=$("#recordCount")).classList.add("hidden"),(l=$("#divResult")).innerHTML=t;break;default:alert("invalid result")}}__webpack_exports__.a=Example;try{window.log=log}catch(t){console.log(t)}},"c+8m":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=(n=r("/5sW"))&&"object"==typeof n&&"default"in n?n.default:n,i={__proto__:[]}instanceof Array;var a=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured"];function u(t,e){void 0===e&&(e={}),e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach(function(t){if("constructor"!==t)if(a.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);"function"==typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}}),(e.mixins||(e.mixins=[])).push({data:function(){return function(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach(function(r){"_"!==r.charAt(0)&&Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){return t[r]=e},configurable:!0})})};var n=new e;e.prototype._init=r;var o={};return Object.keys(n).forEach(function(t){void 0!==n[t]&&(o[t]=n[t])}),o}(this,t)}});var n=t.__decorators__;n&&(n.forEach(function(t){return t(e)}),delete t.__decorators__);var u=Object.getPrototypeOf(t.prototype),c=u instanceof o?u.constructor:o,s=c.extend(e);return function(t,e,r){Object.getOwnPropertyNames(e).forEach(function(n){if("prototype"!==n){var o=Object.getOwnPropertyDescriptor(t,n);if(!o||o.configurable){var a,u,c=Object.getOwnPropertyDescriptor(e,n);if(!i){if("cid"===n)return;var s=Object.getOwnPropertyDescriptor(r,n);if(a=c.value,u=typeof a,null!=a&&("object"===u||"function"===u)&&s&&s.value===c.value)return}0,Object.defineProperty(t,n,c)}}})}(s,t,c),s}function c(t){return"function"==typeof t?u(t):function(e){return u(e,t)}}!function(t){t.registerHooks=function(t){a.push.apply(a,t)}}(c||(c={}));var s=c;e.default=s,e.createDecorator=function(t){return function(e,r,n){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof n&&(n=void 0),o.__decorators__.push(function(e){return t(e,r,n)})}},e.mixins=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return o.extend({mixins:t})}},kPbQ:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r("qPzS"),o=(r.n(n),new n.Vue)},qPzS:function(t,e,r){(function(t,e,r){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var n="default"in r?r.default:r;n.registerHooks(["beforeRouteEnter","beforeRouteLeave","asyncData","fetch","head","middleware","layout","transition","scrollToTop","validate"]);var o=/\B([A-Z])/g,i=function(t){return t.replace(o,"-$1").toLowerCase()};t.Inject=function(t){return r.createDecorator(function(e,r){void 0===e.inject&&(e.inject={}),Array.isArray(e.inject)||(e.inject[r]=t||r)})},t.Provide=function(t){return r.createDecorator(function(e,r){var n=e.provide;if("function"!=typeof n||!n.managed){var o=e.provide;(n=e.provide=function(){var t=Object.create(("function"==typeof o?o.call(this):o)||null);for(var e in n.managed)t[n.managed[e]]=this[e];return t}).managed={}}n.managed[r]=t||r})},t.Model=function(t,e){return void 0===e&&(e={}),function(n,o){Array.isArray(e)||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",n,o)),r.createDecorator(function(r,n){(r.props||(r.props={}))[n]=e,r.model={prop:n,event:t||n}})(n,o)}},t.Prop=function(t){return void 0===t&&(t={}),function(e,n){Array.isArray(t)||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,n)),r.createDecorator(function(e,r){(e.props||(e.props={}))[r]=t})(e,n)}},t.Watch=function(t,e){void 0===e&&(e={});var n=e.deep,o=void 0!==n&&n,i=e.immediate,a=void 0!==i&&i;return r.createDecorator(function(e,r){"object"!=typeof e.watch&&(e.watch=Object.create(null)),e.watch[t]={handler:r,deep:o,immediate:a}})},t.Emit=function(t){return function(e,r,n){r=i(r);var o=n.value;n.value=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];!1!==o.apply(this,e)&&this.$emit.apply(this,[t||r].concat(e))}}},t.Off=function(t,e){return function(r,n,o){n=i(n);var a=o.value;o.value=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(!1!==a.apply(this,r))if(e){if("function"!=typeof this[e])throw new TypeError("must be a method name");this.$off(t||n,this[e])}else t?this.$off(t||n):this.$off()}}},t.On=function(t){return r.createDecorator(function(e,r){var n=i(r);"function"!=typeof e.created&&(e.created=function(){});var o=e.created;e.created=function(){o(),void 0!==e.methods&&this.$on(t||n,e.methods[r])}})},t.Once=function(t){return r.createDecorator(function(e,r){var n=i(r);"function"!=typeof e.created&&(e.created=function(){});var o=e.created;e.created=function(){o(),void 0!==e.methods&&this.$once(t||n,e.methods[r])}})},t.NextTick=function(t){return function(e,r,n){var o=n.value;n.value=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(!1!==o.apply(this,e)){if("function"!=typeof this[t])throw new TypeError("must be a method name");this.$nextTick(this[t])}}}},t.Component=n,t.Vue=e,Object.defineProperty(t,"__esModule",{value:!0})})(e,r("/5sW"),r("c+8m"),r("I8yv"))},tqNX:function(t,e,r){"use strict";r.d(e,"a",function(){return c});var n,o=r("mtWM"),i=r.n(o),a=r("xHe7"),u=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dbName="Demo",e.filesList=["Customers","Categories","Employees","OrderDetails","Orders","Products","Shippers","Suppliers"],e}return u(e,t),e.prototype.createDemoDataBase=function(){var t=this;return new Promise(function(e,r){var n=function(){t.getDbInfo(e)};t.isDbExist(t.dbName).then(function(e){e?t.connection.openDb(t.dbName,n):t.connection.createDb(t.getDbStructure_(),function(){t.insertDemoDbData(n)},function(t){r(t)})}).catch(function(t){r(t)})})},e.prototype.getDbInfo=function(t){var e=this,r=[],n=this.filesList.length,o=0;this.filesList.forEach(function(i){e.count_(i).then(function(e){r.push({count:e,name:i}),n===++o&&t(r)})})},e.prototype.insertDemoDbData=function(t){var e=this,r=0,n=function(){r++,console.log("inserted file:"+e.filesList[r-1]),r===e.filesList.length&&t()};this.filesList.forEach(function(t){var r="/demo_db/"+t+".json";i.a.get(r).then(function(r){switch(t){case e.filesList[3]:e.bulkInsert_(t,r.data).then(n);break;default:e.insert_(t,r.data).then(n)}})})},e.prototype.restoreDb=function(t){this.connection.openDb(this.dbName).dropDb(t)},e.prototype.count_=function(t){return this.connection.count({From:t})},e.prototype.insert_=function(t,e){return this.connection.insert({Into:t,Values:e})},e.prototype.bulkInsert_=function(t,e){return this.connection.bulkInsert({Into:t,Values:e})},e.prototype.getDbStructure_=function(){return{Name:this.dbName,Tables:[{Name:"Customers",Columns:[{Name:"customerId",PrimaryKey:!0,AutoIncrement:!0},{Name:"customerName",NotNull:!0,DataType:"string"},{Name:"contactName",NotNull:!0,DataType:"string"},{Name:"address",NotNull:!0,DataType:"string"},{Name:"city",NotNull:!0,DataType:"string"},{Name:"postalCode",DataType:"string"},{Name:"country",NotNull:!0,DataType:"string"}]},{Name:"Categories",Columns:[{Name:"categoryId",PrimaryKey:!0,AutoIncrement:!0},{Name:"categoryName",NotNull:!0,DataType:"string"},{Name:"description",NotNull:!0,DataType:"string"}]},{Name:"Employees",Columns:[{Name:"employeeId",PrimaryKey:!0,AutoIncrement:!0},{Name:"lastName",NotNull:!0,DataType:"string"},{Name:"birthDate",NotNull:!0,DataType:"string"},{Name:"photo",NotNull:!0,DataType:"string"},{Name:"notes",DataType:"string"}]},{Name:"OrderDetails",Columns:[{Name:"orderDetailId",PrimaryKey:!0,AutoIncrement:!0},{Name:"orderId",NotNull:!0,DataType:"number"},{Name:"productId",NotNull:!0,DataType:"number"},{Name:"quantity",NotNull:!0,DataType:"number"}]},{Name:"Orders",Columns:[{Name:"orderId",PrimaryKey:!0},{Name:"customerId",NotNull:!0,DataType:"number"},{Name:"employeeId",NotNull:!0,DataType:"number"},{Name:"orderDate",NotNull:!0,DataType:"string"},{Name:"shipperId",NotNull:!0,DataType:"number"}]},{Name:"Products",Columns:[{Name:"productId",PrimaryKey:!0,AutoIncrement:!0},{Name:"productName",NotNull:!0,DataType:"string"},{Name:"supplierId",NotNull:!0,DataType:"number"},{Name:"categoryId",NotNull:!0,DataType:"number"},{Name:"unit",NotNull:!0,DataType:"string"},{Name:"price",NotNull:!0,DataType:"number"}]},{Name:"Shippers",Columns:[{Name:"shipperId",PrimaryKey:!0,AutoIncrement:!0},{Name:"shipperName",NotNull:!0,DataType:"string"},{Name:"phone",NotNull:!0,DataType:"string"}]},{Name:"Suppliers",Columns:[{Name:"supplierId",PrimaryKey:!0,AutoIncrement:!0},{Name:"supplierName",NotNull:!0,DataType:"string"},{Name:"contactName",NotNull:!0,DataType:"string"},{Name:"address",NotNull:!0,DataType:"string"},{Name:"city",NotNull:!0,DataType:"string"},{Name:"postalCode",NotNull:!0,DataType:"string"},{Name:"country",NotNull:!0,DataType:"string"},{Name:"phone",NotNull:!0,DataType:"string"}]}]}},e}(a.a)},xHe7:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n=function(){function t(){this.connection=new JsStore.Instance}return t.prototype.isDbExist=function(t){return JsStore.isDbExist(t)},t}()},yjPv:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"hidden-xs-and-down margin-top-50px",attrs:{id:"divDbInfo",xs12:"",sm8:"",md2:"","offset-sm-2":""}},[r("table",[r("caption",[t._v("Current Database")]),r("thead",[r("tr",[r("th",[t._v("Table")]),r("th",[t._v("Records")])])]),r("tbody",t._l(t.dbInfo,function(e){return r("tr",{key:e.name},[r("td",[t._v(t._s(e.name))]),r("td",[t._v(t._s(e.count))])])})),r("tfoot",[r("tr",{on:{click:t.restoreDb}},[r("td",{attrs:{colspan:"2"}},[r("a",{staticClass:"margin-top-20px btn primary",attrs:{href:"#"}},[t._v("Restore Db")])])])])])]),r("v-flex",{staticClass:"margin-left-15px",attrs:{id:"divExampleCode",xs12:"",sm12:"",md7:"",l8:"",xl6:""}},[r("div",[r("div",{staticClass:"content-heading"},[t._v("JsStore Code")]),r("div",{attrs:{id:"divCode",contenteditable:""}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:t._s(t.exampleHtml)}})])]),r("p",[r("span",[t._v("\r\n            You can also edit code and run it.\r\n        ")]),r("button",{staticClass:"btn waves-effect right-align",attrs:{disabled:"",id:"btnExecute"},on:{click:t.execute}},[t._v("Run\r\n            "),r("i",{staticClass:"material-icons"},[t._v("")])])]),r("div",[r("div",{staticClass:"margin-top-30px"},[r("span",{staticClass:"content-heading"},[t._v("Result :")]),r("span",{staticClass:"hidden right",staticStyle:{"padding-top":"10px"},attrs:{id:"recordCount"}},[t._v("No of Records : ")])]),r("p",{staticClass:"right-align hidden",attrs:{id:"timeTakenContainer"}},[t._v("\r\n            Time Taken :\r\n            "),r("span",{attrs:{id:"timeCount"}}),t._v(" sec.\r\n        ")]),r("div",{attrs:{id:"divResult"}})])])],1),r("v-layout",{attrs:{row:"","justify-center":""}},[r("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:t.isEditorLoading,callback:function(e){t.isEditorLoading=e},expression:"isEditorLoading"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("Loading Editor")]),r("v-card-text",[t._v("\r\n            Please wait - Example page is being configured.\r\n        ")])],1)],1)],1)],1)};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o}});