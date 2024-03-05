const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');


const buttons = [rockBtn, paperBtn, scissorsBtn]
let playerInput = '';
buttons.forEach((button) =>{
    button.addEventListener('click', ()=>{
        playerInput = button.id;
    })
});






