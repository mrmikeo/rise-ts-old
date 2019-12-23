"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 * @internal
 */
exports.dapps = function (rs) { return ({
    getCategories: function (callback) {
        return rs({
            path: '/dapps/categories'
        }, callback);
    }
}); };
