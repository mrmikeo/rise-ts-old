"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transport = function (rs) {
    return function (headers) { return ({
        getHeight: function (cback) {
            return rs({
                noApiPrefix: true,
                path: 'peer/height',
                headers: headers
            }, cback);
        },
        listPeers: function (cback) {
            return rs({
                noApiPrefix: true,
                path: 'peer/list',
                headers: headers
            }, cback);
        },
        ping: function (cback) {
            return rs({
                noApiPrefix: true,
                path: 'peer/ping',
                headers: headers
            }, cback);
        },
        postTransaction: function (transaction, cback) {
            return rs({
                noApiPrefix: true,
                path: 'peer/transactions',
                method: 'POST',
                data: { transaction: transaction },
                headers: headers
            }, cback);
        },
        postTransactions: function (transactions, cback) {
            return rs({
                noApiPrefix: true,
                path: 'peer/transactions',
                method: 'POST',
                data: { transactions: transactions },
                headers: headers
            }, cback);
        },
        postSignature: function (signature, cback) {
            return rs({
                noApiPrefix: true,
                path: 'peer/signatures',
                method: 'POST',
                data: (function () {
                    if (Array.isArray(signature)) {
                        return { signatures: signature };
                    }
                    else {
                        return { signature: signature };
                    }
                })(),
                headers: headers
            }, cback);
        }
    }); };
};
