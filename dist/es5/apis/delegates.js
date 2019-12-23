"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 * @internal
 */
exports.delegates = function (rs) { return ({
    enable: function (data, callback) {
        return rs({
            path: '/delegates',
            method: 'PUT',
            data: data
        }, callback);
    },
    getList: function (query, callback) {
        if (query === void 0) { query = {}; }
        return rs({
            path: "/delegates",
            params: query
        }, callback);
    },
    getByUsername: function (username, callback) {
        return this.getByKeyVal('username', username, callback);
    },
    getByPublicKey: function (publicKey, callback) {
        return this.getByKeyVal('publicKey', publicKey, callback);
    },
    getByKeyVal: function (key, value, callback) {
        var query = {};
        query[key] = value;
        return rs({
            path: "/delegates/get",
            params: query
        }, callback);
    },
    getVoters: function (publicKey, callback) {
        return rs({
            path: "/delegates/voters",
            params: {
                publicKey: publicKey
            }
        }, callback);
    },
    toggleForging: function (obj, callback) {
        return rs({
            path: "/delegates/forging/" + (obj.enable ? 'enable' : 'disable'),
            data: {
                secret: obj.secret
            },
            method: 'POST'
        }, callback);
    },
    getForgedByAccount: function (publicKey, callback) {
        return rs({
            path: "/delegates/forging/getForgedByAccount",
            params: {
                generatorPublicKey: publicKey
            }
        }, callback);
    },
    getForgingStatus: function (publicKey, callback) {
        if (typeof (publicKey) === 'function') {
            callback = publicKey;
            publicKey = undefined;
        }
        return rs({
            path: "/delegates/forging/status",
            params: {
                publicKey: publicKey
            }
        }, callback);
    },
    getNextForgers: function (limit, callback) {
        return rs({
            path: "/delegates/getNextForgers",
            params: { limit: limit }
        }, callback);
    }
}); };
