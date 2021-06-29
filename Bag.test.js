const Bag = require('./Bag')

describe('Bag', function () {
    test('Has a weight&color', function () {
        const bag = new Bag(45, "yellow");
        expect(bag.weight).toBe(45);
        expect(bag.color).toBe("yellow");
    });
});