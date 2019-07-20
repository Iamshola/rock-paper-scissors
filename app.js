document.addEventListener('DOMContentLoaded', () => {
  let userScore = 0
  let computerScore = 0

// random Computer value
const getComputerChoice = () => {
    const choiceList = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return (choiceList[randomNumber])
  }

// Looping through players buttons
  const gameButton = document.querySelectorAll('button')
  const rock = document.getElementById('rock')
  const paper = document.getElementById('paper')
  const scissors = document.getElementById('scissors')
  const userScoreSpan = document.getElementById('user-score')
  const computerScoreSpan = document.getElementById('computer-score')
  const scoresDiv = document.querySelector('.scores')
  const resetButton = document.getElementById('reset-button')
  const userchoseSpan = document.getElementById('user-chose')
  const computerchoseSpan = document.getElementById('computer-chose')

  //gameTools()
  rock.addEventListener('click', () => game('rock', getComputerChoice()))
  paper.addEventListener('click', () => game('paper', getComputerChoice()))
  scissors.addEventListener('click', () => game('scissors', getComputerChoice()))
  // Output for user win
  const win = (userChoice) => {
    userScore++
    userScoreSpan.innerHTML = userScore
  }
  // Output for user lose / computer win
  const lose = (computerChoice) => {
    computerScore++
    computerScoreSpan.innerHTML = computerScore
  }
  // Output for tie
  const tie = (userChoice, computerChoice) => {
    computerScoreSpan.innerHTML = computerScore
    userScoreSpan.innerHTML = userScore
  }
  const computerChoice = getComputerChoice()
  const game = function(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      tie()
    } else if (userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'paper' && computerChoice === 'scissors' || userChoice === 'rock' && computerChoice === 'scissors' ){
      win()
    } else if (userChoice === 'rock' && computerChoice === 'paper' || userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper'  ) {
      lose()
    }
    userchoseSpan.innerHTML = userChoice
    computerchoseSpan.innerHTML = computerChoice
}

  const resetScores = () => {
    computerScore = 0
    computerScoreSpan.innerHTML = computerScore
    userScore = 0
    userScoreSpan.innerHTML = userScore
    userchoseSpan.innerHTML = '-'
    computerchoseSpan.innerHTML = '-'
  }
  resetButton.addEventListener('click', resetScores)
})
