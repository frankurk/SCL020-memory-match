import colors from "../data/colors/colors.js";
import animals from "../data/animals/animals.js";
import verbs from "../data/verbs/verbs.js";

const colorssection = document.getElementById("colorssection");
const animalssection = document.getElementById("animalssection");
const verbssection = document.getElementById("verbssection");
const buttonPlay = document.getElementById("play");
//const gettingUserName = document.getElementById("name");
const buttonColors = document.getElementById("buttonColors");
const buttonAnimals = document.getElementById("buttonAnimals");
const buttonVerbs = document.getElementById("buttonVerbs");

if (buttonPlay){
  document.getElementById("play").onclick = function () {
 location.href = "start.html";
  let name = document.getElementById("name").value;
  localStorage.setItem("name", name);
};
}

//if (function gettingUserName) => {
 //console.log(localStorage.getItem("name").value);
 // document.getElementById("greeting").innerHTML = "¡Hola" + localStorage.getItem("name") + "!";

if (buttonColors){
document.getElementById("buttonColors").onclick = function () {
  location.href = 'memorycolors.html';
};
}

if (buttonAnimals){
  document.getElementById("buttonAnimals").onclick = function () {
 location.href = 'memoryanimals.html';
};
}

if (buttonVerbs){
  document.getElementById("buttonVerbs").onclick = function () {
 location.href = 'memoryverbs.html';
};
}

const App = () => {
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

      colorssection.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);

      card.addEventListener("click", (e) => {
        card.classList.toggle("toggleCard");
      });
    }
  }
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

      animalssection.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);

      card.addEventListener("click", (e) => {
        card.classList.toggle("toggleCard");
      });
    }
  }

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

      verbssection.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);

      card.addEventListener("click", (e) => {
        card.classList.toggle("toggleCard");
      });
    }
  }
};

export default App;
