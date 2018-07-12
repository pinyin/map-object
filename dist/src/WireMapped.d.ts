import { JSONObject } from '@pinyin/types';
import { LeafMapper } from './LeafMapper';
import { WireMapper } from './WireMapper';
export declare type WireMapped<T, MT extends WireMapper<T>> = T extends object ? {
    [key in Extract<keyof T, keyof MT>]: MT[key] extends WireMapper<T[key]> ? WireMapped<T[key], MT[key]> : MT[key] extends LeafMapper<T[key]> ? ReturnType<MT[key]> : never;
} & {
    [key in Exclude<keyof T, keyof MT>]: T[key] extends JSONObject ? T[key] : never;
} : MT extends LeafMapper<T> ? ReturnType<MT> : never;
//# sourceMappingURL=WireMapped.d.ts.map