const Plane = require('./Plane');
const Passenger = require('./Passenger');

describe('Plane', () => {
    test('Constructs plane with flight number & airline', () => {
        const LA727 = new Plane('LA727', 'Delta');
        expect(LA727.flightNumber).toBe('LA727', 'Delta');
    })


/* const lindsey = new Passenger("Lindsey")
const thomas = new Passenger("Thomas")

    test('Plane has passengers', ()=>{
        const exPlane = new Plane('LA727', 'Delta');
        exPlane.boardPassenger(lindsey);
        exPlane.boardPassenger(thomas);
        expect(exPlane.passengers.length).toBe(2);
    })*/
}); 