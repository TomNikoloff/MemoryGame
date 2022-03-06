let flippedCards = [];
let moves = 0;
let counter = document.querySelector('.moves');

const genCards = document.querySelector('#genBtn');
let cardCover = document.querySelectorAll('.cardCover');
let cards = document.querySelectorAll('.card');
let result = document.querySelector('#memGame-Result');

const imgItems = [
    {src: "img/lolaOne.jpg"},
    {src: "img/lolaTwo.jpg"},
    {src: "img/lolaTHree.jpg"},
  ];

const imgId = ['lolaOne', 'lolaTwo', 'lolaThree'];

//All items in imgItems & imgId doubled. All items now appear twice
const doubleImgItems = imgItems.concat(imgItems);
const doubleImgId = imgId.concat(imgId);


//Cards shuffled on page refresh
document.body.onload = startGame();


function startGame() {
    let shuffleCounter = 0;

    while (doubleImgItems.length) {
        
        // Pick random element
        const randomIndex = Math.floor(Math.random() * doubleImgItems.length);
        const randomCard = doubleImgItems[randomIndex];
        const randomCardCover = doubleImgId[randomIndex];
        
        // Remove element
        doubleImgItems.splice(randomIndex, 1);
        doubleImgId.splice(randomIndex, 1);
        
        cards[shuffleCounter].src = randomCard.src;
        cardCover[shuffleCounter].setAttribute('id', randomCardCover);
        shuffleCounter++;
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
    let length = flippedCards.length;
    if (length === 2) {
        movesCounter();
        if (flippedCards[0].id === flippedCards[1].id) {
            matchedCards();
        } else {
            unmatchedCards();
        }
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

function movesCounter() {
    moves++
    counter.textContent = moves;
    if (moves == 1) {
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
}

let second = 0,
minute = 0,
hour = 0;

let timer = document.querySelector('.timer');

function startTimer() {
    timer.textContent = minute + "mins " + second + "secs"
    second++;
    if (second == 60) {
        minute++;
        second = 0;
    }
    if (minute == 60) {
        hour++;
        minute = 0;
    }
}


