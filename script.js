
import { LEVELS } from "./levels.js";


// DOM ELEMENTS

const levelSelector = document.querySelector("#level-selector");
const randomChallenge = document.querySelector("#random-challenge");
const nextChallengeBtn = document.querySelector("#next-challenge-btn");
const selectedLevel = document.querySelector("#selected-level");
const totalChallenges = document.querySelector("#total-challenges");
const currentYear = document.querySelector("#year");



// EVENT LISTENERS

levelSelector.addEventListener("change", () => {
    nextChallengeBtn.className = "btn btn-primary active";
    nextChallengeBtn.focus();
    selectedLevel.innerText = levelSelector.value;
    randomChallenge.innerText = "press button or 'space'"
    showTotalChallenges(levelSelector.value);
})

document.addEventListener('keyup', (e) => {
    if(e.key == " ") {
        nextChallengeBtn.focus();
    }
})

nextChallengeBtn.addEventListener("click", generateChallenge)


// FUNCTIONS

function showTotalChallenges(lvl) {
    totalChallenges.innerText = `Total unique challenges: ${LEVELS[lvl].length}`
}

function generateChallenge() {
    const currentLevel = levelSelector.value;
    let randomNumber = Math.floor(Math.random() * LEVELS[currentLevel].length);
    randomChallenge.innerText = LEVELS[currentLevel][randomNumber];
}


// OTHER

const lang = navigator.language;

const today = new Date();
const year = today.toLocaleString(lang, {
    year: "numeric"
})
currentYear.innerText = year;









