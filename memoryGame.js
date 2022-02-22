let flippedCards = [];


const genCards = document.querySelector('#genBtn');
let cardCover = document.querySelectorAll('.cardCover');
let cards = document.querySelectorAll('.card');
let result = document.querySelector('#memGame-Result');
const imgArray = ['img/lolaOne.jpg','img/lolaTwo.jpg', 'img/lolaTHree.jpg'];


/*
function randomNum() {
    return Math.floor(Math.random() * 3);
}

function generateCards() {
    for (let i = 0; cards.length; i++) {
        cards[i].src = imgArray[randomNum()];
    }
}

genCards.addEventListener('click', generateCards);
*/


for (let i = 0; i < cardCover.length; i++) {
   cardCover = cardCover[i];
   cardCover.addEventListener('click', displayCard);
   cardCover.addEventListener('click', checkPair);
};

function displayCard() {
    this.classList.toggle("open");
    this.classList.toggle("disableClick");
}

function checkPair() {

/*need to push child of cardCover*/
    flippedCards.push(this);

    if (flippedCards[0].src === flippedCards[1].src) {
        matchedCards();
    } else {
        unmatchedCards();
    }
}

function matchedCards() {

}

function unmatchedCards() {

}
