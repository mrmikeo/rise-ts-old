"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 * @internal
 */
exports.multiSignatures = function (rs) { return ({
    getPending: function (publicKey, callback) {
        return rs({
            path: '/multisignatures/pending',
            params: {
                publicKey: publicKey
            },
            method: 'GET'
        }, callback);
    },
    createMultiSigAccount: function (sig, callback) {
        return rs({
            path: '/multisignatures',
            method: 'PUT',
            data: {
                secret: sig.secret,
                lifetime: sig.lifetime,
                min: sig.min,
                keysgroup: sig.publicKeys
            }
        }, callback);
    },
    sign: function (obj, callback) {
        return rs({
            path: '/multisignatures/sign',
            method: 'POST',
            data: {
                secret: obj.secret,
                publicKey: obj.publicKey,
                transactionId: obj.transactionId
            }
        }, callback);
    },
    getAccounts: function (publicKey, callback) {
        return rs({
            path: '/multisignatures/accounts',
            params: { publicKey: publicKey },
            method: 'GET'
        }, callback);
    }
}); };
