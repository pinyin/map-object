import { Mapper } from './Mapper';
export declare type RecursiveMapper<T> = T extends object ? {
    [key in keyof T]?: RecursiveMapper<T[key]> | Mapper<T[key]>;
} | Mapper<T> : Mapper<T>;
//# sourceMappingURL=RecursiveMapper.d.ts.map