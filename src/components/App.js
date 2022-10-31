import colors from "../data/colors/colors.js";
import animals from "../data/animals/animals.js";
import verbs from "../data/verbs/verbs.js";
import shuffleCards from "./shuffle.js";
import { createCards } from "./domFunctions.js";

let firstClick = false;
let isWaiting = false;

export const createSection = (randomizedItems, section, backCard) => {
  for (const item of randomizedItems) {
    const card = createCards(item.image, item.id, backCard);

    card.addEventListener("click", () => {
      if (!isWaiting) {
        card.classList.toggle("toggleCard");
        card.classList.add("flipped");
        checkCards();
      }
    });
    section.appendChild(card);
  }
};

const App = () => {

  const buttonPlay = document.getElementById("play");
  if (buttonPlay) {
    document.getElementById("play").addEventListener("click", () => {
      location.href = "start.html";
      let name = document.getElementById("name").value;
      localStorage.setItem("name", name);
    });
  }

  const getUserName = document.getElementById("hi");
  if (getUserName) {
    window.onload = function () {
      document.getElementById("hi").innerHTML = `¡Hola ${localStorage.getItem(
        "name"
      )}!`;
    };
  }

  const buttonToColorsSection = document.getElementById("buttonColors");
  if (buttonToColorsSection) {
    document.getElementById("buttonColors").onclick = function () {
      location.href = "memorycolors.html";
    };
  }

  const buttonToAnimalsSection = document.getElementById("buttonAnimals");
  if (buttonToAnimalsSection) {
    document.getElementById("buttonAnimals").onclick = function () {
      location.href = "memoryanimals.html";
    };
  }

  const buttonToVerbsSection = document.getElementById("buttonVerbs");
  if (buttonToVerbsSection) {
    document.getElementById("buttonVerbs").onclick = function () {
      location.href = "memoryverbs.html";
    };
  }

  const playAgainButton = document.getElementById("playAgain");
  if (playAgainButton) {
    document.getElementById("playAgain").addEventListener("click", () => {
      window.location.reload();
    });
  }

  const nextLevelAnimals = document.getElementById("nextLevelAnimals");
  if (nextLevelAnimals) {
    document.getElementById("nextLevelAnimals").onclick = function () {
      location.href = "memoryanimals.html";
    };
  }

  const nextLevelVerbs = document.getElementById("nextLevelVerbs");
  if (nextLevelVerbs) {
    document.getElementById("nextLevelVerbs").onclick = function () {
      location.href = "memoryverbs.html";
    };
  }

  const goToStartButton = document.getElementById("goToStart");
  if (goToStartButton) {
    document.getElementById("goToStart").onclick = function () {
      location.href = "start.html";
    };
  }

  const colorsSection = document.getElementById("colorssection");
  if (colorsSection) {
    const randomizedItems = shuffleCards(colors.items);
    createSection(randomizedItems, colorsSection, "backColors");
  }

  const animalsSection = document.getElementById("animalssection");
  if (animalsSection) {
    const randomizedItems = shuffleCards(animals.items);
    createSection(randomizedItems, animalsSection, "backAnimals");
  }

  const verbsSection = document.getElementById("verbssection");
  if (verbsSection) {
    const randomizedItems = shuffleCards(verbs.items);
    createSection(randomizedItems, verbsSection, "backVerbs");
  }
};

const checkCards = () => {
  if (!firstClick) {
    time();
    firstClick = true;
  }

  const flippedCards = document.querySelectorAll(".flipped");
  const matchedCards = document.querySelectorAll(".matched");

  if (flippedCards.length === 2) {
    isWaiting = true;
    setTimeout(() => {
      isWaiting = false;
      if (
        flippedCards[0].getAttribute("id") ===
        flippedCards[1].getAttribute("id")
      ) {
        flippedCards.forEach((card) => {
          card.classList.remove("flipped");
          card.classList.add("matched");
          card.style.pointerEvents = "none";
        });
      } else {
        flippedCards.forEach((card) => {
          card.classList.remove("flipped");
          card.classList.remove("toggleCard");
        });
      }
    }, 1000);
    if (matchedCards.length === 6) {
    
      const modal = document.querySelector("#modal");
      modal.showModal();
      playSound();
      if (timer) clearInterval(timer);
      congratulationsMessage();
    }
  }
};

const congratulationsMessage = () => {
  document.getElementById(
    "congrats"
  ).innerHTML = `¡Felicidades ${localStorage.getItem("name")}!`;
  document.getElementById(
    "finalScore"
  ).innerHTML = `Tu puntaje fue ${pointsCounter} puntos`;
};

export const playSound = () => new Audio("assets/sounds/congrats.mp3").play();

let pointsCounter = 100;
let timer = null;
export const time = () => {
  let secs = 0;
  let mins = 0;
  let SS;
  let MM;
  timer = setInterval(() => {
    secs++;
    pointsCounter--;
    if (secs == 60) {
      secs = 0;
      mins++;
    }

    secs < 10 ? (SS = `0${secs}`) : (SS = `${secs}`);
    mins < 10 ? (MM = `0${mins}`) : (SS = `${mins}`);

    document.getElementById("timer").innerHTML = `${MM}:${SS}`;
    document.getElementById("score").innerHTML = `Score: ${pointsCounter}`;
  }, 1000);
};

export default App;
