import App from './components/App.js';
//import colors from './data/colors/colors.js';

document.getElementById("play").onclick = goToMemory;
function goToMemory() {
   location.href = "start.html";
   let name = document.getElementById("name").value;
   localStorage.setItem("name", name);
};

//function gettingUserName() {
  // console.log(localStorage.getElementById("name").value);
  // document.getElementById("greeting").value = "¡Hola" + localStorage.getItem("name") + "!";
//}
//gettingUserName();

"memoryanimals.html"

const colorsArray = App();
document.getElementById('root').appendChild(App());

