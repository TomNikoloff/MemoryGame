let flippedCards = [];


const genCards = document.querySelector('#genBtn');
let cardCover = document.querySelectorAll('.cardCover');
let cards = document.querySelectorAll('.card');
let result = document.querySelector('#memGame-Result');
const imgArray = ['img/lolaOne.jpg','img/lolaTwo.jpg', 'img/lolaTHree.jpg'];
const imgId = ['lolaOne', 'lolaTwo', 'lolaThree'];



function randomNum() {
    return Math.floor(Math.random() * 3);
}

/*Card is given a random source and cardCover is given a ID to match*/

function generateCards() {
    for (let i = 0; cards.length; i++) {
        let random = randomNum();
        cards[i].src = imgArray[random];
        cardCover[i].setAttribute('id', imgId[random]);
    }
}

/*
genCards.addEventListener('click', generateCards);
*/


for (let i = 0; i < cardCover.length; i++) {
   cardCover[i].addEventListener('click', displayCard);
   cardCover[i].addEventListener('click', checkPair);
};

function displayCard() {
    this.classList.toggle("open");
    this.classList.toggle("disableClick");
}

function checkPair() {

    flippedCards.push(this);

    if (flippedCards[0].id === flippedCards[1].id) {
        matchedCards();
    } else {
        unmatchedCards();
    }
}

function matchedCards() {
    console.log('matched');
    let cardOne = flippedCards[0].children[0];
    cardOne.classList.add('matched');
    let cardTwo = flippedCards[1].children[0];
    cardTwo.classList.add('matched');

    flippedCards = [];

}

function unmatchedCards() {
    console.log('unmatched');

    flippedCards[0].classList.add("unmatched");
    flippedCards[1].classList.add("unmatched");

    setTimeout( function() {
        for (let i = 0; i < flippedCards.length; i++) {
            flippedCards[i].classList.remove("open", "disableClick");
        }
        flippedCards = [];
    }, 1200)




}


function message(x) {
    alert(x);
}