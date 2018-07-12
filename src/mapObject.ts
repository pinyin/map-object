import {existing} from '@pinyin/maybe'
import {Mapped} from './Mapped'
import {Mapper} from './Mapper'
import {isTransform} from './Transform'

// TODO support multiple mapper?
export function mapObject<T, MT extends Mapper<T>>(
    from: T,
    mapper: MT,
): Mapped<T, MT> {
    const objectKeys = [
        ...Object.keys(from),
        ...Object.getOwnPropertySymbols(from),
    ] as Array<keyof T>

    return isTransform(mapper) ?
        mapper(from) :
        objectKeys
            .map(key => {
                const nextFrom = from[key]
                const nextMapper = (mapper as any)[key] as Mapper<T[keyof T]>

                return {
                    [key]: existing(nextMapper) ?
                        mapObject(nextFrom, nextMapper) :
                        from[key],
                }
            })
            .reduce((a, b) => Object.assign(a, b))
}
