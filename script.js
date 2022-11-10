
import { LEVELS } from "./levels.js";

// DOM ELEMENTS

const levelSelector = document.querySelector(".level-selector");
const randomChallenge = document.querySelector("#random-challenge");
const nextChallengeBtn = document.querySelector("#next-challenge-btn");
const selectedLevel = document.querySelector("#selected-level");
const message = document.querySelector("#message");
const totalChallenges = document.querySelector("#total-challenges");


// EVENT LISTENERS

levelSelector.addEventListener("change", () => {
    nextChallengeBtn.className = "btn btn-primary active";
    nextChallengeBtn.focus();
    selectedLevel.innerText = levelSelector.value;
    message.className = "text-success";
    message.innerText = "press button or 'space' key for new challenge";
    showTotalChallenges(levelSelector.value);
})


nextChallengeBtn.addEventListener("click", generateChallenge)

nextChallengeBtn.addEventListener("blur", () => {
    nextChallengeBtn.classList.add("disabled");
    levelSelector.value = "initial";
    levelSelector.focus();
    selectedLevel.innerText = "";
    randomChallenge.innerText = "";
    message.className = "text-danger"
    message.innerText = "select a level to start practicing"
})


var randomNumber;


// FUNCTIONS

function showTotalChallenges(lvl) {
    totalChallenges.innerText = `Total unique challenges: ${LEVELS[lvl].length}`
}

function generateChallenge() {
    const currentLevel = levelSelector.value;
    let randomNumber = Math.floor(Math.random() * LEVELS[currentLevel].length);
    randomChallenge.innerText = LEVELS[currentLevel][randomNumber];
}







