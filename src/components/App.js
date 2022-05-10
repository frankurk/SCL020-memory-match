/* eslint-disable no-unused-vars */
import colors from "../data/colors/colors.js";
import animals from "../data/animals/animals.js";
import verbs from "../data/verbs/verbs.js";
import shuffle from "./shuffle.js";
import { createCards } from "./domFunctions.js";

//Indica si se ha dado el primer click
let firstClick = false;

//Da tiempo entre volteo de cartas
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
  //Botón jugar obtiene valor para próxima página y dirige a la siguiente página
  const buttonPlay = document.getElementById("play");
  if (buttonPlay) {
    document.getElementById("play").addEventListener("click", () => {
      location.href = "start.html";
      let name = document.getElementById("name").value;
      localStorage.setItem("name", name);
    });
  }

  // Muestra el valor de la página anterior
  const getUserName = document.getElementById("hi");
  if (getUserName) {
    window.onload = function () {
      document.getElementById("hi").innerHTML = `¡Hola ${localStorage.getItem(
        "name"
      )}!`;
    };
  }

  // Dirige al Memory de Colores
  const buttonColors = document.getElementById("buttonColors");
  if (buttonColors) {
    document.getElementById("buttonColors").onclick = function () {
      location.href = "memorycolors.html";
    };
  }

  // Dirige al Memory de Animales
  const buttonAnimals = document.getElementById("buttonAnimals");
  if (buttonAnimals) {
    document.getElementById("buttonAnimals").onclick = function () {
      location.href = "memoryanimals.html";
    };
  }

  // Dirige al Memory de Verbos
  const buttonVerbs = document.getElementById("buttonVerbs");
  if (buttonVerbs) {
    document.getElementById("buttonVerbs").onclick = function () {
      location.href = "memoryverbs.html";
    };
  }

  //* Botones del modal
  const playAgain = document.getElementById("playAgain");
  if (playAgain) {
    document.getElementById("playAgain").addEventListener("click", () => {
      window.location.reload();
    });
  }

  //Botón para el siguiente nivel: Animals
  const nextLevelAnimals = document.getElementById("nextLevelAnimals");
  if (nextLevelAnimals) {
    document.getElementById("nextLevelAnimals").onclick = function () {
      location.href = "memoryanimals.html";
    };
  }

  //Botón para el siguiente nivel: Verbs
  const nextLevelVerbs = document.getElementById("nextLevelVerbs");
  if (nextLevelVerbs) {
    document.getElementById("nextLevelVerbs").onclick = function () {
      location.href = "memoryverbs.html";
    };
  }

  //Botón para volver a la pantalla de niveles
  const goToStart = document.getElementById("goToStart");
  if (goToStart) {
    document.getElementById("goToStart").onclick = function () {
      location.href = "start.html";
    };
  }

  //Memory Colors
  const colorssection = document.getElementById("colorssection");
  if (colorssection) {
    const randomizedItems = shuffle(colors.items);
    createSection(randomizedItems, colorssection, "backColors");
  }

  //Memory Animals
  const animalssection = document.getElementById("animalssection");
  if (animalssection) {
    const randomizedItems = shuffle(animals.items);
    createSection(randomizedItems, animalssection, "backAnimals");
  }

  // Memory Verbos
  const verbssection = document.getElementById("verbssection");
  if (verbssection) {
    const randomizedItems = shuffle(verbs.items);
    createSection(randomizedItems, verbssection, "backVerbs");
  }
};

//Voltear cartas
const checkCards = () => {
  if (!firstClick) {
    time();
    firstClick = true;
  }

  const flippedCards = document.querySelectorAll(".flipped");
  const matchedCards = document.querySelectorAll(".matched");

  //Voltear dos cartas
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
      //Modal
      const modal = document.querySelector("#modal");
      modal.showModal();
      playSound();
      if (timer) clearInterval(timer);
      congratulations();
    }
  }
};

//* Mensaje al ganar
const congratulations = () => {
  document.getElementById(
    "congrats"
  ).innerHTML = `¡Felicidades ${localStorage.getItem("name")}!`;
  document.getElementById(
    "finalScore"
  ).innerHTML = `Tu puntaje fue ${counter} puntos`;
};

//Playsound
export const playSound = () => new Audio("assets/sounds/congrats.mp3").play();

//* Timer y puntaje
let counter = 100;
let timer = null;
export const time = () => {
  let secs = 0;
  let mins = 0;
  let SS;
  let MM;
  timer = setInterval(() => {
    secs++;
    counter--;
    if (secs == 60) {
      secs = 0;
      mins++;
    }

    secs < 10 ? (SS = `0${secs}`) : (SS = `${secs}`);
    mins < 10 ? (MM = `0${mins}`) : (SS = `${mins}`);

    document.getElementById("timer").innerHTML = `${MM}:${SS}`;
    document.getElementById("score").innerHTML = `Score: ${counter}`;
  }, 1000);
};

export default App;
