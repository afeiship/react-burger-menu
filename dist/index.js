/*!
 *  name: @feizheng/react-burger-menu
 *  description: Burger menu for react.
 *  homepage: https://github.com/afeiship/react-burger-menu#readme
 *  version: 1.0.4
 *  date: 2020-10-26T08:03:09.906Z
 *  license: MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ReactBurgerMenu=t():e.ReactBurgerMenu=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@feizheng/noop")},function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("@feizheng/react-drawer")},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),u=n(3),a=n.n(u),c=n(0),i=n.n(c),l=n(1),f=n.n(l),s=n(4),p=n.n(s);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j="react-burger-menu",x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(u,e);var t,n,r,o=m(u);function u(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=o.call(this,e)).handleClick=function(){t.change(!0)},t.handleToggle=function(){t.change(!t.state.value)};var n=e.value;return t.state={value:n},t}return t=u,(n=[{key:"shouldComponentUpdate",value:function(e){var t=e.value;return t!==this.state.value&&this.setState({value:t}),!0}},{key:"change",value:function(e){var t=this.props.onChange,n={value:e};this.setState(n,(function(){t({target:n})}))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,r=(e.onChange,e.options),o=e.extra,u=d(e,["className","children","onChange","options","extra"]),c=this.state.value;return f.a.createElement("div",b({"data-component":j,className:a()(j,t)},u),f.a.createElement("button",{className:"".concat(j,"__trigger"),onClick:this.handleClick},f.a.createElement("span",null)),f.a.createElement(p.a,b({className:"".concat(j,"__popup"),value:c,backdrop:{onClick:this.handleToggle},children:n},r)),o)}}])&&h(t.prototype,n),r&&h(t,r),u}(l.Component);x.displayName=j,x.version="1.0.4",x.propTypes={className:i.a.string,value:i.a.bool,onChange:i.a.func,options:i.a.object,extra:i.a.element},x.defaultProps={value:!1,onChange:o.a};t.default=x}])}));
//# sourceMappingURL=index.js.map