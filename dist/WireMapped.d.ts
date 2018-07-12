import { JSONObject } from '@pinyin/types';
import { Mapper } from './LeafMapper';
import { RecursiveMapper } from './WireMapper';
export declare type WireMapped<T, MT extends RecursiveMapper<T>> = T extends object ? {
    [key in Extract<keyof T, keyof MT>]: MT[key] extends RecursiveMapper<T[key]> ? WireMapped<T[key], MT[key]> : MT[key] extends Mapper<T[key]> ? ReturnType<MT[key]> : never;
} & {
    [key in Exclude<keyof T, keyof MT>]: T[key] extends JSONObject ? T[key] : never;
} : MT extends Mapper<T> ? ReturnType<MT> : never;
//# sourceMappingURL=WireMapped.d.ts.map