const buttons = document.querySelectorAll('.choiceBtn');
const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');

let player;
let computer;

//player 
buttons.forEach(btn => btn.addEventListener('click', function(e){
    player = btn.textContent;
    computerTurn();
    playerText.textContent = `PLAYER: ${player}`;
    computerText.textContent = `COMPUTER: ${computer}`;
    resultText.textContent = checkWinner();
}));


function computerTurn(){
    const i = Math.floor(Math.random() * 3);
    
    switch(i){
        case 0:
            computer = 'ROCK';
            break;
        case 1:
            computer = 'PAPER';
            break;
        case 2:
            computer = 'SCISSORS';
            break;
    }
}

function checkWinner(){
    if(player == computer) return "Draw!"
    else if(computer == "ROCK") {
        return (player == "PAPER") ? "You Win!" : "You Lose!"
    }
    else if(computer == "PAPER") {
        return (player == "SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SCISSORS") {
        return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}


