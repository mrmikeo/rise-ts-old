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
exports.transactions = function (rs) { return ({
    get: function (id, callback) {
        return rs({
            path: '/transactions/get',
            params: { id: id },
        }, callback);
    },
    count: function (callback) {
        return rs({
            path: '/transactions/count',
        }, callback);
    },
    getList: function (query, callback) {
        if (query === void 0) { query = {}; }
        return rs({
            path: '/transactions',
            params: __assign({}, query),
        }, callback);
    },
    send: function (conf, callback) {
        return rs({
            path: '/transactions',
            method: 'PUT',
            data: __assign({}, conf)
        }, callback);
    },
    getUnconfirmedTransactions: function (callback) {
        return rs({
            path: '/transactions/unconfirmed'
        }, callback);
    },
    getUnconfirmedTransaction: function (id, callback) {
        return rs({
            path: '/transactions/unconfirmed/get',
            params: { id: id }
        }, callback);
    }
}); };
