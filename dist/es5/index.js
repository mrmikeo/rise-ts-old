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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
__export(require("./types/beans"));
var apis_1 = require("./apis/");
var requester = function (nodeAddress) { return function (obj, cback) {
    return axios_1.default(__assign({ url: nodeAddress + "/" + (obj.noApiPrefix ? '' : 'api') + obj.path, json: true, timeout: 4000 }, obj))
        .then(function (resp) {
        if (resp.data.success == false) {
            return Promise.reject(new Error(resp.data.error || resp.data.message));
        }
        return resp.data;
    })
        .then(function (a) {
        if (typeof (cback) !== 'undefined') {
            cback(null, a);
        }
        return a;
    })
        .catch(function (err) {
        if (typeof (cback) !== 'undefined') {
            cback(err);
        }
        return Promise.reject(err);
    });
}; };
exports.rise = (function () {
    var toRet = {
        nodeAddress: '',
        newWrapper: function (nodeAddress) {
            return {
                accounts: apis_1.accounts(requester(nodeAddress)),
                loader: apis_1.loader(requester(nodeAddress)),
                transactions: apis_1.transactions(requester(nodeAddress)),
                peers: apis_1.peers(requester(nodeAddress)),
                blocks: apis_1.blocks(requester(nodeAddress)),
                signatures: apis_1.signatures(requester(nodeAddress)),
                delegates: apis_1.delegates(requester(nodeAddress)),
                multiSignatures: apis_1.multiSignatures(requester(nodeAddress)),
                dapps: apis_1.dapps(requester(nodeAddress)),
                transport: apis_1.transport(requester(nodeAddress))
            };
        }
    };
    function rproxy(obj, cback) {
        return requester(toRet.nodeAddress).apply(null, arguments);
    }
    toRet.accounts = apis_1.accounts(rproxy);
    toRet.loader = apis_1.loader(rproxy);
    toRet.transactions = apis_1.transactions(rproxy);
    toRet.peers = apis_1.peers(rproxy);
    toRet.blocks = apis_1.blocks(rproxy);
    toRet.signatures = apis_1.signatures(rproxy);
    toRet.delegates = apis_1.delegates(rproxy);
    toRet.multiSignatures = apis_1.multiSignatures(rproxy);
    toRet.dapps = apis_1.dapps(rproxy);
    toRet.transport = apis_1.transport(rproxy);
    return toRet;
})();
