let flippedCards = [];


const genCards = document.querySelector('#genBtn');
let cardCover = document.querySelectorAll('.cardCover');
let cards = document.querySelectorAll('.card');
let result = document.querySelector('#memGame-Result');
const imgArray = ['img/lolaOne.jpg','img/lolaTwo.jpg', 'img/lolaTHree.jpg'];


//imgArray with each item appearing twice
const doubleImgArray = imgArray.concat(imgArray); 

const imgId = ['lolaOne', 'lolaTwo', 'lolaThree'];

const doubleImgId = imgId.concat(imgId);



function generateCards() {
    while (doubleImgArray.length) {
        const randomNum = Math.floor(Math.random() * doubleImgArray.length);
        const randomCard = doubleImgArray[randomNum];
        const randomId = doubleImgId[randomNum];

        doubleImgArray.splice(randomNum, 1);
        doubleImgId.splice(randomNum, 1);

        cards[randomNum].src = randomCard;
        cardCover[randomNum].setAttribute('id', randomId);
        /*
        for (let i = 0; i < cards.length; i++) {
            cards[i].src = randomCard;
        }
        */
    }
}


genCards.addEventListener('click', generateCards);



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

    let cardOne = flippedCards[0].children[0];
    cardOne.classList.add("unmatched");
    let cardTwo = flippedCards[1].children[0];
    cardTwo.classList.add("unmatched");

    setTimeout( function() {
        for (let i = 0; i < flippedCards.length; i++) {
            flippedCards[i].classList.remove("open", "disableClick");
        }
        cardOne.classList.remove("unmatched");
        cardTwo.classList.remove("unmatched");
        flippedCards = [];
    }, 1200)
}


function message(x) {
    alert(x);
}