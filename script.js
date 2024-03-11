const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const scoreText = document.querySelector('#YOU');
const scoreTextCpu = document.querySelector('#CPU')
const messageText = document.querySelector('#message');
const playerChoiceIcon = document.querySelector('#playerChoice');
const cpuChoiceIcon = document.querySelector('#cpuChoice');


const buttons = [rockBtn, paperBtn, scissorsBtn]
let playerInput = '';
let scoreYOU = 0;
let scoreCPU = 0;
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
        messageText.textContent = 'You lose 😹';
        scoreCPU++;
        scoreTextCpu.textContent = 'CPU: ' + scoreCPU;
        playerChoiceIcon.textContent = '✊🏻';
        cpuChoiceIcon.textContent = '✋🏾';
    }
    else if(playerInput == 'rock' && cpuInStr == 'Scissors'){
        messageText.textContent = 'You Win 🎉';
        scoreYOU++;
        scoreText.textContent = 'YOU: ' + scoreYOU;
        playerChoiceIcon.textContent = '✊🏻';
        cpuChoiceIcon.textContent = '✌🏾';
    }
    else if(playerInput == 'paper' && cpuInStr == 'Rock'){
        messageText.textContent = 'You Win 🎉';
        scoreYOU++;
        scoreText.textContent = 'YOU: ' + scoreYOU;
        playerChoiceIcon.textContent = '✋🏻';
        cpuChoiceIcon.textContent = '✊🏾';
    }
    else if(playerInput == 'paper' && cpuInStr == 'Scissor'){
        messageText.textContent = 'You Lose 😹';
        scoreCPU++;
        scoreTextCpu.textContent = 'CPU: ' + scoreCPU;
        playerChoiceIcon.textContent = '✋🏻';
        cpuChoiceIcon.textContent = '✌🏾';
    }
    else if(playerInput == 'scissors' && cpuInStr == 'Rock'){
        messageText.textContent = 'You Lose 😹';
        scoreCPU++;
        scoreTextCpu.textContent = 'CPU: ' + scoreCPU;
        playerChoiceIcon.textContent = '✌🏻';
        cpuChoiceIcon.textContent = '✊🏾';
    }
    else if(playerInput == 'scissors' && cpuInStr == 'Paper'){
        messageText.textContent = 'You Win 🎉';
        scoreYOU++;
        scoreText.textContent = 'YOU: ' + scoreYOU;
        playerChoiceIcon.textContent = '✌🏻';
        cpuChoiceIcon.textContent = '✋🏾';
    }
    else{
        messageText.textContent = 'Its a draw 🫱🏻‍🫲🏽';
        if(playerInput == 'rock'){
            playerChoiceIcon.textContent = '✊🏻';
            cpuChoiceIcon.textContent = '✊🏾';
        }
        else if(playerInput == 'paper'){
            playerChoiceIcon.textContent = '✋🏻';
            cpuChoiceIcon.textContent = '✋🏾';
        }
        else if(playerInput == 'scissors'){
            playerChoiceIcon.textContent = '✌🏻';
            cpuChoiceIcon.textContent = '✌🏾';
        }
    }
   
}






