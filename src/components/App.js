import colors from "../data/colors/colors.js";
import animals from "../data/animals/animals.js";
import verbs from "../data/verbs/verbs.js";

const colorssection = document.getElementById("colorssection");
const animalssection = document.getElementById("animalssection");
const verbssection = document.getElementById("verbssection");
const buttonPlay = document.getElementById("play");
const getUserName = document.getElementById("hi");
const buttonColors = document.getElementById("buttonColors");

//var scoreColors = 0;
const buttonAnimals = document.getElementById("buttonAnimals");
const buttonVerbs = document.getElementById("buttonVerbs");

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
  console.log(getUserName)
  window.onload = function () {
    document.getElementById("hi").innerHTML = ("¡Hola " + localStorage.getItem("name") + "!");
  };

}

// Dirige al Memory de Colores
if (buttonColors) {
  document.getElementById("buttonColors").onclick = function () {
    location.href = 'memorycolors.html';
  };
}

// Dirige al Memory de Animales
if (buttonAnimals) {
  document.getElementById("buttonAnimals").onclick = function () {
    location.href = 'memoryanimals.html';
  };
}

// Dirige al Memory de Verbos
if (buttonVerbs) {
  document.getElementById("buttonVerbs").onclick = function () {
    location.href = 'memoryverbs.html';
  };
}

const App = () => {
  let isWaiting = false;

  const checkMaxCards = (e) => {
    const flippedCardAnimals = document.querySelectorAll(".toggleCard");
      console.log(flippedCardAnimals);
      if (flippedCardAnimals.length > 1){
        isWaiting = true;
        flippedCardAnimals.forEach((card) => { 
          setTimeout(() => {
            card.classList.remove("toggleCard");
            isWaiting = false;
          }, 2000);
        })
        
      }
  }

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

      // function scoreColors() {
      // for (
      //   score++;
      //};
      //function drawScoreColors() {
      //  ctx.font = "60px Montserrat";
      // ctx.fillStyle = "#0095DD";
      // ctx.fillText("Score: " + score, 8, 20);
      //};


    };
  };


  
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
        if (!isWaiting) {
        card.classList.toggle("toggleCard");
        checkMaxCards();
        }
      });
    }
//agregar nombre distinto a toggle a cartas match elemento independiente

    if (checkCardAnimals) {
      const checkCardAnimals = (e) => {
      console.log(e);
      const clickedCardAnimals = e.target;
      clickedCardAnimals.classList.add("flipped");
      

        if (flippedCardAnimals.length > 1){ 
          if (
          flippedCardAnimals[0].getAttribute("id") ===
          flippedCardAnimals[1].getAttribute("id")
          )
          {
            console.log("match");
            flippedCardAnimals.forEach((card) =>{
              card.classList.remove("flipped");
              card.style.pointerEvents = "none";
            });
          }

          else {
            console.log("wrong");
            flippedCardAnimals.forEach((card) => {
              card.classList.remove("flipped");
              setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
          }
          
        }
      }  
    };
  };

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
