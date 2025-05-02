class Hand {
    hand = [];

    constructor(name){
        this.name = name;
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
        let card = this.hand.shift();   // removes a card from the player's hand and stores it
        return card;
    }

    draw(deck){
        let card = deck.draw();
        this.hand.push(card);   // adds a card to the player's hand
    }

    incrementScore(){
        this.score++;
    }
}

module.exports = Hand;