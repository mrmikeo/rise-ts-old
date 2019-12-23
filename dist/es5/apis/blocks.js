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
exports.blocks = function (rs) { return ({
    getFeeSchedule: function (callback) {
        return rs({
            path: '/blocks/getFees'
        }, callback);
    },
    getFee: function (callback) {
        return rs({
            path: '/blocks/getFee'
        }, callback);
    },
    getReward: function (callback) {
        return rs({
            path: '/blocks/getReward'
        }, callback);
    },
    getSupply: function (callback) {
        return rs({
            path: '/blocks/getSupply'
        }, callback);
    },
    getStatus: function (callback) {
        return rs({
            path: '/blocks/getStatus'
        }, callback);
    },
    getHeight: function (callback) {
        return rs({
            path: '/blocks/getHeight'
        }, callback);
    },
    getNethash: function (callback) {
        return rs({
            path: '/blocks/getNethash'
        }, callback);
    },
    getMilestone: function (callback) {
        return rs({
            path: '/blocks/getMilestone'
        }, callback);
    },
    getBlock: function (id, callback) {
        return rs({
            path: '/blocks/get',
            params: { id: id }
        }, callback);
    },
    getBlocks: function (query, callback) {
        return rs({
            path: '/blocks',
            params: __assign({}, query)
        }, callback);
    }
}); };
