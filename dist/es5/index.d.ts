import { AccountsAPI, BlocksAPI, DappsAPI, DelegatesAPI, LoaderAPI, MultiSignaturesAPI, PeersAPI, SignaturesAPI, TransactionsAPI, TransportApi, TransportHeaders } from './types/apis/';
export * from './types/beans';
export interface Rise extends APIWrapper {
    /**
     * Default Node Address: ex: http://localhost:1234 (no leading slash)
     */
    nodeAddress: string;
    /**
     * Creates a new API Wrapper with the given node address.
     * So that you can be connected to multiple nodes at once.
     * @param nodeAddress Ex: http://localhost:1234 (no leading slash)
     */
    newWrapper(nodeAddress: string): APIWrapper;
}
export interface APIWrapper {
    /**
     * Accounts APIs
     */
    accounts: AccountsAPI;
    /**
     * Blocks Query APIs
     */
    blocks: BlocksAPI;
    /**
     * Node loading status APIs
     */
    loader: LoaderAPI;
    /**
     * Transactions APIs
     */
    transactions: TransactionsAPI;
    /**
     * Peers APIs
     */
    peers: PeersAPI;
    /**
     * Signature APIs
     */
    signatures: SignaturesAPI;
    /**
     * Delegates APIs
     */
    delegates: DelegatesAPI;
    /**
     * Multi Signature Accounts APIs
     */
    multiSignatures: MultiSignaturesAPI;
    /**
     * Decentralized Apps APIs (in progress)
     */
    dapps: DappsAPI;
    /**
     * Access transport APIs
     * @param {TransportHeaders} headers
     * @returns {TransportApi}
     */
    transport: (headers: TransportHeaders) => TransportApi;
}
export declare const rise: Rise;
