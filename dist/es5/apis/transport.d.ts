import { rs } from '../types/base';
import { TransportApi, TransportHeaders } from '../types/apis/TransportAPI';
export declare const transport: (rs: rs) => (headers: TransportHeaders) => TransportApi;
