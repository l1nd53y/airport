const Person = require('./Person')

class Crew extends Person {
    constructor(name){
		super(name)
	}
    OfferRefreshments() {
        return 'Any refreshments?';
    }
}

module.exports = Crew;