
const genCards = document.querySelector('#genBtn');
let cardCover = document.querySelectorAll('.cardCover');
let cards = document.querySelectorAll('.card');
let testDiv = document.querySelector('#testDiv');
let testCard = document.querySelector('#test');
let result = document.querySelector('#memGame-Result');
const imgArray = ['img/lolaOne.jpg','img/lolaTwo.jpg', 'img/lolaTHree.jpg'];


function randomNum() {
    return Math.floor(Math.random() * 3);
}

function generateCards() {
    for (let i = 0; cards.length; i++) {
        cards[i].src = imgArray[randomNum()];
    }
}

genCards.addEventListener('click', generateCards);




function memoryGame(cardOne, cardTwo) {
    let firstCard, secondCard;

    firstCard
    secondCard
}

function memGameFrontEnd(card) {
    
}

function gameResult(firstCard, secondCard) {
    if (firstCard.src === secondCard.src) {
        result.appendChild(document.createTextNode('You Win'));
    } else {
        result.appendChild(document.createTextNode('You Lost'));
    }
}
/*
for (let i = 0; i < cardCover.length; i++) {
    cardCover[i].addEventListener('click', displayCard);
};

function displayCard() {
    this.
}
*/

cardCover[0].addEventListener('click', function() {
    cards[0].style.zIndex = 100;
});

cardCover[1].addEventListener('click', function() {
    cards[1].style.zIndex = 100;
});

cardCover[2].addEventListener('click', function() {
    cards[2].style.zIndex = 100;
});

cardCover[3].addEventListener('click', function() {
    cards[3].style.zIndex = 100;
});

cardCover[4].addEventListener('click', function() {
    cards[4].style.zIndex = 100;
});

cardCover[5].addEventListener('click', function() {
    cards[5].style.zIndex = 100;
});
