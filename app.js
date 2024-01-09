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

  if (ps === computerSelection){
    return "Tie! Play again!";
  }
  else if (ps == "rock") {
    if (computerSelection == "paper") 
      return [`You Win! Rock beats Paper!!`, true];
    else
      return ["You Lose! Scissor beats Rock!!", false];
  }
  else if (ps == "paper") {
    if (computerSelection == "rock") 
      return [`You Win! Paper beats Rock`, true];
    else
      return ["You Lose! Scissor beats Papper!!", false];
  }
  else if (ps == "scissor") {
    if (computerSelection == "paper") 
      return [`You Win! Scissor beats Paper!!`, true];
    else
      return ["You Lose! Rock beats scissor!!", false];
  }
  else {
    return ["Invalid Choice", null];
  }
}

//? Play a session where people win best out of 5
function game() {
  
  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt("Your choice: ");
    const computerChoice = getComputerChoice();

    const res = singleRound(playerChoice, computerChoice);

    console.log(res[0]);
  }

}

game();