let score = JSON.parse(localStorage.getItem('score'))  || { // convert back to javascript first then save it in local
    wins: 0,
    losses: 0,
    ties: 0,
}   
updateScoreElement();    

let isAutoPlaying = false;
let intervalID;

// using a function with forEach and arrowFunction
// const autoPlay = () => {

// };
function autoPlay() {
    if (!isAutoPlaying) {
        intervalID = setInterval(() => {
            const playerMove = pickComputerMove(); // Stored the ComputerMove function in playerMove variable
            playGame(playerMove); // Called the playGame function and passed the playerMove variable which has the pickComputerMove function which will auto play
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalID);
        isAutoPlaying = false
    }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('scissors');
})

// Using a function with forEach only
/*
function autoPlay() {
    if (!isAutoPlaying) {
        intervalID = setInterval(function() {
            const playerMove = pickComputerMove(); // Stored the ComputerMove function in playerMove variable
            playGame(playerMove); // Called the playGame function and passed the playerMove variable which has the pickComputerMove function which will auto play
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalID);
        isAutoPlaying = false
    }
}
    */

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    } else if (event.key === 'p') {
        playGame('paper');
    } else if (event.key === 's') {
        playGame('scissors');
    } 
});

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
    if (playerMove === 'rock') {
    result = 'You lose.';
    } else if (computerMove === 'paper') {
    result = 'You win.';
    } else if (computerMove === 'scissors') {
    result = 'Tie.'
    }
    } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
    result = 'You win.';
    } else if (computerMove === 'paper') {
    result = 'Tie.';
    } else if (computerMove === 'scissors') {
    result = 'You lose.';
    }

    } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
    result = 'Tie.';
    } else if (computerMove === 'paper') {
    result = 'You lose.';
    } else if (computerMove === 'scissors') {
    result = 'You win.';
    }
    }

    if (result === 'You win.') {
    score.wins += 1;
    } else if (result === 'Tie.') {
    score.ties += 1;
    } else if (result === 'You lose.') {
    score.losses += 1;
    }

    localStorage.setItem('score', JSON.stringify(score)); // convert it to JSON to save it to localstorage

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves'). innerHTML = `You 
    <img class="move-icon" src="./project-emojis/${playerMove}-emoji.png">
    <img class="move-icon" src="./project-emojis/${computerMove}-emoji.png">
    Computer`;

}

function updateScoreElement() {
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
computerMove = 'scissors';
}

return computerMove; // This line ensures the function returns the computed move
}