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

//Function to reset the game
function refreshPage(){
    window.location.reload(true);
}

//Function that take player choice and play it with computer
function playRound(playerChoice,computerChoice){
    let player = playerChoice.toLowerCase()
    let computer = computerChoice
    //Statemen if the player win the round
    if (((player == 'rock' && computer == 'scrissor') || 
    (player == 'scrissor' && computer == 'paper') || 
    (player == 'paper' && computer == 'rock')) && playerScore+computerScore < 5){
        text.textContent = `You win, ${player} beat ${computer}`;
        playerScore++;
    }
    //Statement if the player lose the round
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

//function that return a random number from 1 to 3
function random(){
    let number = Math.floor(Math.random() * 3 - 1 + 1 ) + 1 ;
    return number;
}

//function that make computer choice the RPS use the random number from function random()
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
