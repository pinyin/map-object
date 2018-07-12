export type Transform<T> = (from: T) => any

export function isTransform(obj: any): obj is Transform<any> {
    return typeof obj === 'function'
}
