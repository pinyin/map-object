import { JSONObject } from '@pinyin/types';
import { Transform } from './Transform';
import { Mapper } from './Mapper';
export declare type MappedObject<T, MT extends Mapper<T>> = T extends object ? {
    [key in Extract<keyof T, keyof MT>]: MT[key] extends Transform<T[key]> ? ReturnType<MT[key]> : MT[key] extends Mapper<T[key]> ? MappedObject<T[key], MT[key]> : never;
} & {
    [key in Exclude<keyof T, keyof MT>]: T[key] extends JSONObject ? T[key] : never;
} : MT extends Transform<T> ? ReturnType<MT> : never;
//# sourceMappingURL=MappedObject.d.ts.map