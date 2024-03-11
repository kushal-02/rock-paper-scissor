// computer randomly select one from rock, or paper, or scissors.

let answer = '';
let computerScore = 0;
let playerScore = 0;


// HTML elements

let resultText = document.querySelector('.resultText');
let playerTotal = document.querySelector('.playerTotal');
let computerTotal = document.querySelector('.computerTotal');

function reset(){
    computerScore = 0;
    playerScore = 0;
    answer = 'Please click rock, paper, or scissors.';
}


function getComputerChoice() {
    const array = ['rock', 'paper', 'scissors'];

    return array[Math.floor(Math.random() * array.length)];

}



function playRound(buttonClicked) {

    if(buttonClicked === 'reset'){
        reset();
    }else{

    

   let playerSelection = buttonClicked.toLowerCase();
   let  computerSelection = getComputerChoice().toLowerCase();
   console.log('computer selected : '+computerSelection);
   console.log('player selected : ' + playerSelection);
   console.log('-----------------------------------------');
    if (playerScore === 5 || computerScore === 5) {
        return;
    } else {
        if (playerSelection != 'paper' && playerSelection != 'scissors' && playerSelection != 'rock') {
            answer = "invalid Typo! Please Enter exactly, rock or paper or scissors..";
        }
        else if (playerSelection === computerSelection) {
            answer = "Tie! Try again.";
        }
        else if (
            (playerSelection === "rock" && computerSelection !== "paper")
            || (playerSelection === "paper" && computerSelection !== "scissors")
            || (playerSelection === "scissors" && computerSelection !== "rock")
        ) {
            answer = `You Win! '${playerSelection}' beats '${computerSelection}'`;
            playerScore += 1;
        }
        else {
            answer = `You Lose! '${computerSelection}' beats '${playerSelection}'`;
            computerScore += 1;
        }
    }
}

    if(playerScore === 5){
        resultText.textContent = "You won the Match!";
    }else if(computerScore === 5){
        resultText.textContent = "You Lose the Match!";
    }
    else{
        resultText.textContent = answer;
    }

    playerTotal.textContent = playerScore;
    computerTotal.textContent = computerScore;

}






// const playerSelection = prompt("Let's play Rock Paper Scissors!")

const computerSelection = getComputerChoice();
// console.log(computerSelection);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.textContent;
        playRound(playerSelection);
    })
})


// alert(playRound(playerSelection, computerSelection));






// console.log(getComputerChoice());




