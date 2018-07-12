import { WireMapped } from './WireMapped';
import { WireMapper } from './WireMapper';
export declare function onWire<T, MT extends WireMapper<T>>(translator: MT): (from: T) => WireMapped<T, MT>;
//# sourceMappingURL=onWire.d.ts.map