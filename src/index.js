// create 2 variables, firstCard and secondCard.
// Set their values to a random number between 2 - 11

let firstCard = Math.floor((Math.random() * 10) + 2);
let secondCard = Math.floor((Math.random() * 10) + 2);
let cards = [firstCard, secondCard]
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let sum = firstCard + secondCard;

function startGame() {
    cardDeal();
}

function cardDeal() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Would you like to draw a card?";
    } else if (sum === 21) {
        message = "You've got BlackJack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
};

function cardDraw() {
    let thirdCard = Math.floor((Math.random() * 10) + 2);
    sum += thirdCard;
    cards.push(thirdCard);
    console.log(cards);
    startGame();
}
