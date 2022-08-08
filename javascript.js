let winner = 0 ;
let looser = 0 ;
function getComputerChoice() {
    let x ;
    x = Math.floor(Math.random()*3+1)
    if (x === 1){return "rock"}
    else if (x === 2) {return "paper"}
    else {return "scissor"}
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper"){
        looser += 1;
        return "You Lose! paper beats rock"
    }
    else if (playerSelection === "paper" && computerSelection === "scissor"){
        looser += 1;
        return "You Lose! scissor beats paper"
    }
    else if (playerSelection === "scissor" && computerSelection === "rock"){
        looser += 1;
        return "You Lose! rock beats scissor"
    }
    else if (playerSelection === "rock" && computerSelection === "scissor"){
        winner += 1;
        return "You Win! rock beats scissor"
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        winner += 1;
        return "You Win! paper beats rock"
    }
    else if (playerSelection === "scissor" && computerSelection === "rock"){
        winner += 1;
        return "You Win! scissor beats rock"
    }
    else if(playerSelection === computerSelection){
        return "Tie"
    }
    else{return "Wrong"}
  }
   
  function game() {
    winner = 0 ;
    looser = 0 ;
    console.log(winner,looser)
        for(let i = 1; i<=5; i++){
            let promoter = prompt("pick:rock, paper, scissor");
           console.log( playRound(promoter,getComputerChoice()))
            console.log(winner,looser)
        }
        if (winner>looser){return "WON"}
        else if(looser>winner){return "LOST"}
        else if(looser===winner){return "TIE"}
        else{return "problem"}
  }
    













  
