import { Mapper } from './LeafMapper';
export declare type WireMapper<T> = T extends object ? {
    [key in keyof T]: WireMapper<T[key]> | Mapper<T[key]>;
} | Mapper<T> : Mapper<T>;
//# sourceMappingURL=WireMapper.d.ts.map