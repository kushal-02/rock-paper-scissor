function getComputerChoice(){
    const array = ['rock', 'paper', 'scissors'];

    return array[Math.floor(Math.random()*array.length)];

}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection != 'paper' && playerSelection != 'scissors' && playerSelection != 'rock'){
        return "invalid Typo! Please Enter exactly, rock or paper or scissors..";
    }
    else if(playerSelection === computerSelection){
        return "Tie! Try again.";
    }
    else if(playerSelection === "rock" && computerSelection !== "paper"){
        return `You Win! '${playerSelection}' beats '${computerSelection}'`;
    }
    else if(playerSelection === "paper" && computerSelection !== "scissors"){
        return `You Win! '${playerSelection}' beats '${computerSelection}'`;
    }
    else if(playerSelection === "scissors" && computerSelection !== "rock"){
        return `You Win! '${playerSelection}' beats '${computerSelection}'`;
    }
    else{
        return `You Lose! '${computerSelection}' beats '${playerSelection}'`;
    }
}


const playerSelection = prompt("Let's play Rock Paper Scissors!")
const computerSelection = getComputerChoice();


alert(playRound(playerSelection, computerSelection));

// console.log('Player selected : ' + playerSelection);
// console.log('Computer selected : ' + computerSelection);




// console.log(getComputerChoice());