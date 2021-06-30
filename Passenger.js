const Person = require('./Person')

class Passenger extends Person {
    constructor(name){
		super(name)
        this.name = name;
	}
    callAttendant() {
        return 'Excuse me!';
    }
}

module.exports = Passenger;