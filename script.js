const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const scoreText = document.querySelector('#score');
const messageText = document.querySelector('#message');

const buttons = [rockBtn, paperBtn, scissorsBtn]
let playerInput = '';
let score = 0;
let message = '';
buttons.forEach((button) =>{
    button.addEventListener('click', ()=>{
        playerInput = button.id;
        playRound(playerInput);
    })
});

function playRound(playerInput){
    let cpuInput = Math.floor(Math.random() * 3);
    let cpuInStr = '';
    switch(cpuInput){
        case 0:
            cpuInStr = 'Rock';
            break;
        case 1: 
            cpuInStr = 'Paper';
            break;
        case 2:
            cpuInStr = 'Scissors';
            break;
    }

    if(playerInput == 'rock' && cpuInStr == 'Paper'){
        messageText.textContent = 'CPU chooses ' + cpuInStr + ': You lose.';
        score--;
        scoreText.textContent = 'Score: ' + score;
    }
    else if(playerInput == 'rock' && cpuInStr == 'Scissors'){
        messageText.textContent = 'CPU chooses ' + cpuInStr + ': You Win.';
        score++;
        scoreText.textContent = 'Score: ' + score;
    }
    else if(playerInput == 'paper' && cpuInStr == 'Rock'){
        messageText.textContent = 'CPU chooses ' + cpuInStr + ': You Win.';
        score++;
        scoreText.textContent = 'Score: ' + score;
    }
    else if(playerInput == 'paper' && cpuInStr == 'Scissor'){
        messageText.textContent = 'CPU chooses ' + cpuInStr + ': You Lose.';
        score--;
        scoreText.textContent = 'Score: ' + score;
    }
    else if(playerInput == 'scissors' && cpuInStr == 'Rock'){
        messageText.textContent = 'CPU chooses ' + cpuInStr + ': You Lose.';
        score--;
        scoreText.textContent = 'Score: ' + score;
    }
    else if(playerInput == 'scissors' && cpuInStr == 'Paper'){
        messageText.textContent = 'CPU chooses ' + cpuInStr + ': You Win.';
        score++;
        scoreText.textContent = 'Score: ' + score;
    }
    else{
        messageText.textContent = 'CPU chooses ' + cpuInStr + ': Its a draw.';
    }
   

    
}






