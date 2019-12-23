import { rs } from '../types/base';
import { AccountsAPI } from '../types/apis/AccountsAPI';
/**
 * @private
 * @internal
 */
export declare const accounts: (rs: rs) => AccountsAPI;
export interface Account {
    address: string;
    unconfirmedBalance: string;
    balance: string;
    publicKey: string;
    unconfirmedSignature: number;
    secondSignature: number;
    secondPublicKey: string;
    multisignatures: any[];
    u_multisignatures: any[];
}
