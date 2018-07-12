"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var maybe_1 = require("@pinyin/maybe");
var Transform_1 = require("./Transform");
// TODO support multiple mapper?
function mapObject(from, mapper) {
    var objectKeys = tslib_1.__spread(Object.keys(from), Object.getOwnPropertySymbols(from));
    return Transform_1.isTransform(mapper) ?
        mapper(from) :
        objectKeys
            .map(function (key) {
            var _a;
            var nextFrom = from[key];
            var nextMapper = mapper[key];
            return _a = {},
                _a[key] = maybe_1.existing(nextMapper) ?
                    mapObject(nextFrom, nextMapper) :
                    from[key],
                _a;
        })
            .reduce(function (a, b) { return Object.assign(a, b); });
}
exports.mapObject = mapObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21hcE9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBc0M7QUFHdEMseUNBQXVDO0FBRXZDLGdDQUFnQztBQUNoQyxtQkFDSSxJQUFPLEVBQ1AsTUFBVTtJQUVWLElBQU0sVUFBVSxHQUFHLGlCQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ2pCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FDdEIsQ0FBQTtJQUVuQixPQUFPLHVCQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNkLFVBQVU7YUFDTCxHQUFHLENBQUMsVUFBQSxHQUFHOztZQUNKLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUMxQixJQUFNLFVBQVUsR0FBSSxNQUFjLENBQUMsR0FBRyxDQUF1QixDQUFBO1lBRTdEO2dCQUNJLEdBQUMsR0FBRyxJQUFHLGdCQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDekIsU0FBUyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDO21CQUNoQjtRQUNMLENBQUMsQ0FBQzthQUNELE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFBO0FBQ2xELENBQUM7QUF2QkQsOEJBdUJDIn0=