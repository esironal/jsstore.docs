/*! For license information please see LICENSES */
webpackJsonp([65],{"+FsE":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center}.link-active a{color:#fff!important}#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0}#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block}#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)}#divMenuContainer ul li.search i{vertical-align:middle}#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px}#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle}#btnMenuToggle i{font-size:30px}.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll}.show-menu ul{border-right:none!important;margin-left:15px}.search .search-wrapper a:hover{background-color:#eee;outline:none}pre{background-color:#f1f1f1;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%}pre,pre code{margin:20px 0}pre code{background-color:#fff;padding-left:24px;padding-left:1.5rem;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400}.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}",""])},"3lC2":function(t,e,r){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{innerHtml:this.tutorialContent,pageTitle:this.title}})};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},DNG5:function(t,e,r){var n=r("+FsE");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("875e2908",n,!1,{sourceMap:!1})},Erin:function(t,e,r){"use strict";var n=function(){function t(t){t&&(this.el=document.querySelector(t))}return t.prototype.css=function(t,e){this.el.style[t]=e},t.prototype.attr=function(t,e){this.el.setAttribute(t,e)},Object.defineProperty(t.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),t.prototype.createElement=function(t){return document.createElement(t)},t.prototype.innerTextFromHtml=function(t){try{var e=this.createElement("div");return e.innerHTML=t,e.innerText}catch(t){console.log(t)}return""},t.prototype.val=function(){return this.el.value},t}();e.a=n},I8yv:function(t,e,r){(function(t,e){var r;!function(r){!function(n){var o="object"==typeof e?e:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=a(r);function a(t,e){return function(r,n){"function"!=typeof t[r]&&Object.defineProperty(t,r,{configurable:!0,writable:!0,value:n}),e&&e(r,n)}}void 0===o.Reflect?o.Reflect=r:i=a(o.Reflect,i),function(e){var r=Object.prototype.hasOwnProperty,n="function"==typeof Symbol,o=n&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",i=n&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",a="function"==typeof Object.create,u={__proto__:[]}instanceof Array,s=!a&&!u,c={create:a?function(){return S(Object.create(null))}:u?function(){return S({__proto__:null})}:function(){return S({})},has:s?function(t,e){return r.call(t,e)}:function(t,e){return e in t},get:s?function(t,e){return r.call(t,e)?t[e]:void 0}:function(t,e){return t[e]}},l=Object.getPrototypeOf(Function),p="object"==typeof t&&t.env&&"true"===t.env.REFLECT_METADATA_USE_MAP_POLYFILL,f=p||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],r=function(){function t(t,e,r){this._index=0,this._keys=t,this._values=e,this._selector=r}return t.prototype["@@iterator"]=function(){return this},t.prototype[i]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var r=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var r=this._find(t,!0);return this._values[r]=e,this},e.prototype.delete=function(e){var r=this._find(e,!1);if(r>=0){for(var n=this._keys.length,o=r+1;o<n;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new r(this._keys,this._values,n)},e.prototype.values=function(){return new r(this._keys,this._values,o)},e.prototype.entries=function(){return new r(this._keys,this._values,a)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[i]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function o(t,e){return e}function a(t,e){return[t,e]}}():Map,h=p||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new f}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[i]=function(){return this.keys()},t}():Set,d=new(p||"function"!=typeof WeakMap?function(){var t=16,e=c.create(),n=o();return function(){function t(){this._key=o()}return t.prototype.has=function(t){var e=i(t,!1);return void 0!==e&&c.has(e,this._key)},t.prototype.get=function(t){var e=i(t,!1);return void 0!==e?c.get(e,this._key):void 0},t.prototype.set=function(t,e){var r=i(t,!0);return r[this._key]=e,this},t.prototype.delete=function(t){var e=i(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=o()},t}();function o(){var t;do{t="@@WeakMap@@"+u()}while(c.has(e,t));return e[t]=!0,t}function i(t,e){if(!r.call(t,n)){if(!e)return;Object.defineProperty(t,n,{value:c.create()})}return t[n]}function a(t,e){for(var r=0;r<e;++r)t[r]=255*Math.random()|0;return t}function u(){var e=function(t){if("function"==typeof Uint8Array)return"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):a(new Uint8Array(t),t);return a(new Array(t),t)}(t);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var r="",n=0;n<t;++n){var o=e[n];4!==n&&6!==n&&8!==n||(r+="-"),o<16&&(r+="0"),r+=o.toString(16).toLowerCase()}return r}}():WeakMap);function y(t,e,r){var n=d.get(t);if(w(n)){if(!r)return;n=new f,d.set(t,n)}var o=n.get(e);if(w(o)){if(!r)return;o=new f,n.set(e,o)}return o}function v(t,e,r){var n=y(e,r,!1);return!w(n)&&!!n.has(t)}function g(t,e,r){var n=y(e,r,!1);if(!w(n))return n.get(t)}function b(t,e,r,n){var o=y(r,n,!0);o.set(t,e)}function m(t,e){var r=[],n=y(t,e,!1);if(w(n))return r;for(var o=n.keys(),a=function(t){var e=T(t,i);if(!O(e))throw new TypeError;var r=e.call(t);if(!A(r))throw new TypeError;return r}(o),u=0;;){var s=P(a);if(!s)return r.length=u,r;var c=s.value;try{r[u]=c}catch(t){try{D(a)}finally{throw t}}u++}}function _(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function w(t){return void 0===t}function x(t){return null===t}function A(t){return"object"==typeof t?null!==t:"function"==typeof t}function E(t,e){switch(_(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var r=3===e?"string":5===e?"number":"default",n=T(t,o);if(void 0!==n){var i=n.call(t,r);if(A(i))throw new TypeError;return i}return function(t,e){if("string"===e){var r=t.toString;if(O(r)){var n=r.call(t);if(!A(n))return n}var o=t.valueOf;if(O(o)){var n=o.call(t);if(!A(n))return n}}else{var o=t.valueOf;if(O(o)){var n=o.call(t);if(!A(n))return n}var i=t.toString;if(O(i)){var n=i.call(t);if(!A(n))return n}}throw new TypeError}(t,"default"===r?"number":r)}function C(t){var e=E(t,3);return"symbol"==typeof e?e:function(t){return""+t}(e)}function k(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function O(t){return"function"==typeof t}function j(t){return"function"==typeof t}function T(t,e){var r=t[e];if(void 0!==r&&null!==r){if(!O(r))throw new TypeError;return r}}function P(t){var e=t.next();return!e.done&&e}function D(t){var e=t.return;e&&e.call(t)}function M(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===l)return e;if(e!==l)return e;var r=t.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return e;var o=n.constructor;return"function"!=typeof o?e:o===t?e:o}function S(t){return t.__=void 0,delete t.__,t}e("decorate",function(t,e,r,n){if(w(r)){if(!k(t))throw new TypeError;if(!j(e))throw new TypeError;return function(t,e){for(var r=t.length-1;r>=0;--r){var n=t[r],o=n(e);if(!w(o)&&!x(o)){if(!j(o))throw new TypeError;e=o}}return e}(t,e)}if(!k(t))throw new TypeError;if(!A(e))throw new TypeError;if(!A(n)&&!w(n)&&!x(n))throw new TypeError;return x(n)&&(n=void 0),r=C(r),function(t,e,r,n){for(var o=t.length-1;o>=0;--o){var i=t[o],a=i(e,r,n);if(!w(a)&&!x(a)){if(!A(a))throw new TypeError;n=a}}return n}(t,e,r,n)}),e("metadata",function(t,e){return function(r,n){if(!A(r))throw new TypeError;if(!w(n)&&!function(t){switch(_(t)){case 3:case 4:return!0;default:return!1}}(n))throw new TypeError;b(t,e,r,n)}}),e("defineMetadata",function(t,e,r,n){if(!A(r))throw new TypeError;w(n)||(n=C(n));return b(t,e,r,n)}),e("hasMetadata",function(t,e,r){if(!A(e))throw new TypeError;w(r)||(r=C(r));return function t(e,r,n){var o=v(e,r,n);if(o)return!0;var i=M(r);if(!x(i))return t(e,i,n);return!1}(t,e,r)}),e("hasOwnMetadata",function(t,e,r){if(!A(e))throw new TypeError;w(r)||(r=C(r));return v(t,e,r)}),e("getMetadata",function(t,e,r){if(!A(e))throw new TypeError;w(r)||(r=C(r));return function t(e,r,n){var o=v(e,r,n);if(o)return g(e,r,n);var i=M(r);if(!x(i))return t(e,i,n);return}(t,e,r)}),e("getOwnMetadata",function(t,e,r){if(!A(e))throw new TypeError;w(r)||(r=C(r));return g(t,e,r)}),e("getMetadataKeys",function(t,e){if(!A(t))throw new TypeError;w(e)||(e=C(e));return function t(e,r){var n=m(e,r);var o=M(e);if(null===o)return n;var i=t(o,r);if(i.length<=0)return n;if(n.length<=0)return i;var a=new h;var u=[];for(var s=0,c=n;s<c.length;s++){var l=c[s],p=a.has(l);p||(a.add(l),u.push(l))}for(var f=0,d=i;f<d.length;f++){var l=d[f],p=a.has(l);p||(a.add(l),u.push(l))}return u}(t,e)}),e("getOwnMetadataKeys",function(t,e){if(!A(t))throw new TypeError;w(e)||(e=C(e));return m(t,e)}),e("deleteMetadata",function(t,e,r){if(!A(e))throw new TypeError;w(r)||(r=C(r));var n=y(e,r,!1);if(w(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var o=d.get(e);return o.delete(r),o.size>0||(d.delete(e),!0)})}(i)}()}(r||(r={}))}).call(e,r("W2nU"),r("DuR2"))},Wmrb:function(t,e,r){"use strict";var n,o=r("qPzS"),i=(r.n(o),r("sZwj")),a=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),u=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3EIndexedDB%20is%20a%20pure%20transactional%20database%20which%20means%20all%20the%20query%20is%20executed%20inside%20the%20transaction.%3C/p%3E%0A%3Cp%3EJsStore%20provides%20-%20'transaction'%20api%20for%20executing%20transaction.%20The%20apis%20which%20are%20available%20inside%20the%20transaction%20are%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3Eselect%3C/li%3E%0A%3Cli%3Ecount%3C/li%3E%0A%3Cli%3Eupdate%3C/li%3E%0A%3Cli%3Eremove%3C/li%3E%0A%3Cli%3Einsert%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3EThere%20are%20some%20extra%20api%20available%20inside%20the%20transaction%20to%20make%20the%20transaction%20more%20useful.%20These%20are%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EsetResult%20-%20setResult%20accepts%20key%20and%20value.%20setResult%20is%20used%20to%20save%20the%20value%20which%20will%20be%20returned%20when%20transaction%20completes.%20The%20transaction%20returns%20an%20object,%20the%20object%20is%20in%20form%20of%20key%20and%20value%20which%20is%20set%20using%20setResult.%3C/li%3E%0A%3Cli%3Eabort%20-%20abort%20is%20used%20to%20abort%20the%20transaction.%20%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cstrong%3ENote%20:-%3C/strong%3E%20All%20extra%20apis%20are%20sychronous%20,%20so%20you%20should%20call%20these%20api%20inside%20the%20promise%20resolve%20callback%20i.e%20inside%20then%20callback.%3C/p%3E%0A%3Cp%3ELet's%20see%20a%20example%20-%20so%20consider%20a%20situation%20where%20a%20customer%20buy%20some%20products%20and%20customer%20is%20not%20into%20the%20db.%3C/p%3E%0A%3Cp%3ESo%20the%20steps%20will%20be%20-%20%3C/p%3E%0A%3Col%3E%0A%3Cli%3EAdd%20new%20customer%20-%20so%20insert%20in%20the%20table%20-%20%22Customer%22%3C/li%3E%0A%3Cli%3Eadd%20new%20order%20-%20insert%20new%20order%20for%20the%20above%20customer%3C/li%3E%0A%3Cli%3EUpdate%20products%20-%20reduce%20the%20number%20of%20product%20for%20the%20particular%20or%20list%20of%20products.%3C/li%3E%0A%3C/ol%3E%0A%3Cpre%3E%3Ccode%3Econnection.transaction(%7B%0A%20%20%20%20tables:%20%5B'customers',%20'orders'%5D,%20//%20list%20of%20tables%20which%20will%20be%20used%20in%20transaction%0A%20%20%20%20//%20the%20logic%20callback%20is%20not%20a%20closure%20i.e%20it%20wont%20have%20access%20to%20outer%20scope%20or%20global%20scope.%0A%20%20%20%20//%20basically%20function%20should%20be%20independent%0A%20%20%20%20logic:%20function(data)%20%7B%0A%20%20%20%20%20%20%20%20insert(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20into:%20'customers',%0A%20%20%20%20%20%20%20%20%20%20%20%20values:%20%5Bdata.customer%5D,%0A%20%20%20%20%20%20%20%20%20%20%20%20return:%20true%0A%20%20%20%20%20%20%20%20%7D).then(function(customer)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//add%20customerid%20in%20order%0A%20%20%20%20%20%20%20%20%20%20%20%20data.order.customerId%20=%20customer.Id;%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20add%20the%20result%20to%20get%20in%20transaction%20result%0A%20%20%20%20%20%20%20%20%20%20%20%20setResult('customer',%20customer)%0A%20%20%20%20%20%20%20%20%7D);%0A%0A%20%20%20%20%20%20%20%20insert(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20into:%20'orders',%0A%20%20%20%20%20%20%20%20%20%20%20%20values:%20%5Bdata.order%5D,%0A%20%20%20%20%20%20%20%20%20%20%20%20return:%20true%0A%20%20%20%20%20%20%20%20%7D).then(function(order)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20setResult('order',%20order)%0A%20%20%20%20%20%20%20%20%7D);%0A%0A%20%20%20%20%20%20%20%20update(%7B%20in:%20'product',%0A%20%20%20%20%20%20%20%20%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20productId:%20data.productId%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20%20%20%20%20set:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20count:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'-':%20data.itemSelled%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%7D,%0A%20%20%20%20data:%20%7B%20//%20the%20transaction%20logic%20will%20be%20called%20with%20supplying%20data%0A%20%20%20%20%20%20%20%20customer:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20'ujjwal%20gupta',%0A%20%20%20%20%20%20%20%20%20%20%20%20address:%20'india',%0A%20%20%20%20%20%20%20%20%20%20%20%20gender:%20'male'%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20order:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20total:%201000,%0A%20%20%20%20%20%20%20%20%20%20%20%20date:%20%2212/04/2018%22%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20productId:%205,%0A%20%20%20%20%20%20%20%20itemSelled:%204%0A%20%20%20%20%7D%0A%7D).then(function(result)%20%7B%0A%20%20%20%20console.log(result)%0A%7D).catch(function(err)%20%7B%0A%20%20%20%20console.log(err);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EFew%20important%20things%20to%20make%20sure%20you%20are%20using%20transaction%20in%20right%20way%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3ETransaction%20should%20be%20light%20weight.%20Dont%20write%20too%20many%20or%20heavy%20logics%20inside%20it.%20The%20reason%20is%20%20-%20the%20indexeddb%20transaction%20is%20asyc%20and%20automatically%20commited%20and%20so%20jsstore.%3C/li%3E%0A%3Cli%3EThere%20may%20be%20situation%20where%20you%20have%20a%20heavy%20logic%20then%20-%20calculate%20the%20result%20and%20put%20it%20in%20data%20option.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E",e.title="Transaction",e}return a(e,t),e=u([Object(o.Component)({components:{Tutorial:i.a}})],e)}(o.Vue);e.a=s},"c+8m":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=(n=r("/5sW"))&&"object"==typeof n&&"default"in n?n.default:n,i={__proto__:[]}instanceof Array;var a=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured"];function u(t,e){void 0===e&&(e={}),e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach(function(t){if("constructor"!==t)if(a.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);"function"==typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}}),(e.mixins||(e.mixins=[])).push({data:function(){return function(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach(function(r){"_"!==r.charAt(0)&&Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){return t[r]=e},configurable:!0})})};var n=new e;e.prototype._init=r;var o={};return Object.keys(n).forEach(function(t){void 0!==n[t]&&(o[t]=n[t])}),o}(this,t)}});var n=t.__decorators__;n&&(n.forEach(function(t){return t(e)}),delete t.__decorators__);var u=Object.getPrototypeOf(t.prototype),s=u instanceof o?u.constructor:o,c=s.extend(e);return function(t,e,r){Object.getOwnPropertyNames(e).forEach(function(n){if("prototype"!==n){var o=Object.getOwnPropertyDescriptor(t,n);if(!o||o.configurable){var a,u,s=Object.getOwnPropertyDescriptor(e,n);if(!i){if("cid"===n)return;var c=Object.getOwnPropertyDescriptor(r,n);if(a=s.value,u=typeof a,null!=a&&("object"===u||"function"===u)&&c&&c.value===s.value)return}0,Object.defineProperty(t,n,s)}}})}(c,t,s),c}function s(t){return"function"==typeof t?u(t):function(e){return u(e,t)}}!function(t){t.registerHooks=function(t){a.push.apply(a,t)}}(s||(s={}));var c=s;e.default=c,e.createDecorator=function(t){return function(e,r,n){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof n&&(n=void 0),o.__decorators__.push(function(e){return t(e,r,n)})}},e.mixins=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return o.extend({mixins:t})}},cUER:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":t.showMenu},attrs:{md2:"",id:"divMenuContainer"}},[r("ul",[r("li",{staticClass:"search margin-bottom-10px"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:t.searchValue},on:{keyup:t.onSearch,input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),r("i",{staticClass:"material-icons"},[t._v("search")]),r("div",{staticClass:"search-results",domProps:{innerHTML:t._s(t.searchResult)}})])],1)],1),t._l(t.links,function(e){return r("li",{key:e.text,class:{"link-active":e.url===t.activeUrl}},[r("a",{attrs:{href:t.relativeUrl+e.url}},[t._v(t._s(e.text))])])})],2)]),r("v-flex",{class:{"margin-left-15px":t.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent","data-fuck":"ddd",xs12:"",md9:"",l7:"",xl6:""}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:t._s(t.tutorialHtml)}})])],1)};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},kPbQ:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r("qPzS"),o=(r.n(n),new n.Vue)},nyu5:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Wmrb"),o=r("3lC2"),i=r("VU/8")(n.a,o.a,!1,null,null,null);i.options.__file="code\\pages\\tutorial\\transaction.vue",e.default=i.exports},qPzS:function(t,e,r){(function(t,e,r){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var n="default"in r?r.default:r;n.registerHooks(["beforeRouteEnter","beforeRouteLeave","asyncData","fetch","head","middleware","layout","transition","scrollToTop","validate"]);var o=/\B([A-Z])/g,i=function(t){return t.replace(o,"-$1").toLowerCase()};t.Inject=function(t){return r.createDecorator(function(e,r){void 0===e.inject&&(e.inject={}),Array.isArray(e.inject)||(e.inject[r]=t||r)})},t.Provide=function(t){return r.createDecorator(function(e,r){var n=e.provide;if("function"!=typeof n||!n.managed){var o=e.provide;(n=e.provide=function(){var t=Object.create(("function"==typeof o?o.call(this):o)||null);for(var e in n.managed)t[n.managed[e]]=this[e];return t}).managed={}}n.managed[r]=t||r})},t.Model=function(t,e){return void 0===e&&(e={}),function(n,o){Array.isArray(e)||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",n,o)),r.createDecorator(function(r,n){(r.props||(r.props={}))[n]=e,r.model={prop:n,event:t||n}})(n,o)}},t.Prop=function(t){return void 0===t&&(t={}),function(e,n){Array.isArray(t)||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,n)),r.createDecorator(function(e,r){(e.props||(e.props={}))[r]=t})(e,n)}},t.Watch=function(t,e){void 0===e&&(e={});var n=e.deep,o=void 0!==n&&n,i=e.immediate,a=void 0!==i&&i;return r.createDecorator(function(e,r){"object"!=typeof e.watch&&(e.watch=Object.create(null)),e.watch[t]={handler:r,deep:o,immediate:a}})},t.Emit=function(t){return function(e,r,n){r=i(r);var o=n.value;n.value=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];!1!==o.apply(this,e)&&this.$emit.apply(this,[t||r].concat(e))}}},t.Off=function(t,e){return function(r,n,o){n=i(n);var a=o.value;o.value=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(!1!==a.apply(this,r))if(e){if("function"!=typeof this[e])throw new TypeError("must be a method name");this.$off(t||n,this[e])}else t?this.$off(t||n):this.$off()}}},t.On=function(t){return r.createDecorator(function(e,r){var n=i(r);"function"!=typeof e.created&&(e.created=function(){});var o=e.created;e.created=function(){o(),void 0!==e.methods&&this.$on(t||n,e.methods[r])}})},t.Once=function(t){return r.createDecorator(function(e,r){var n=i(r);"function"!=typeof e.created&&(e.created=function(){});var o=e.created;e.created=function(){o(),void 0!==e.methods&&this.$once(t||n,e.methods[r])}})},t.NextTick=function(t){return function(e,r,n){var o=n.value;n.value=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(!1!==o.apply(this,e)){if("function"!=typeof this[t])throw new TypeError("must be a method name");this.$nextTick(this[t])}}}},t.Component=n,t.Vue=e,Object.defineProperty(t,"__esModule",{value:!0})})(e,r("/5sW"),r("c+8m"),r("I8yv"))},sZwj:function(t,e,r){"use strict";var n=r("wqJu"),o=r("cUER"),i=!1;var a=function(t){i||r("DNG5")},u=r("VU/8")(n.a,o.a,!1,a,null,null);u.options.__file="code\\components\\tutorial.vue",e.a=u.exports},wqJu:function(t,e,r){"use strict";var n,o=r("qPzS"),i=(r.n(o),r("Erin")),a=r("kPbQ"),u=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},c=function(t){function e(){var e=t.call(this)||this;return e.version=2,e.activeUrl="",e.showMenu=!1,e.searchValue="",e.searchResult="",e.catchEvents(),e}return u(e,t),e.prototype.catchEvents=function(){a.a.$on("version_change",this.onVersionChange),a.a.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){var t=this,e="";this.links.forEach(function(r){r.text.toLowerCase().indexOf(t.searchValue)>=0&&(e+="<a href="+r.url+">"+r.text+"</a>")}),this.searchResult=e},e.prototype.mounted=function(){var t=this;this.setVersion();var e=this.$route.path,r=this.links.find(function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")});r&&r.url.length>0&&(this.activeUrl=r.url),this.registerNextBtnEvents()},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout(function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1},200)},e.prototype.registerNextBtnEvents=function(){var t=new i.a(".btnNext");t.el&&(t.el.onclick=this.onNextBtnClick.bind(this))},e.prototype.head=function(){return{title:"JsStore - "+this.pageTitle}},e.prototype.getVersion=function(){return new i.a("#selectVersions").val()},e.prototype.setVersion=function(t){this.version=t||Number(this.getVersion())},e.prototype.onVersionChange=function(t){this.setVersion(t);var e=this.$route.path.split("/").reverse(),r=e[0].length>0?e[0]:e[1];this.$router.push(this.relativeUrl+r)},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){var t;switch(this.version){case 1:t=["v1-to-v2","terminate","transaction"];break;case 2:t=["promise"]}return this.allLinks_.filter(function(e){return t.findIndex(function(t){return t===e.url})<0})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Design",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"Transaction",url:"transaction"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e.prototype.onNextBtnClick=function(){var t=this,e=this.$route.path,r=(this.relativeUrl,this.links),n=r.findIndex(function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")});if(n>=0){var o=r[n+1];o&&this.$router.push(this.relativeUrl+o.url)}},e=s([Object(o.Component)({props:{innerHtml:String,pageTitle:String}})],e)}(o.Vue);e.a=c}});