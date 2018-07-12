import { Transform } from './Transform';
export declare type M<T> = T extends object ? {
    [key in keyof T]?: M<T[key]> | Transform<T[key]>;
} | Transform<T> : Transform<T>;
//# sourceMappingURL=RecursiveMapper.d.ts.map