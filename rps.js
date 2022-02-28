// //Step 1: The game is going to play against the computer, so I will begin by creating a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

function computerPlay() {
  let choices = ['Rock', 'Paper', 'Scissors']
  randomElement = choices[Math.floor(Math.random() * choices.length)]
  return randomElement
}

var hey = 'hello'

// //Step 2: Writing a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock". Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

// function singleRound(playerSelection, computerSelection) {
//   let winner = calculateWinner(playerSelection, computerSelection)
//   printRoundResult(winner, playerSelection, computerSelection)
// }

// //Step 3: I will write a NEW function called game(). Using the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

function calculateWinner(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase()
  computerSelection = computerSelection.toUpperCase()
  if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')
  ) {
    return 'player'
  } else if (
    (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
    (computerSelection === 'PAPER' && playerSelection === 'ROCK')
  ) {
    return 'computer'
  } else {
    return 'draw'
  }
}

function updateScore(winner, scoreArray) {
  if (winner === 'player') {
    scoreArray[0]++
    return scoreArray
  } else if (winner === 'computer') {
    scoreArray[1]++
    return scoreArray
  }
  return scoreArray
}

function printRoundResult(
  winner,
  //scoreArray,
  playerSelection,
  computerSelection
) {
  if (winner === 'player') {
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
  } else if (winner === 'computer') {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
  } else {
    console.log("It's a draw!")
  }
  console.log(`Score: \nPlayer: ${scoreArray[0]} \nComputer: ${scoreArray[1]}`)
}

function calculateFinalResult(scoreArray) {
  if (scoreArray[0] > scoreArray[1]) {
    console.log('You won the game!')
  } else if (scoreArray[1] > scoreArray[0]) {
    console.log('You lost the game.')
  } else {
    console.log("It's a draw.")
  }
}

function game() {
  let scoreArray = [0, 0]
  for (let i = 0; i < 5 && scoreArray[0] < 3 && scoreArray[1] < 3; i++) {
    let playerSelection = prompt('Choose between Rock, Paper or Scissors')
    let computerSelection = computerPlay()
    // let singleRoundResult = singleRound(playerSelection, computerSelection)
    let winner = calculateWinner(playerSelection, computerSelection)
    scoreArray = updateScore(winner, scoreArray)
    printRoundResult(winner, scoreArray, playerSelection, computerSelection)
  }
  calculateFinalResult(scoreArray)
}

game()
