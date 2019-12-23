"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 * @internal
 */
exports.signatures = function (rs) { return ({
    add: function (data, callback) {
        return rs({
            path: '/signatures',
            method: 'PUT',
            data: data
        }, callback);
    }
}); };
