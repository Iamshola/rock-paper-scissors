document.addEventListener('DOMContentLoaded', () => {
  let userScore = 0
  let computerScore = 0

  // random Computer value
  const getComputerChoice = () => {
    const choiceList = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    const randomNumber = Math.floor(Math.random() * 5)
    return (choiceList[randomNumber])
  }

  // Looping through players buttons
  // const gameButton = document.querySelectorAll('button')
  const rock = document.getElementById('rock')
  const paper = document.getElementById('paper')
  const scissors = document.getElementById('scissors')
  const lizard = document.getElementById('lizard')
  const spock = document.getElementById('spock')


  const userScoreSpan = document.getElementById('user-score')
  const computerScoreSpan = document.getElementById('computer-score')
  // const scoresDiv = document.querySelector('.scores')
  const resetButton = document.getElementById('reset-button')
  const userchoseSpan = document.getElementById('user-chose')
  const computerchoseSpan = document.getElementById('computer-chose')

  //gameTools()
  rock.addEventListener('click', () => game('rock', getComputerChoice()))
  paper.addEventListener('click', () => game('paper', getComputerChoice()))
  scissors.addEventListener('click', () => game('scissors', getComputerChoice()))
  lizard.addEventListener('click', () => game('lizard', getComputerChoice()))
  spock.addEventListener('click', () => game('spock', getComputerChoice()))



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
    } else if (
      userChoice === 'paper' && computerChoice === 'rock'
    || userChoice === 'scissors' && computerChoice === 'lizard'
    || userChoice === 'scissors' && computerChoice === 'paper'
    || userChoice === 'paper' && computerChoice === 'spock'
    || userChoice === 'rock' && computerChoice === 'scissors'
    || userChoice === 'rock' && computerChoice === 'lizard'
    || userChoice === 'spock' && computerChoice === 'scissors'
    || userChoice === 'spock' && computerChoice === 'rock'
    || userChoice === 'lizard' && computerChoice === 'spock'
    || userChoice === 'lizard' && computerChoice === 'paper'){
      win()
    } else if (
      userChoice === 'rock' && computerChoice === 'paper'
      || userChoice === 'lizard' && computerChoice === 'scissors'
      || userChoice === 'paper' && computerChoice === 'scissors'
      || userChoice === 'spock' && computerChoice === 'paper'
      || userChoice === 'scissors' && computerChoice === 'rock'
      || userChoice === 'lizard' && computerChoice === 'rock'
      || userChoice === 'rock' && computerChoice === 'spock'
      || userChoice === 'scissors' && computerChoice === 'spock'
      || userChoice === 'paper' && computerChoice === 'lizard'
      || userChoice === 'spcok' && computerChoice === 'lizard'

    ) {
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
