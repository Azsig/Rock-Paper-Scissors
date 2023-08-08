const button = document.querySelectorAll('.btn');
const text = document.querySelector('#text');
let playerScore = 0;
let computerScore = 0;
const score1 = document.querySelector("#playerScore")
const score2 = document.querySelector("#computerScore")
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset"
resetBtn.classList.add("reset")
const body = document.querySelector("body")

score1.textContent = `Player Score : ${playerScore}`;
score2.textContent = `Computer Score : ${computerScore}`;


function refreshPage(){
    window.location.reload(true);
}


function playRound(playerChoice,computerChoice){
    let player = playerChoice.toLowerCase()
    let computer = computerChoice
    if (((player == 'rock' && computer == 'scrissor') || 
    (player == 'scrissor' && computer == 'paper') || 
    (player == 'paper' && computer == 'rock')) && playerScore+computerScore < 5){
        text.textContent = `You win, ${player} beat ${computer}`;
        playerScore++;
    }

    else if (((player == 'rock' && computer == 'paper') || 
    (player == 'paper' && computer == 'scrissor') || 
    (player == 'scrissor' && computer == 'rock')) && playerScore+computerScore < 5){
        text.textContent = `You lose, ${player} got beaten by ${computer}`;
        computerScore++ ;
    }

    else if (playerScore + computerScore < 5){
        text.textContent = "draw";
    }

    else{
        return
    }

    
}

function random(){
    let number = Math.floor(Math.random() * 3 - 1 + 1 ) + 1 ;
    return number;
}

function computerChoice(){
    const choice = ["rock","paper","scrissor"];
    let num = random();
    return choice[num - 1];
    
}

function getPlayerSelection(e){
    let playerChoice = (e.target.id);
    let computer = computerChoice();
    playRound(playerChoice, computer);
    score1.textContent = `Player Score : ${playerScore}`;
    score2.textContent = `Computer Score : ${computerScore}`
    
    if (playerScore > computerScore && playerScore+computerScore == 5){
        text.textContent = "Congratulation you win the game";
        body.appendChild(resetBtn);
    }

    else if (computerScore > playerScore && playerScore+computerScore == 5){
        text.textContent = "Alas! you lose to computer"
        body.appendChild(resetBtn);
    }

}

button.forEach(key => key.addEventListener('click', getPlayerSelection));
resetBtn.addEventListener('click', refreshPage)
