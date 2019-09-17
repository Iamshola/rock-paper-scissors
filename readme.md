# Self-Paced Project: Rock, Paper, Scissors, Lizard and Spock!

## Overview
This game was created using canvas as an opportunity to understand the basic principles and practice javascript. The repo can be accessed on [GitHub](https://github.com/Iamshola/rock-paper-scissors) and the deployed site can be viewed on [Gh-Pages](https://iamshola.github.io/rock-paper-scissors/).

### Introduction

Your task is to build a "Rock, Paper, Scissors" game that you can play against the computer!



### Languages and Technologies Used:
* HTML5
* CSS3
* JavaScript (ES6)
* Git
* GitHub
* Google Fonts
* Font Awesome

## Project Brief

### The brief requirements were:

* When a user makes their choice (rock, paper, scissors, spock or lizard), you should also randomly generate a computer choice
* Display the player's choice and the computer's choice
* Determine the winner and display on the screen
* When the reset button is clicked, clear the choices and the winner from the screen.


### Timeframe:
1 day

### Snippet of Code

#### Button Event Listeners

```  JavaScript
rock.addEventListener('click', () => game('rock', getComputerChoice()))
paper.addEventListener('click', () => game('paper', getComputerChoice()))
scissors.addEventListener('click', () => game('scissors', getComputerChoice()))
lizard.addEventListener('click', () => game('lizard', getComputerChoice()))
spock.addEventListener('click', () => game('spock', getComputerChoice()))

```

#### Resetting Game

``` JavaScript
const resetScores = () => {
  computerScore = 0
  computerScoreSpan.innerHTML = computerScore
  userScore = 0
  userScoreSpan.innerHTML = userScore
  userchoseSpan.innerHTML = '-'
  computerchoseSpan.innerHTML = '-'
}
resetButton.addEventListener('click', resetScores)
```


### Improvements

I would have loved to spend more time refractoring my code in order to practice best code praticses.



### Course Curriculum
  Details of my training and links to more projects whilst at General Assembly -  12 Week Immersive.

> **Week 1-3 | Module One - Fundamentals**

  - HTML5
  - CSS3
  - Sass
  - JavaScript


> **Week 4**

  Project 1 : Frogger  | [GitHub](https://github.com/Iamshola/project-01) | [GH-Pages](https://iamshola.github.io/project-01/)

>**Week 5 | Module Two - React**

  - React.js
  - Routing
  - RESTFUL API
  - Third-party APIs

>**Week 6**

  Project 2 : CocktailBored  | [GitHub](https://github.com/Iamshola/Project3) | [GH-Pages](https://iamshola.github.io/Project-2/#/)

>**Week 7-8 | Module Three - Node and Express**

  - RESTFUL Routing
  - Node.js
  - Express
  - Token Authentication & Session Authentication
  - API Creation
  - Mocha and Chai

>**Week 9**

  Project 3 : Date-a-base | [GitHub](https://github.com/Iamshola/Project3) | [Herouku](https://datingexp.herokuapp.com/#/)

>**Week 10-11 | Module Four - Python and Django**

  - Python
  - SQL
  - Django
  - Token Authentication

>**Week 12**

  Project 4 : Space | [GitHub](https://github.com/Iamshola/project-04) | [Herouku](https://date-a-base-aos.herokuapp.com/#/)


  ### Contact
  Adesola Oni-Shogbonyo\
  Email : s.oni-shogbonyo@hotmail.co.uk\
  [Portfolio](https://iamshola.github.io/) | [Linkedin](https://www.linkedin.com/in/adesola-oni-shogbonyo/) | [GitHub](https://github.com/Iamshola)
