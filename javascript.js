function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
function getComputerChoice() {
    randomInt = getRandomIntInclusive(1, 3);
    switch (randomInt) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}
function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors!");
    if (humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "scissors" || humanChoice.toLowerCase() === "paper") {
        return humanChoice.toLowerCase();
    }
    else {
        return "Invalid input";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(computerChoice, humanChoice) {
        if (computerChoice === "rock") {
            if (humanChoice === "rock") {
                console.log("Tie! You both picked Rock!");
                return "Tie";
            }
            else if (humanChoice === "paper") {
                console.log("You win! Paper beats Rock!");
                humanScore += 1;
                return "Win";
            }
            else if (humanChoice === "scissors") {
                console.log("You lose! Rock beats Scissors!");
                computerScore += 1;
                return "Loss";
            }
        }
        else if (computerChoice === "paper") {
            if (humanChoice === "rock") {
                console.log("You lose! Paper beats Rock!");
                computerScore += 1;
                return "Loss";
            }
            else if (humanChoice === "paper") {
                console.log("Tie! You both picked Paper!");
                return "Tie";
            }
            else if (humanChoice === "scissors") {
                console.log("You win! Scissors beat Paper!");
                humanScore += 1;
                return "Win";
            }
        }
        else if (computerChoice === "scissors") {
            if (humanChoice === "rock") {
                console.log("You win! Rock beats Scissors!");
                humanScore += 1;
                return "Win";
            }
            else if (humanChoice === "paper") {
                console.log("You lose! Scissors beat Paper!");
                computerScore += 1;
                return "Loss";
            }
            else if (humanChoice === "scissors") {
                console.log("Tie! You both picked Scissors!");
                return "Tie";
            }
        }
    }
    gameOne = playRound(getComputerChoice(), getHumanChoice());
    gameTwo = playRound(getComputerChoice(), getHumanChoice());
    gameThree = playRound(getComputerChoice(), getHumanChoice());
    gameFour = playRound(getComputerChoice(), getHumanChoice());
    gameFive = playRound(getComputerChoice(), getHumanChoice());
    if (computerScore < humanScore) {
        console.log("You win the game!");
    }
    else if (computerScore > humanScore) {
        console.log("You lose the game!");
    }
    else if (computerScore == humanScore) {
        console.log("It's... a tie??")
    }
}
playGame();