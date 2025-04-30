const Deck = require("./deck.js");

// Four suits to represent the appearance (user interface - ui) for your cards
class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    getVal(){
        return this.value;
    }
    getName(){
        return this.name;
    }
    describe(){
        return `${this.value} of ${this.suit}`;
    }
}

module.exports = Card;