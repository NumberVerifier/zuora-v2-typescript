"use strict";
// custom-instance.ts
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customInstance = exports.AXIOS_INSTANCE = void 0;
const axios_1 = require("axios");
exports.AXIOS_INSTANCE = axios_1.default.create(); // use your own URL here or environment variable
// add a second `options` argument here if you want to pass extra options to each generated query
const customInstance = async (config, options) => {
    let axopts = Object.assign({}, config);
    if (options === null || options === void 0 ? void 0 : options.client) {
        await options.client.addAuth(axopts);
    }
    if (options === null || options === void 0 ? void 0 : options.override) {
        const _a = options.override, { headers } = _a, rest = __rest(_a, ["headers"]);
        axopts = Object.assign(Object.assign(Object.assign({}, axopts), { headers: Object.assign(Object.assign({}, axopts.headers), headers) }), rest);
    }
    const source = axios_1.default.CancelToken.source();
    const promise = (0, exports.AXIOS_INSTANCE)(Object.assign(Object.assign({}, axopts), { cancelToken: source.token })).then(({ data }) => data);
    // @ts-ignore
    promise.cancel = () => {
        source.cancel('Query was cancelled');
    };
    return promise;
};
exports.customInstance = customInstance;
