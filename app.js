//? random computer choice
const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
  const randomIndex = Math.round(Math.random() * 2);
  // console.log(choices[randomIndex]);
  return choices[randomIndex];
}

// Initial value of scores 
let playerPoints = 0;
let computerPoints = 0;

// Selectors for DOM Node
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissor");
const result = document.querySelector("#result");
const playerPointsUI = document.querySelector("#playerPoints");
const computerPointsUI = document.querySelector("#computerPoints");
const winner = document.getElementById("winner");
// Add Event Listener
rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const res = playRound("rock", computerSelection);
  updateScore();
  result.textContent = res[0];
});

paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const res = playRound("rock", computerSelection);
  updateScore()
  result.textContent = res[0];
});

scissorButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const res = playRound("rock", computerSelection);
  updateScore()
  result.textContent = res[0];
});


// update score in UI funciton
function updateScore() {
  playerPointsUI.textContent = playerPoints;
  computerPointsUI.textContent = computerPoints;
  if (playerPoints === 5){
    winner.textContent = "Player is the final winner!!!"
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
  }
  if (computerPoints === 5){
    winner.textContent = "Computer is the winner!!!"
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
  }
}

//? write a function that plays a single round
function playRound(playerSelection, computerSelection) {
  const ps = playerSelection.toLowerCase();
 
  if (ps === computerSelection) {
    return ["Tie! Play again!", null];
  } else if (ps == "rock") {
    if (computerSelection == "paper"){
      playerPoints++;
      return [`You Win! Rock beats Paper!!`, true];
    }
    else 
    {
      computerPoints++;
      return ["You Lose! Scissor beats Rock!!", false];
    }
  } else if (ps == "paper") {
    if (computerSelection == "rock") 
    {
      playerPoints++;
      return [`You Win! Paper beats Rock`, true];
    }
    else 
    {
      computerPoints++;
      return ["You Lose! Scissor beats Papper!!", false];
    }
  } else if (ps == "scissor") {
    if (computerSelection == "paper"){
      playerPoints++;
      return [`You Win! Scissor beats Paper!!`, true];
    }
    else 
    {
      computerPoints++;
      return ["You Lose! Rock beats scissor!!", false];
    }
  } else {
    return ["Invalid Choice", undefined];
  }
}

// Play a session where people win best out of 5
// function game() {
//   let playerWon = 0;
//   let computerWon = 0;

//   while ((playerWon + computerWon) <= 5) {
//     const playerChoice = prompt("Your choice: ");
//     const computerChoice = getComputerChoice();

//     const res = singleRound(playerChoice, computerChoice);
//     // console.log(res);
//     if (res[1] === true)
//       playerWon += 1
//     else if (res[1] === false)
//       computerWon += 1

//     console.log(res[0]);
//   }

//   if (playerWon > 2)
//     console.log("You Win!!!");
//   else
//     console.log("You Lose!!!");

//   console.log("Final Score: ", `You: ${playerWon} Computer: ${computerWon}`);
// }

// game();
