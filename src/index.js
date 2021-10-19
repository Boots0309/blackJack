// create 2 variables, firstCard and secondCard.
// Set their values to a random number between 2 - 11
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let sum = 0;

function getRandomCard() {

    let randomCard = Math.floor( Math.random() * 13) + 1;

    if (randomCard > 10) {
        return 10;
    } else if (randomCard === 1) {
        return 11;
    } else {
        return randomCard;
    }
};


function startGame() {

    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
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
    let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard);
    console.log(cards);
    startGame();
}
