const Plane = require('./plane');

describe('Plane', () => {
    test('Constructs plane with flight number & airline', () => {
        const LA727 = new Plane('LA727', 'Delta');
        expect(LA727.flightNumber).toBe('LA727', 'Delta');
    })
});