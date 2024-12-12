humanScore = 0;
computerScore = 0;
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