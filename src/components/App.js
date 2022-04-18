import animals from "../data/animals/animals.js";

const section = document.getElementById("section");

// const random = () => {
//   const cardData = data();
//   cardData.sort(() => Math.random() -0.5);
//   return cardData;
// }

const App = () => {
  for (const item of animals.items) {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList.value = "card";
    face.classList.value = "face";
    back.classList.value = "back";


    face.src = item.image;

    if (section) {
      section.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);
    }
  }
};

export default App;
