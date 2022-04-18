//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
//import 'Frontend Web Dev' from '../data/webdev/webdev.js';
//console.log(webdev);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

import colors from '../data/colors/colors.js';
console.log(colors)

let data = colors;
import colors from '../data/colors/colors.js';
console.log(colors)

const App = () =>{
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = 'Hola mundo!';

  return el;
};

const divColor = () => {
  let colorsArray = [];
  console.log(colorsArray);


  for (let i = 0; i < 8; i++) {
    const bgColor = document.createElement("div");
    const image = document.createElement("img");
    bgColor.className = "card";
    image.className = "image";
    image.setAttribute("src", colors.items[i].image);
    card.appendChild(image);

    colorsArray.push(card);
  }

  return colorsArray;
};


 

export default App;
