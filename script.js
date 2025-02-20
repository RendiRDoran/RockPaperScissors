function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3); 
    return choices[randomIndex];

    computerChoice = computerChoice.toLowerCase();
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose your Weapon (Rock, Paper, or Scissors):");
    
    playerChoice = playerChoice.toLowerCase();
    
}

function playRockPaperScissors() {

    let playerChoice = 0;
    let computerChoice = 0;

    
    if (playerChoice === computerChoice) {
        alert("It's a tie!");

        playRockPaperScissors();

    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
               playerChoice === "scissors" && computerChoice === "paper" ||
               playerChoice === "paper" && computerChoice === "rock") {
        alert("Player wins!");
    } else {
        alert("Computer wins!");
    } 
    playRockPaperScissors();

}


function playNewGame(playerOneScore, playerTwoScore) {
    function askPlayerMode() {
    let mode = prompt("Play against a human or a computer?");

    mode = mode.toLowerCase();

    if (mode === "human") {
        alert("Play against another human! Excellent Choice!");
        playAgainstHuman();
    }
    else if(mdoe === "computer") {
        alert("Play against the computer! Fabulous idea!");
        playAgainstComputer();
        playRockPaperScissors();
    }
    else {
        alert("Please choose who you would like to play against");
        askPlayerMode();
    }
    }
}