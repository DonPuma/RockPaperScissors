//SET playerScore and computerScore to 0
let playerScore = 0;
let computerScore = 0;

//WHILE playerScore and computerScore is less than 3
while(playerScore < 3 && computerScore < 3){
//GET getComputerChoice
var computerOptions = ['Rock', 'Paper', 'Scissors'];
var getComputerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
console.log(getComputerChoice);
//SET playerSelection
playerSelection1 = prompt("Type in Rock, Paper, or Scissors" );
playerSelection = playerSelection1.slice(0, 1).toUpperCase() + playerSelection1.slice(1).toLowerCase();
console.log(playerSelection);

playRound(playerSelection, getComputerChoice);
if(playRound(playerSelection, getComputerChoice).slice(4, 7) === "Win"){
    playerScore = playerScore + 1;
}
else if(playRound(playerSelection, getComputerChoice).slice(4, 8) === "Lose"){
    computerScore = computerScore +1;
}
console.log(playRound(playerSelection, getComputerChoice));
console.log("Player to Computer score is " + playerScore + " - " + computerScore);
}

if(playerScore === 3){
    console.log("Congratulations for winning the best of 5 battle!!!!");
}
else if(computerScore === 3){
    console.log("You have been defeated in a best of 5 to our AI overlords.")
}


function playRound(playerSelection, getComputerChoice){
    //DETERMINE winner between getComputerChoice and playerSelection
    if(playerSelection === 'Rock'){
        //PRINT the winner
        if(getComputerChoice === 'Rock'){
            return "Draw! You both chose Rock!";
        }
        else if(getComputerChoice === 'Paper'){
            return "You Lose! Paper beats Rock!";
        }
        else if(getComputerChoice === 'Scissors'){
            return "You Win! Rock beats Scissors!";
        }
    }
    if(playerSelection === 'Paper'){
        if(getComputerChoice === 'Rock'){
            return "You Win! Paper beats Rock!";
        }
        else if(getComputerChoice === 'Paper'){
            return "Draw! You both chose Paper!";
        }
        else if(getComputerChoice === 'Scissors'){
            return "You lose! Scissor beats Rock!";
        }
    }
    if(playerSelection === 'Scissors'){
        if(getComputerChoice === 'Rock'){
            return "You Lose! Rock beats Scissors!";
        }
        else if(getComputerChoice === 'Paper'){
            return "You Win! Scissor beats Papers!";
        }
        else if(getComputerChoice === 'Scissor'){
            return "Draw! You both chose Scissors!";
        }
    }
}