import {mapObject} from './mapObject'

export const SomeSymbol = Symbol('SomeSymbol')

const from = {
    name: 'bill',
    friends: ['bob'],
    age: 111,
    bio: {
        location: 'earth',
        [SomeSymbol]: 1,
    },
}

describe(`${mapObject.name}`, () => {
    it(`should apply mapper to object`, () => {
        const increasedAge = {
            age: (value: number) => value + 1,
        }
        const addFriend = {
            friends: (v: Array<string>) => [...v, 'alice'],
        }
        expect(mapObject(from, increasedAge).bio.location).toEqual('earth')
        expect(mapObject(from, increasedAge).age).toEqual(112)
        expect(mapObject(from, addFriend).friends).toEqual(['bob', 'alice'])
    })

    it(`should apply mapper recursively`, () => {
        const changeSymbol = {
            bio: {
                [SomeSymbol]: () => 2,
            },
        }
        expect(mapObject(from, changeSymbol).bio.location).toEqual('earth')
        expect(mapObject(from, changeSymbol).bio[SomeSymbol]).toEqual(2)
    })
})
