"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zuora = require("./index");
module.exports = zuora;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Zuora = zuora;
// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = zuora;
