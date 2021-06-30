const Passenger = require('./Person')

describe('Passenger', function () {
    test('Passenger has a name', function () {
        const person = new Passenger("Lindsey");
        expect(person.name).toEqual("Lindsey");
    })

    test('is an instance of a Passenger', () => {
        const thomas = new Passenger('Thomas')
        expect(thomas instanceof Passenger).toBeTruthy()
    })
});