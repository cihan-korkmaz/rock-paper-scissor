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


function playRound(playerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection === undefined) {
        playerSelection = prompt("Enter your hand").toLowerCase();
    }
    
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

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
btn1.textContent = "Rock";
document.body.appendChild(btn1);
btn2.textContent = "Paper";
document.body.appendChild(btn2);
btn3.textContent = "Scissor";
document.body.appendChild(btn3);

const divScore = document.createElement("div");
divScore.textContent = "Hello World!";
document.body.appendChild(divScore);

let you = 0;
let computer = 0;
let round;
btn1.addEventListener("click", function () {
    round = playRound("rock")
    if (round === "You win") {
        you++;
    } else if (round === "You lose") {
        computer++;
    }
    if (you === 5) {
        divScore.textContent = `You win!`;
    } else if (computer === 5) {
        divScore.textContent = "You lose!"
    } else {
        divScore.textContent = `You: ${you}, Computer: ${computer}`;
    }
    
});
btn2.addEventListener("click", () => {
    round = playRound("paper")
    if (round === "You win") {
        you++;
    } else if (round === "You lose") {
        computer++;
    }
    if (you === 5) {
        divScore.textContent = `You win!`;
    } else if (computer === 5) {
        divScore.textContent = "You lose!"
    } else {
        divScore.textContent = `You: ${you}, Computer: ${computer}`;
    }})
btn3.addEventListener("click", () => {    
    round = playRound("scissor")
    if (round === "You win") {
        you++;
    } else if (round === "You lose") {
        computer++;
    }
    if (you === 5) {
        divScore.textContent = `You win!`;
    } else if (computer === 5) {
        divScore.textContent = "You lose!"
    } else {
        divScore.textContent = `You: ${you}, Computer: ${computer}`;
    }})


/*
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
console.log(game());*/