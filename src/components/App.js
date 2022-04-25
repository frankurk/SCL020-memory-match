import colors from "../data/colors/colors.js";
import animals from "../data/animals/animals.js";
import verbs from "../data/verbs/verbs.js";

const colorssection = document.getElementById("colorssection");
const animalssection = document.getElementById("animalssection");
const verbssection = document.getElementById("verbssection");
const buttonPlay = document.getElementById("play");
const getUserName = document.getElementById("hi");
const congrats = document.getElementById("congrats");
const buttonColors = document.getElementById("buttonColors");
let counter = 0;
//let match = 8;
//let scoreText = document.querySelector("score");
const buttonAnimals = document.getElementById("buttonAnimals");
const buttonVerbs = document.getElementById("buttonVerbs");
const time = document.getElementById("timer");
let firstClick = false;

//Botón jugar obtiene valor para próxima página y dirige a la siguiente página
if (buttonPlay) {
  document.getElementById("play").onclick = function () {
    location.href = "start.html";
    let name = document.getElementById("name").value;
    localStorage.setItem("name", name);
  };
}

// Muestra el valor de la página anterior
if (getUserName) {
  window.onload = function () {
    document.getElementById("hi").innerHTML =
      `¡Hola ${localStorage.getItem("name")}!`;
  };
}

// Dirige al Memory de Colores
if (buttonColors) {
  document.getElementById("buttonColors").onclick = function () {
    location.href = "memorycolors.html";
  };
}

// Dirige al Memory de Animales
if (buttonAnimals) {
  document.getElementById("buttonAnimals").onclick = function () {
    location.href = "memoryanimals.html";
  };
}

// Dirige al Memory de Verbos
if (buttonVerbs) {
  document.getElementById("buttonVerbs").onclick = function () {
    location.href = "memoryverbs.html";
  };
}

//Felicitar con el nombre
if (congrats) {
  window.onload = function () {
    document.getElementById("congratulations").innerHTML =
      `¡Felicidades ${localStorage.getItem("name")}!`;
  };
}


//Da tiempo entre volteo de cartas
let isWaiting = false;

//Modal
const modal = document.querySelector("#modal");

const App = () => {
  //Memory Colors
  if (colorssection) {
    const randomizedItems = colors.items.sort(() => Math.random() - 0.5);
    for (const item of randomizedItems) {
      const card = document.createElement("div");
      const face = document.createElement("img");
      const back = document.createElement("div");
      card.classList.value = "card";
      face.classList.value = "face";
      back.classList.value = "backColors";

      face.src = item.image;
      card.setAttribute("id", item.id);

      colorssection.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);

      card.addEventListener("click", (e) => {
        if (!isWaiting) {
          card.classList.toggle("toggleCard");
          checkCards(e);
        }
      });
    }
  }

  //Memory Animals
  if (animalssection) {
    const randomizedItems = animals.items.sort(() => Math.random() - 0.5);
    for (const item of randomizedItems) {
      const card = document.createElement("div");
      const face = document.createElement("img");
      const back = document.createElement("div");
      card.classList.value = "card";
      face.classList.value = "face";
      back.classList.value = "backAnimals";

      face.src = item.image;
      card.setAttribute("id", item.id);

      animalssection.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);

      card.addEventListener("click", (e) => {
        if (!isWaiting) {
          card.classList.toggle("toggleCard");
          checkCards(e);
        }
      });
    }
  }

  // Memory Verbos
  if (verbssection) {
    const randomizedItems = verbs.items.sort(() => Math.random() - 0.5);
    for (const item of randomizedItems) {
      const card = document.createElement("div");
      const face = document.createElement("img");
      const back = document.createElement("div");
      card.classList.value = "card";
      face.classList.value = "face";
      back.classList.value = "backVerbs";

      face.src = item.image;
      card.setAttribute("id", item.id);

      verbssection.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);

      card.addEventListener("click", (e) => {
        if (!isWaiting) {
          card.classList.toggle("toggleCard");
          checkCards(e);
        }
      });

      if (!firstClick) {
        if (time) {
          let secs = 0;
          let mins = 0;
          let SS;
          let MM;
          setInterval(() => {
            secs++;
            if (secs == 60) {
              secs = 0;
              mins++;
            }

            secs < 10 ? (SS = `0${secs}`) : (SS = `${secs}`);
            mins < 10 ? (MM = `0${secs}`) : (SS = `${mins}`);

            document.getElementsByClassName("timer").innerHTML = `$(MM):$(SS)`;
          }, 1000);
        }
      }
    }
  }
};

//Voltear cartas
const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
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
          counter += 50;
          document.getElementById("score").innerHTML = `Score: ${counter}`;
        });
      } else {
        flippedCards.forEach((card) => {
          card.classList.remove("flipped");
          card.classList.remove("toggleCard");
        });
      }
    }, 1000);
    if (matchedCards.length === 6) {
      modal.showModal();
    }
  }
};

//Timer

export default App;
