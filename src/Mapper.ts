import {Transform} from './Transform'

export type Mapper<T> =
    T extends object ?
        Transform<T> | { [key in keyof T]?: Mapper<T[key]> | Transform<T[key]> } :
        Transform<T>
