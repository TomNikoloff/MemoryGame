
const genCards = document.querySelector('#genBtn');
let cardCover = document.getElementsByClassName('cardCover');
let cards = document.querySelectorAll('.card');
let testDiv = document.querySelector('#testDiv');
let testCard = document.querySelector('#test');
let result = document.querySelector('#memGame-Result');
const imgArray = ['img/lolaOne.jpg','img/lolaTwo.jpg', 'img/lolaTHree.jpg'];

let cardCovers = [...cardCover];

let allCards = [...cards];

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


/*

function gameResult(firstCard, secondCard) {
    if (firstCard.src === secondCard.src) {
        result.appendChild(document.createTextNode('You Win'));
    } else {
        result.appendChild(document.createTextNode('You Lost'));
    }
}

*/

for (let i = 0; i < cardCover.length; i++) {
   cardCover[i].addEventListener('click', displayCard);
};



function displayCard() {
    this.classList.toggle("open");
}

