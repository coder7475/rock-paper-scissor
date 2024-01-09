function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.round(Math.random()*2);
  // console.log(choices[randomIndex]);
  return choices[randomIndex];
}

getComputerChoice();