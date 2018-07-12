"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _a;
var mapObject_1 = require("./mapObject");
exports.SomeSymbol = Symbol('SomeSymbol');
var from = {
    name: 'bill',
    friends: ['bob'],
    age: 111,
    bio: (_a = {
            location: 'earth'
        },
        _a[exports.SomeSymbol] = 1,
        _a),
};
describe("" + mapObject_1.mapObject.name, function () {
    it("should apply mapper to object", function () {
        var increasedAge = {
            age: function (value) { return value + 1; },
        };
        var addFriend = {
            friends: function (v) { return tslib_1.__spread(v, ['alice']); },
        };
        expect(mapObject_1.mapObject(from, increasedAge).bio.location).toEqual('earth');
        expect(mapObject_1.mapObject(from, increasedAge).age).toEqual(112);
        expect(mapObject_1.mapObject(from, addFriend).friends).toEqual(['bob', 'alice']);
    });
    it("should apply mapper recursively", function () {
        var _a;
        var changeSymbol = {
            bio: (_a = {},
                _a[exports.SomeSymbol] = function () { return 2; },
                _a),
        };
        expect(mapObject_1.mapObject(from, changeSymbol).bio.location).toEqual('earth');
        expect(mapObject_1.mapObject(from, changeSymbol).bio[exports.SomeSymbol]).toEqual(2);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwT2JqZWN0LnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbWFwT2JqZWN0LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHlDQUFxQztBQUV4QixRQUFBLFVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7QUFFOUMsSUFBTSxJQUFJLEdBQUc7SUFDVCxJQUFJLEVBQUUsTUFBTTtJQUNaLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQztJQUNoQixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUc7WUFDQyxRQUFRLEVBQUUsT0FBTzs7UUFDakIsR0FBQyxrQkFBVSxJQUFHLENBQUM7V0FDbEI7Q0FDSixDQUFBO0FBRUQsUUFBUSxDQUFDLEtBQUcscUJBQVMsQ0FBQyxJQUFNLEVBQUU7SUFDMUIsRUFBRSxDQUFDLCtCQUErQixFQUFFO1FBQ2hDLElBQU0sWUFBWSxHQUFHO1lBQ2pCLEdBQUcsRUFBRSxVQUFDLEtBQWEsSUFBSyxPQUFBLEtBQUssR0FBRyxDQUFDLEVBQVQsQ0FBUztTQUNwQyxDQUFBO1FBQ0QsSUFBTSxTQUFTLEdBQUc7WUFDZCxPQUFPLEVBQUUsVUFBQyxDQUFnQixJQUFLLHdCQUFJLENBQUMsR0FBRSxPQUFPLElBQWQsQ0FBZTtTQUNqRCxDQUFBO1FBQ0QsTUFBTSxDQUFDLHFCQUFTLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDbkUsTUFBTSxDQUFDLHFCQUFTLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN0RCxNQUFNLENBQUMscUJBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDeEUsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsaUNBQWlDLEVBQUU7O1FBQ2xDLElBQU0sWUFBWSxHQUFHO1lBQ2pCLEdBQUc7Z0JBQ0MsR0FBQyxrQkFBVSxJQUFHLGNBQU0sT0FBQSxDQUFDLEVBQUQsQ0FBQzttQkFDeEI7U0FDSixDQUFBO1FBQ0QsTUFBTSxDQUFDLHFCQUFTLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDbkUsTUFBTSxDQUFDLHFCQUFTLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxrQkFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDcEUsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9