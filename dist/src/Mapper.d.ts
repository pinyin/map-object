import { Transform } from './Transform';
export declare type Mapper<T> = T extends object ? Transform<T> | {
    [key in keyof T]?: Mapper<T[key]> | Transform<T[key]>;
} : Transform<T>;
//# sourceMappingURL=Mapper.d.ts.map