import {JSONObject} from '@pinyin/types'
import {Mapper} from './Mapper'
import {Transform} from './Transform'

export type Mapped<T, MT extends Mapper<T>> =
    T extends object ?
        {
            [key in Extract<keyof T, keyof MT>]:
            MT[key] extends Transform<T[key]> ?
                ReturnType<MT[key]> :
                MT[key] extends Mapper<T[key]> ?
                    Mapped<T[key], MT[key]> :
                    never
        } &
        {
            [key in Exclude<keyof T, keyof MT>]:
            T[key] extends JSONObject ?
                T[key] :
                never
        } :
        MT extends Transform<T> ?
            ReturnType<MT> :
            never

