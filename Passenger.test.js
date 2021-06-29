const Passenger = require('./Passenger')

describe('Passenger', function () {
    test('Passenger has a name', function () {
        const person = new Passenger("Lindsey");
        expect(person.name).toEqual("Lindsey");
    })
});