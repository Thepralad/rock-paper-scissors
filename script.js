function getComputerChoice(){
    let n = Math.round(Math.random() * 3);
    if(n == 0)
        return "Rock"
    else if(n == 1)
        return "Paper"
    else
        return "Scissors"
}
alert(getComputerChoice())
let playerSelection = prompt("Choose between Rock, Paper & Scissors")
let computerSelection = getComputerChoice()
playerSelection = playerSelection.toLowerCase()

function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "Paper")
        return "Computer Wins!"
    if(playerSelection == "rock" && computerSelection == "Scissors")
        return "You Win!"
    if(playerSelection == "rock" && computerSelection == "Rock")
        return "Its a draw."
    if(playerSelection == "paper" && computerSelection == "Paper")
        return "Its a draw."
    if(playerSelection == "paper" && computerSelection == "Scissors")
        return "Computer Wins!"
    if(playerSelection == "paper" && computerSelection == "Rock")
        return "You Win!"
    if(playerSelection == "scissors" && computerSelection == "Paper")
        return "You Win!"
    if(playerSelection == "scissors" && computerSelection == "Scissors")
        return "Its a draw."
    if(playerSelection == "scissors" && computerSelection == "Rock")
        return "Computer Wins!"
}

alert("Computer chose " + computerSelection + " | " + playRound(playerSelection, computerSelection))

