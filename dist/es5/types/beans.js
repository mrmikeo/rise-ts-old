"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["SEND"] = 0] = "SEND";
    TransactionType[TransactionType["SIGNATURE"] = 1] = "SIGNATURE";
    TransactionType[TransactionType["DELEGATE"] = 2] = "DELEGATE";
    TransactionType[TransactionType["VOTE"] = 3] = "VOTE";
    TransactionType[TransactionType["MULTI"] = 4] = "MULTI";
    TransactionType[TransactionType["DAPP"] = 5] = "DAPP";
    TransactionType[TransactionType["IN_TRANSFER"] = 6] = "IN_TRANSFER";
    TransactionType[TransactionType["OUT_TRANSFER"] = 7] = "OUT_TRANSFER";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
var PeerState;
(function (PeerState) {
    PeerState[PeerState["BANNED"] = 0] = "BANNED";
    PeerState[PeerState["DISCONNECTED"] = 1] = "DISCONNECTED";
    PeerState[PeerState["ACTIVE"] = 2] = "ACTIVE";
})(PeerState = exports.PeerState || (exports.PeerState = {}));
