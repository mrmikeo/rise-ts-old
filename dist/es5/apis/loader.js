"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 * @internal
 */
exports.loader = function (rs) { return ({
    status: function (callback) {
        return rs({
            path: '/loader/status',
        }, callback);
    },
    syncStatus: function (callback) {
        return rs({
            path: '/loader/status/sync'
        }, callback);
    }
}); };
