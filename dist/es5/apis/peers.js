"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 * @internal
 */
exports.peers = function (rs) { return ({
    getList: function (query, callback) {
        if (query === void 0) { query = {}; }
        return rs({
            path: '/peers',
            params: __assign({}, query),
        }, callback);
    },
    getByIPPort: function (params, callback) {
        return rs({
            path: '/peers/get',
            params: __assign({}, params),
        }, callback);
    },
    version: function (callback) {
        return rs({
            path: '/peers/version',
        }, callback);
    },
}); };
