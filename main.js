const Deck = require("./deck.js");
const Hand = require("./hand.js");

// init
let deck = new Deck();
let p1 = new Hand('Bob');
let p2 = new Hand('Sally');

// shuffle a standard deck of cards
deck.shuffle();

// divide the cards evenly among the players
let halfDeck = deck.deck.length / 2;    // each player should only have 26 cards, so only iterate 26 times
for (let i = 0; i < halfDeck; i++){
    p1.draw(deck);
    p2.draw(deck);
}

// to store cards played in the current round
let p1PlayedCard = null;
let p2PlayedCard = null;

// compare values; award 1 point to whoever card's value is higher or print a tie message
for (let i = 0; i < p1.hand.length; i++){

    // flip the cards/get the card to compare
    console.log(`Round ${i + 1}: `);    // for easier round tracking/debugging, but also nice flavor text
    p1PlayedCard = p1.hand[i];
    console.log(`${p1.getName()} drew the ${p1PlayedCard.describe()}`);
    p2PlayedCard = p2.hand[i];
    console.log(`${p2.getName()} drew the ${p2PlayedCard.describe()}`);

    // compare the values and award a point if not a tie
    if(p1PlayedCard.getValue() > p2PlayedCard.getValue()){
        p1.incrementScore();
        console.log(`${p1.getName()} gets a point! Score: ${p1.getScore()}`);
    }
    else if(p2PlayedCard.getValue() > p1PlayedCard.getValue()){
        p2.incrementScore();
        console.log(`${p2.getName()} gets a point! Score: ${p2.getScore()}`);
    }
    else {
        console.log(`It's a tie! No point was awarded.`);
    }
}

// get final scores to compare
let p1FinalScore = p1.getScore();
let p2FinalScore = p2.getScore();

// compare, print final scores and declare winner if not a tie
console.log(`------------------`);
console.log(`${p1.getName()}'s final score: ${p1FinalScore}`);
console.log(`${p2.getName()}'s final score: ${p2FinalScore}`);
if (p1FinalScore > p2FinalScore){
    console.log(`${p1.getName()} wins!`);
}
else if (p2FinalScore > p1FinalScore){
    console.log(`${p2.getName()} wins!`);
}
else {
    console.log(`It's a draw!`);
}