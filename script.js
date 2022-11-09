
// DOM ELEMENTS

const levelSelector = document.querySelector(".level-selector");
const randomChallenge = document.querySelector("#random-challenge");
const nextChallengeBtn = document.querySelector("#next-challenge-btn");
const selectedLevel = document.querySelector("#selected-level");
const message = document.querySelector("#message");
const totalChallenges = document.querySelector("#total-challenges");


// LEVELS

const LEVELS = {
    prepA: ["C pentascale", "G pentascale", "D pentascale", "A min pentascale", "C major triad"],
    prepB: ["D pentascale", "A pentascale", "F pentascale", "E min pentascale", "D min pentascale", "A min (nat.) pentascale", "C maj contrary motion", "C maj triads", "G maj triads", "A min triads"],
    lvl1: ["C maj scale", "G maj scale", "F maj scale", "A min natural scale", "A min harmonic scale", "E min natural scale", "E min harmonic scale", "D min natural scale", "D min harmonic scale", "C maj contrary motion scale", "Chromatic scale starting on C", "C maj triads (broken)", "C maj triads (solid)", "G maj triads (broken)", "G maj triads (solid)", "F maj triads (broken)", "F maj triads (solid)", "A min triads (broken)", "A min triads (solid)", "E min triads (broken)", "E min triads (solid)", "D min triads (broken)", "D min triads (solid)"],
    lvl2: ["G maj scale", "F maj scale", "B♭ maj scale", "E min harmonic scale", "E min melodic scale", "D min harmonic scale", "D min melodic scale", "G min harmonic scale", "G min melodic scale", "C maj formula pattern", "G maj formula pattern", "Chromatic scale starting on G", "G maj triads (broken)", "G maj triads (solid)", "F maj triads (broken)", "F maj triads (solid)", "B♭ maj triads (broken)", "B♭ maj triads (solid)", "E min triads (broken)", "E min triads (solid)", "D min triads (broken)", "D min triads (solid)", "G min triads (broken)", "G min triads (solid)"]
}


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







