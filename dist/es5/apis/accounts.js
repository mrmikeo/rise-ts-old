"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 * @internal
 */
exports.accounts = function (rs) { return ({
    open: function (secret, callback) {
        return rs({
            path: '/accounts/open/',
            method: 'POST',
            data: { secret: secret }
        }, callback);
    },
    getBalance: function (address, callback) {
        return rs({
            path: "/accounts/getBalance",
            params: { address: address }
        }, callback);
    },
    getPublicKey: function (address, callback) {
        return rs({
            path: "/accounts/getPublicKey",
            params: { address: address }
        }, callback);
    },
    generatePublicKey: function (secret, callback) {
        return rs({
            path: "/accounts/generatePublicKey",
            method: 'POST',
            data: { secret: secret }
        }, callback);
    },
    getAccount: function (address, callback) {
        return rs({
            path: "/accounts",
            params: { address: address }
        }, callback);
    },
    getAccountByPublicKey: function (publicKey, callback) {
        return rs({
            path: "/accounts",
            params: { publicKey: publicKey }
        }, callback);
    },
    getDelegates: function (address, callback) {
        return rs({
            path: "/accounts/delegates",
            params: { address: address }
        }, callback);
    },
    putDelegates: function (data, callback) {
        return rs({
            path: "/accounts/delegates",
            method: 'PUT',
            data: data
        }, callback);
    }
}); };
