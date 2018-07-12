import { WireMapped } from './WireMapped';
import { WireMapper } from './WireMapper';
export declare type WireSerializer<T, MT extends WireMapper<T>> = {
    serialize: (from: T) => WireMapped<T, MT>;
    deserialize: (from: WireMapped<T, MT>) => T;
};
//# sourceMappingURL=WireSerializer.d.ts.map