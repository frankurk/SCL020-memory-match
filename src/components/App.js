import colors from "../data/colors/colors.js";
import animals from "../data/animals/animals.js";
import verbs from "../data/verbs/verbs.js";

const colorssection = document.getElementById("colorssection");
const animalssection = document.getElementById("animalssection");
const verbssection = document.getElementById("verbssection");

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
