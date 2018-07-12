export declare type JSONObject = string | number | boolean | {
    [name: string]: JSONObject;
} | JSONArray;
export interface JSONArray extends ReadonlyArray<JSONObject> {
}
//# sourceMappingURL=JSONObject.d.ts.map