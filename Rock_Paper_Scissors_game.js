// Rock Paper, Scissors Game

var userChoice = prompt("Do you choose rock, paper or scissors?");

// assign randon variable between 0 and 1 to computerChoice
var computerChoice = Math.random();

// the following assign the random computerChoice value to either rock, paper, or scissors.
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
console.log("Computer: " + computerChoice);

// function to play the game.
var compare = function(choice1, choice2) {

    // the following determines if the user inputted the correct prompted info: rock, paper or scissors
    if (!((choice1 === 'rock') || (choice1 === 'paper') || (choice1 === 'scissors'))) {
        userChoice = prompt("Please choose either rock, paper, or scissors!");

    // the following compares the userChoice and the computerChoice and prints in console whether or not the user or the computer won the game
    } else {
        if (choice1 === choice2) {
            console.log("The result is a tie!");
        } else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                console.log("rock wins");
            } else {
                console.log("paper wins");
            }
        } else if (choice1 === "paper") {
            if (choice2 === "rock") {
                console.log("paper wins");
            } else {
                console.log("scissors wins");
            }
        } else if (choice1 === "scissors") {
            if (choice2 === "rock") {
                console.log("rock wins");
            } else {
                console.log("scissors wins");
            }
        }
    }
};

// run the game!
compare(userChoice, computerChoice);
