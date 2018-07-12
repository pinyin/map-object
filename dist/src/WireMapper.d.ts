import { LeafMapper } from './LeafMapper';
export declare type WireMapper<T> = T extends object ? {
    [key in keyof T]: WireMapper<T[key]> | LeafMapper<T[key]>;
} | LeafMapper<T> : LeafMapper<T>;
//# sourceMappingURL=WireMapper.d.ts.map