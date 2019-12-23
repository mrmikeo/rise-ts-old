export interface BaseApiResponse {
    success: boolean;
}
export declare type cback<T> = (err: Error | null, resp?: T & BaseApiResponse) => void;
export declare type rs = <R>(obj: {
    noApiPrefix?: boolean;
    headers?: any;
    params?: any;
    path: string;
    method?: string;
    data?: any;
}, cback: cback<R>) => Promise<R & BaseApiResponse>;
export declare type ApiPromise<T> = Promise<T & BaseApiResponse>;
