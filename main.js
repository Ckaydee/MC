// Functionize Minecraft Fishing Start Code

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);
// Fish count variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// HTML variables
var img = document.getElementById("result-img");
var codEl = document.getElementById("num-cod");
var salmonEl = document.getElementById("num-salmon");
var tropicalEl = document.getElementById("num-tropical");
var pufferEl = document.getElementById("num-puffer");

function fishBtnClicked() {
  // Determine selected character
  let character = document.getElementById("character-select").value;

  if (character == "steve") {
    let randNum = Math.random().toFixed(4);
    console.log(randNum);
    if (randNum <= 0.7) {
      img.src = "img/Raw-Cod.png";
      numCod++;
      codEl.innerHTML = numCod;
    } else if (randNum <= 0.9) {
      img.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonEl.innerHTML = numSalmon;
    } else if (randNum <= 0.95) {
      img.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalEl.innerHTML = numTropical;
    } else {
      img.src = "img/Pufferfish.png";
      numPuffer++;
      pufferEl.innerHTML = numPuffer;
    }
  } else if (character == "alex") {
    let randNum = Math.random().toFixed(4);
    console.log(randNum);
    if (randNum <= 0.1) {
      img.src = "img/Raw-Cod.png";
      numCod++;
      codEl.innerHTML = numCod;
    } else if (randNum <= 0.2) {
      img.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonEl.innerHTML = numSalmon;
    } else if (randNum <= 0.5) {
      img.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalEl.innerHTML = numTropical;
    } else {
      img.src = "img/Pufferfish.png";
      numPuffer++;
      pufferEl.innerHTML = numPuffer;
    }
  } else if (character == "villager") {
    let randNum = Math.random().toFixed(4);
    console.log(randNum);
    if (randNum <= 0.25) {
      img.src = "img/Raw-Cod.png";
      numCod++;
      codEl.innerHTML = numCod;
    } else if (randNum <= 0.5) {
      img.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonEl.innerHTML = numSalmon;
    } else if (randNum <= 0.75) {
      img.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalEl.innerHTML = numTropical;
    } else {
      img.src = "img/Pufferfish.png";
      numPuffer++;
      pufferEl.innerHTML = numPuffer;
    }
  }

  //

  //  Alex Fish Simulator
}
