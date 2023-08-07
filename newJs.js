const button = document.querySelectorAll('.btn');
const text = document.querySelector('#text');


function playRound(playerChoice,computerChoice){
    let player = playerChoice.toLowerCase()
    let computer = computerChoice
    if (((player == 'rock' && computer == 'scrissor') || 
    (player == 'scrissor' && computer == 'paper') || 
    (player == 'paper' && computer == 'rock'))){
        text.textContent = `You win, ${player} beat ${computer}`;
    }

    else if (((player == 'rock' && computer == 'paper') || 
    (player == 'paper' && computer == 'scrissor') || 
    (player == 'scrissor' && computer == 'rock'))){
    text.textContent = `You lose, ${player} got beaten by ${computer}`;
    }

    else{
        text.textContent = "draw";
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
    console.log(computer);

}

button.forEach(key => key.addEventListener('click', getPlayerSelection));
