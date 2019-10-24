(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = global || self, factory(global['@knc/ui-components'] = {}, global.React));
}(this, (function (exports, React) { 'use strict';

    React = React && React.hasOwnProperty('default') ? React['default'] : React;

    function Greet(_ref) {
      var message = _ref.message;
      return React.createElement("h1", null, message || "Hello World");
    }

    function hello() {
      console.log("Hello World of rollup");
    }

    exports.Greet = Greet;
    exports.hello = hello;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
