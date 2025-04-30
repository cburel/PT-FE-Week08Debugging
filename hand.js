const Card = require("./card.js");
const Deck = require("./deck.js");

class Hand {
    hand = [];

    constructor(name){
        this.name = 0;
        this.score = 0;
    }
    getName(){
        return this.name;
    }
    getScore(){
        return this.score;
    }
    describe(hand){
        console.log(`${this.name}'s cards:`);
        for (let card of hand){
            console.log(card);
        }
    }
    flip(){
        let card = this.hand.shift();
        return card;
    }
    draw(deck){
        let card = deck.draw();
        this.hand.push(card);
    }
    incrementScore(){
        this.score++;
    }
}

module.exports = Hand;