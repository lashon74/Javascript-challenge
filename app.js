// Challenge 1: Your age in days
function ageInDays() {
  let birthYear = prompt("What is your age?");
  let ageInDayss = (2020 - birthYear) * 365;
  let h1 = document.createElement("h1");
  let textAnswer = document.createTextNode(
    "you are " + ageInDayss + " days old"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
  console.log(ageInDayss);
}
// romoves results of function
function reset() {
  document.getElementById("ageInDays").remove();
}
// Challenge 2: Cat Generator
function getCats() {
  let image = document.createElement("img");
  let div = document.getElementById("flex-cat-gen");
  image.src =
    "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
}

function rpsGame(yourChoice) {
  console.log(yourChoice);
  let humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log("Bot choice: " + botChoice);
  results = decideWinner(humanChoice, botChoice);
  console.log(results);
  message = finalMessage(results);
  console.log(message);

  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(humanChoice, botChoice) {
  let rpsDataBase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
  };

  let yourScore = rpsDataBase[humanChoice][botChoice];
  let botScore = rpsDataBase[botChoice][humanChoice];

  return [yourScore, botScore];
}
function finalMessage([yourScore, botScore]) {
  if (yourScore === 0) {
    return { message: "You lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "Draw!", color: "yellow" };
  } else {
    return { message: "You won!", color: "green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  let imagesDataBase = {
    rock: document.getElementById("rock").src,
    scissors: document.getElementById("scissors").src,
    paper: document.getElementById("paper").src,
  };

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  let humanDiv = document.createElement("div");
  let botDiv = document.createElement("div");
  let messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imagesDataBase[humanImageChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage["color"] +
    "; font-size=60px; padding:30px; '>" +
    finalMessage["message"] +
    "</h1>";
  botDiv.innerHTML =
    "<img src='" +
    imagesDataBase[botImageChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

// Challenge 4: Change the color of all the muttons
let all_buttons = document.getElementsByTagName("button");
console.log(all_buttons);

// Used to remeber what color the buttons were originally
let copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === "red") {
    buttonsRed();
  } else if (buttonThingy.value === "green") {
    buttonsGreen();
  } else if (buttonThingy.value === "reset") {
    buttonColorReset();
  } else if (buttonThingy.value === "random") {
    randomColors();
  }
}

function buttonsRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}
function buttonsGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}
function buttonColorReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}
function randomColors() {
  let choices = ["btn-primary", "btn-danger", "btn-success", "btn-warning"];

  for (let i = 0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}
