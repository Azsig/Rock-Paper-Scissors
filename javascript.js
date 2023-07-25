function random(){
    let number = Math.floor(Math.random() * 3 - 1 + 1 ) + 1 ;
    return number
}

function computerChoice(){
    const choice = ["rock","paper","scrissor"];
    let num = random();
    return choice[num - 1];
    
}

function playRound(playerChoice,computerChoice){
    let player = playerChoice.toLowerCase();
    if (player == "rock"){
        if (computerChoice == "rock"){
            return "Draw, rock equal to rock"
        }
        else if (computerChoice == "paper"){
            return "You lose, paper beat rock"
        }
        else if (computerChoice == "scrissor"){
            return "You win, rock beat scrissor"
        }
    }
    
    else if (player == "paper"){
        if (computerChoice == "rock"){
            return "You win, paper beat rock"
        }
        else if (computerChoice == "paper"){
            return "Draw, paper equal to paper"
        }
        else if (computerChoice == "scrissor"){
            return "You lose, scrissor beat paper"
        }
    }

    else if (player == "scrissor"){
        if (computerChoice == "rock"){
            return "You lose, rock beat scrissor"
        }
        else if (computerChoice == "paper"){
            return "You win, scrissor beat paper"
        }
        else if (computerChoice == "scrissor"){
            return "Draw, scrissor equal to scrissor"
        }
    }

}

function fiveRound(){
    for (let i = 0; i < 5; i++){
        let playerInput = prompt("Your Choice ")
        let computer = computerChoice()
        console.log(playRound(playerInput, computer))
    }
}



console.log(computerChoice())