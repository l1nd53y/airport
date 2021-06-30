const Person = require('./Person')
const Passenger = require('./Passenger')
const Crew = require('./Crew')

const lindsey = new Passenger('Lindsey')

test('Call attendant', () => {
    expect(lindsey.callAttendant()).toEqual("Excuse me!")
})

test('Confirmed passenger', () => {
    expect(lindsey instanceof Passenger).toBeTruthy()
})

const thomas = new Crew('Thomas')

test('Confirmed member of crew', () => {
    expect(thomas instanceof Crew).toBeTruthy()
})

test('Offered refreshments', () => {
    expect(thomas.OfferRefreshments()).toEqual("Any refreshments?")
})

test('Add bag successfully', () => {
    expect(thomas.addBag()).toEqual(1);
})