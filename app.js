//? random computer choice
const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
  const randomIndex = Math.round(Math.random()*2);
  // console.log(choices[randomIndex]);
  return choices[randomIndex];
}

// getComputerChoice();
//? write a function that plays a single round
function singleRound(playerSelection, computerSelection) {
  const ps = playerSelection.toLowerCase();

  if (ps === computerSelection)
    return "Tie! Play again!";
  else if (ps == "rock") {
    if (computerSelection == "paper") 
      return `You Win! Rock beats Paper`;
    else
      return "You Lose! Scissor beats Rock";
  }
  else if (ps == "paper") {
    if (computerSelection == "rock") 
      return `You Win! Paper beats Rock`;
    else
      return "You Lose! Scissor beats Papper";
  }
  else if (ps == "scissor") {
    if (computerSelection == "paper") 
      return `You Win! Scissor beats Paper`;
    else
      return "You Lose! Rock beats scissor";
  }
}