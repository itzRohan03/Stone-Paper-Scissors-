let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#1E1E24";
  msg.style.color = "#FFF";
  console.log("Game Draw");
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "#FFF";
    console.log(`You win! Your ${userChoice} beats ${compChoice}`);
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "#FFF";
    console.log(`You lost. ${compChoice} beats your ${userChoice}`);
  }
};

const playGame = (userChoice) => {
  console.log("User choice:", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer choice:", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin;
    if (userChoice === "rock") {
      userWin = compChoice === "scissor";
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock";
    } else {
      userWin = compChoice === "paper";
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("Choice clicked:", userChoice);
    playGame(userChoice);
  });
});
