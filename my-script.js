function getComputerChoice() {
    let choice = Math.random()*3
    if (choice >= 0 && choice < 1) {
        return "rock";
    } else if (choice >= 1 && choice < 2) {
        return "paper";
    } else {
        return "scissor";
    }
}


function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Enter your hand").toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "Draw";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        return "You win";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Draw";
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        return "You lose";
    }  else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win";
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        return "You lose";
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        return "You win";
    } else if (playerSelection === "scissor" && computerSelection === "scissor") {
        return "Draw";
    }
}


function game() {
    let score = 0;
    for (let i=0; i < 5; i++) {
        let result = playRound();
        if (result === "You win") {
            score++;
        } else if (result === "You lose") {
            score--
        }
        console.log(score);
    }
    if (score < 0) {
        return "Defeat";
    } else if (score > 0) {
        return "Victory";
    } else {
        return "Tie";
    }

    }
console.log(game());