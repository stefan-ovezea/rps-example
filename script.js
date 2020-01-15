const playerSelect = document.getElementById('player-select');
const reset = document.getElementById('reset');
const resultDisplay = document.getElementById('result');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

const choices = {
  rock: 'rock',
  paper: 'paper',
  scissors: 'scissors'
};

const resultTypes = {
  tie: 'tie',
  player1Wins: 'player1Wins',
  player2Wins: 'player2Wins'
};

let playerScore = 0;
let computerScore = 0;
playerScoreDisplay.innerText = playerScore;
computerScoreDisplay.innerText = computerScore;

const bestOfTimes = 3;

function calculateMaxScore() {
  return Math.ceil(bestOfTimes / 2);
}

playerSelect.addEventListener('change', (event) => {
  if (playerScore === calculateMaxScore() || computerScore === calculateMaxScore()) {
    return;
  }

  const playerChoice = event.target.value;
  const computerChoice = getRandomChoice();

  const result = play(playerChoice, computerChoice);
  if (result === resultTypes.player1Wins) {
    playerScore++;
  } else if (result === resultTypes.player2Wins) {
    computerScore++;
  }

  playerScoreDisplay.innerText = playerScore;
  computerScoreDisplay.innerText = computerScore;

  if (playerScore === calculateMaxScore()) {
    resultDisplay.innerText = 'player wins';
  } else if (computerScore === calculateMaxScore()) {
    resultDisplay.innerText = 'computer wins';
  }
});

reset.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  resultDisplay.innerText = '';
  playerScoreDisplay.innerText = playerScore;
  computerScoreDisplay.innerText = computerScore;
});

function play(player1Choice, player2Choice) {
  let result;

  if (player1Choice === player2Choice) {
    result = resultTypes.tie;
  }

  if (player1Choice === choices.paper && player2Choice === choices.rock) {
    result = resultTypes.player1Wins;
  }

  if (player1Choice === choices.paper && player2Choice === choices.scissors) {
    result = resultTypes.player2Wins;
  }

  if (player1Choice === choices.scissors && player2Choice === choices.rock) {
    result = resultTypes.player2Wins;
  }

  if (player1Choice === choices.scissors && player2Choice === choices.paper) {
    result = resultTypes.player1Wins;
  }

  if (player1Choice === choices.rock && player2Choice === choices.paper) {
    result = resultTypes.player2Wins;
  }

  if (player1Choice === choices.rock && player2Choice === choices.scissors) {
    result = resultTypes.player1Wins;
  }

  return result;
}

function getRandomChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return Object.keys(choices)[randomNumber];
}

