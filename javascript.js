let humanScore = 0
let computerScore = 0

//create function to play single round of Rock Paper Scissors

function playRound () {
    let computerChoice = ["rock", "paper", "scissors"] ; 
    function getComputerChoice () {  
        let computerSelection= computerChoice[Math.floor(Math.random() * computerChoice.length | 0)]
        return (computerSelection);
    }
    let computerPick = getComputerChoice (); 
    function getHumanChoice () {
        let humanChoice = prompt ("What will it be?  Rock, Paper, or Scissors").toLowerCase();
        return(humanChoice);
    }
    let playerPick = getHumanChoice()
     //when it's a tie
    if (playerPick === computerPick) {
           
    return alert(`It's a tie!  ${playerPick} ties ${computerPick}. Try again and make a selection. The score is cpu ${computerScore} to player ${humanScore}`)                
            

    //if computer selects rock vs player selecting scissors    
    } else if (playerPick === "rock") {
        if (computerPick === "scissors") {{
            computerScore+=1;
            return alert (`You lost! ${computerPick} beats ${playerPick}. The score is cpu ${computerScore} to player ${humanScore}`) }
        } else  {{
            humanScore+=1 ;
            return alert (`You win! ${playerPick} beats ${computerPick}. The score is cpu ${computerScore} to player ${humanScore}` )}
             }     
    //if computer selects scissors vs player selecting paper        
    } else if (computerPick === "scissors") {
        if (playerPick === "paper") {{
            computerScore+=1;
            return alert (`You lost! ${computerPick} beats ${playerPick}. The score is cpu ${computerScore} to player ${humanScore}`) }            
        }   else {
            humanScore+=1 ;
            return alert(`You win! ${playerPick} beats ${computerPick}. The score is cpu ${computerScore} to player ${humanScore}` )}         
    //if computer selects paper vs player selecting rock
    } else if (computerPick === "paper") ;{
        if (playerPick === "rock") {{
            computerScore+=1;
            return alert(`You lost! ${computerPick} beats ${playerPick}. The score is cpu ${computerScore} to player ${humanScore}`) }            
        } else {{
            humanScore+=1;
            return alert(`You win! ${playerPick} beats ${computerPick}. The score is cpu ${computerScore} to player ${humanScore}` ) }          

    }} 

}
    

function playGame () {
    let rounds = 0
    do {playRound ();
        rounds++;
 
}
    while (rounds <5); 
}
console.log(playGame())

function gameWinner () {
    if (humanScore > computerScore) {
        return alert ("Game over.  You win!  Great job!")
    } else {
        return alert ("Game over, you lost.")
    }
}

console.log (gameWinner())
//function to keep score and end the game


//function to end game
