const piedra = document.getElementById("rock");
const papel = document.getElementById("paper");
const tijera = document.getElementById("scissors");
const resultado = document.getElementById("resultado");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.random();
  if (random < 1 / 3) return "piedra";
  else if (random < 2 / 3) return "papel";
  else return "tijera";
}

// Función para jugar una ronda
function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "piedra" && computerChoice === "tijera") ||
    (humanChoice === "tijera" && computerChoice === "papel") ||
    (humanChoice === "papel" && computerChoice === "piedra")
  ) {
    humanScore++;
    return `Computadora eligió ${computerChoice}. ¡Tú ganas esta ronda!`;
  } else if (humanChoice === computerChoice) {
    return `Computadora eligió ${computerChoice}. ¡Es un empate!`;
  } else {
    computerScore++;
    return `Computadora eligió ${computerChoice}. ¡Computadora gana esta ronda!`;
  }
}

// Función para manejar el juego
function playGame(humanChoice) {
  if (humanScore === 5 || computerScore === 5) return;

  let computerChoice = getComputerChoice();
  let roundResult = playRound(humanChoice, computerChoice);

  resultado.innerText = `${roundResult}\nPuntaje: Tú ${humanScore} - ${computerScore} Computadora`;

  // Si alguien gana, deshabilitar los botones
  if (humanScore === 5 || computerScore === 5) {
    piedra.disabled = true;
    papel.disabled = true;
    tijera.disabled = true;

    if (humanScore === 5) {
      resultado.innerText += `\n🎉 ¡Ganaste la partida!`;
    } else {
      resultado.innerText += `\n💻 ¡La computadora ganó la partida!`;
    }
  }
}

// Asignar eventos a los botones
piedra.addEventListener("click", () => playGame("piedra"));
papel.addEventListener("click", () => playGame("papel"));
tijera.addEventListener("click", () => playGame("tijera"));
