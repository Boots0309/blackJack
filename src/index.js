// create 2 variables, firstCard and secondCard.
// Set their values to a random number between 2 - 11

let firstCard = Math.floor((Math.random() * 10) + 2);
let secondCard = Math.floor((Math.random() * 10) + 2);
let sum = firstCard + secondCard;

console.log(sum);

if (sum < 21) {
    console.log("Would you like to draw a card?");
} else if (sum === 21) {
    console.log("You've got BlackJack!");
} else {
    console.log("You're out of the game!");
}


// check if a person is old enough to enter the night club (21)
// log a suitable message in the console for both cases

// if less than 21 log 
let message1 = "You are to young to enter the club!";
// else log
let message2 = "Welcome!";
let age = 89;

if (age >= 21) {
    console.log(message2);
} else {
    console.log(message1);
};

// Check if the person is elegible for a birthday card from the King!
// if less the 100 log "Not elegible"
// if exactly 100 log "Here is your birthday card from the king!"
// else log "Not elegible, you've already gotten one"

let ageCheck = 101;

    if (ageCheck < 100) {
        console.log("Not elegible");
    } else if (ageCheck === 100) {
        console.log("Here is your birthday card from the king!");
    } else {
        console.log("Not elegible, you've already gotten one");
    };
