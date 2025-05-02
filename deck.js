const Card = require("./card.js");

class Deck{
    deck = [];
    cardSuits = [
        "Spades 🗡️",
        "Hearts ❤️",
        "Diamonds 💎",
        "Clubs 🍀"
    ];
    cardValues = [
        { name: "Two", value: 2 },
        { name: "Three", value: 3 },
        { name: "Four", value: 4 },
        { name: "Five", value: 5 },
        { name: "Six", value: 6 },
        { name: "Seven", value: 7 },
        { name: "Eight", value: 8 },
        { name: "Nine", value: 9 },
        { name: "Ten", value: 10 },
        { name: "Jack", value: 11 },
        { name: "Queen", value: 12 },
        { name: "King", value: 13 },
        { name: "Ace", value: 14 }
    ];

    // create cards and push them into the deck
    constructor(){
        for (const suit of this.cardSuits){
            for (const cardValue of this.cardValues){
                const card = new Card(cardValue.value, suit);
                this.deck.push(card);
            }
        }
    }

    shuffle() {
        // Fisher-Yates shuffle
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
        return this.deck;
    }

    draw(){
        let card = this.deck.shift();   // removes a card from the front of the array
        return card;        
    }
};

module.exports = Deck;