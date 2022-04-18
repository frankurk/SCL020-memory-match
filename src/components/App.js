import colors from '../data/colors/colors.js';
import animals from "../data/animals/animals.js";
import verbs from '../data/verbs/verbs.js';

//document.getElementById("play").onclick = goToMemory;
//function goToMemory() {
//location.href = "start.html";
//let name = document.getElementById("name").value;
//localStorage.setItem("name", name);
//};

//function gettingUserName() {
// console.log(localStorage.getElementById("name").value);
// document.getElementById("greeting").value = "¡Hola" + localStorage.getItem("name") + "!";
//}
//gettingUserName();

//const colorsArray = App();
const colorssection = document.getElementById("colorssection");
const animalssection = document.getElementById("animalssection");
const verbssection = document.getElementById("verbssection");

// const random = () => {
//   const cardData = data();
//   cardData.sort(() => Math.random() -0.5);
//   return cardData;
// }

const App = () => {
  if (colorssection) {
    for (const item of colors.items) {
      const card = document.createElement("div");
      const face = document.createElement("img");
      const back = document.createElement("div");
      card.classList.value = "card";
      face.classList.value = "face";
      back.classList.value = "back";

      face.src = item.image;

      colorssection.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);
    }
  };
  if (animalssection) {
    for (const item of animals.items) {
      const card = document.createElement("div");
      const face = document.createElement("img");
      const back = document.createElement("div");
      card.classList.value = "card";
      face.classList.value = "face";
      back.classList.value = "back";

      face.src = item.image;

      animalssection.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);
    }
  };

  if (verbssection) {
    for (const item of verbs.items) {
      const card = document.createElement("div");
      const face = document.createElement("img");
      const back = document.createElement("div");
      card.classList.value = "card";
      face.classList.value = "face";
      back.classList.value = "back";

      face.src = item.image;

      verbssection.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);
    };
  };
}


    export default App;
