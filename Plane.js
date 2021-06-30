class Plane {

    flightNumber;
    passengers;
    origin;
    destination;
    crew;

    constructor(flightNumber, airline) {
        this.flightNumber = flightNumber;
        this.airline = airline;
    }

    /*boardPassenger(passenger){
        this.passengers.push(passenger)
    }*/
}

module.exports = Plane