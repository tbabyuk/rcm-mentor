const levelSelector = document.querySelector("#level-selector");
const randomChallenge = document.querySelector("#random-challenge");
const nextChallengeBtn = document.querySelector("#next-challenge-btn");


const LEVELS = {
    prepA: ["C pentascale", "G pentascale", "D pentascale", "A min pentascale", "C major triad"],
    prepB: ["D pentascale", "A pentascale", "F pentascale", "E min pentascale", "D min pentascale", "A min (nat.) pentascale", "C maj contrary motion", "C maj triads", "G maj triads", "A min triads"],
    lvl1: ["C maj scale", "G maj scale", "F maj scale", "A min natural scale", "A min harmonic scale", "E min natural scale", "E min harmonic scale", "D min natural scale", "D min harmonic scale", "C maj contrary motion scale", "Chromatic scale starting on C", "C maj triads (broken)", "C maj triads (solid)", "G maj triads (broken)", "G maj triads (solid)", "F maj triads (broken)", "F maj triads (solid)", "A min triads (broken)", "A min triads (solid)", "E min triads (broken)", "E min triads (solid)", "D min triads (broken)", "D min triads (solid)"]
}


// levelSelector.addEventListener("change", showChallenge);

levelSelector.addEventListener("focus", () => {
    nextChallengeBtn.style.border = "none";
})

levelSelector.addEventListener("change", () => {
    nextChallengeBtn.style.border = "2px solid red";
    nextChallengeBtn.focus();
})


document.addEventListener("keyup", (e) => {
    if(document.activeElement === nextChallengeBtn) {
        showChallenge()
    } else {
        alert("please select level")
    }
})


nextChallengeBtn.addEventListener("focus", showChallenge)


var randomNumber;

function showChallenge() {

    switch (levelSelector.value) {

        case "prepA":
            let prepArandom = Math.floor(Math.random() * LEVELS.prepA.length);
            randomChallenge.innerText = LEVELS.prepA[`${prepArandom}`]
            break;

        case "prepB": 
            let prepBrandom = Math.floor(Math.random() * LEVELS.prepB.length)
            randomChallenge.innerText = LEVELS.prepB[`${prepBrandom}`]
            break;

        case "lvl1":
            let lvl1Random = Math.floor(Math.random() * LEVELS.lvl1.length)
            randomChallenge.innerText = LEVELS.lvl1[`${lvl1Random}`]
            break;
    }
}







