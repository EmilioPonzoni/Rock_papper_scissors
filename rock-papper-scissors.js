

function getComputerChoice(){
    let computerChoice = Math.random()

    if(computerChoice <= 0.3){
      computerChoice = "piedra"
        return("piedra");
    }
    else if(computerChoice <= 0.6){
      computerChoice = "papel"
        return("papel");
    }
    else{
      computerChoice = "tijera"
        return("tijera");
    }
}


function getHumanChoice(){

  let choice = ["piedra", "papel", "tijera"];
  let humanChoice =  prompt("Elige: ¿Piedra, papel o tijera?").toLowerCase();

  while (!choice.includes(humanChoice)) {
    humanChoice = prompt("Opción inválida. Elige: piedra, papel o tijera").toLowerCase();
  }

  return humanChoice
}












function playGame(){
  let humanScore  = 0;
 let computerScore = 0;
  
 
 function playRound(humanChoice, computerChoice){
    if((humanChoice === "piedra" && computerChoice === "papel")|| (humanChoice === "tijera" && computerChoice === "piedra") || (humanChoice === "papel" && computerChoice === "tijera")){
     computerScore ++
     console.log("Computer Wins a point!");
    }
    else if((humanChoice === "piedra" && computerChoice === "tijera") || (humanChoice === "tijera" && computerChoice === "papel") || (humanChoice === "papel" && computerChoice === "piedra")){
     humanScore ++
     console.log("Human Wins a point!");
    }
    else{
     console.log("You have the same choices");
    }
   }

   
for(i=0; i < 5; i++){
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
   
}

console.log("These are the final results: " + "Human: " + humanScore + ", Computer: " + computerScore)

}


playGame()

/* document.getElementById("resultado").innerText = "Elección de la computadora: " + choice; */