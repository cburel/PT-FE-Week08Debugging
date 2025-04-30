const Deck = require("./deck.js");
const Hand = require("./hand.js");

// init
let deck = new Deck();
let p1 = new Hand('Bob');
let p2 = new Hand('Sally');

// shuffle a standard deck of cards
deck.shuffle(deck);

// divide the cards evenly among the players
for (let i = 0; i < deck.length - 1; i++){
    p1.draw(deck);
    p2.draw(deck);
}

// compare values; award 1 point to whoever card's value is higher or print a tie message
for (let i = 0; i < deck.length - 1; i++){
    // flip the cards
    c1 = p1.flip();
    console.log(`${p1.getName()} drew the ${c1.describe()}`);
    c1 = p2.flip();
    console.log(`${p2.getName()} drew the ${c2.describe()}`);
    // compare the values
    if(c1.getValue() > c2.getValue()){
        p1.incrementScore();
        console.log(`${p1.getName()} gets a point! Score: ${p1.getScore()}}`);
    }
    else if(c2.getValue() > c1.getValue()){
        p2.incrementScore();
        console.log(`${p2.getName()} gets a point! Score: ${p2.getScore()}`);
    }
    else {
        console.log(`It's a tie! No point was awarded.`);
    }
}

// compare final scores
let p1FinalScore = p1.getScore();
let p2FinalScore = p2.getScore();

// print final scores and declare winner
console.log(`------------------`);
console.log(`${p1.getName()}'s final score: ${p1.getScore}`);
console.log(`${p2.getName()}'s final score: ${p2.getScore}`);
if (p1FinalScore > p2FinalScore){
    console.log(`${p1.getName()} wins!`);
}
else if (p2FinalScore > p1FinalScore){
    console.log(`${p2.getName()} wins!`);
}
else {
    console.log(`It's a draw!`);
}