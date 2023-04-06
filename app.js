function getComputerChoice() {
  const answers = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return answers[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (!["rock", "paper", "scissors"].includes(playerSelection)) {
    return "Invalid input. Please choose Rock, Paper, or Scissors.";
  } else if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, Paper, or Scissors?");

console.log(playRound(playerSelection, computerSelection));

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("You win!")) {
      playerScore++;
    } else if (result.includes("You lose!")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("You win the game! " + playerScore + " to " + computerScore);
  } else if (computerScore > playerScore) {
    console.log("You lose the game! " + computerScore + " to " + playerScore);
  } else {
    console.log("The game is tied! " + playerScore + " to " + computerScore);
  }
}

game();
