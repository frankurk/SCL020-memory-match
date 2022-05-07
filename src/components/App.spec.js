import App from "./App.js";

describe("App", () => {
  it("should be a function", () => {
    expect(typeof App).toBe("function");
  })
})

  beforeEach(() => {
    jest.resetModules();
  });

test('starts game and gets the name after a click', () => {
  
  //ToDo: Importar el start.html en vez de copiar y pegar el contenido (OPCIONAL)
  document.body.innerHTML =`
    <body class="index">
        <div id="root">
            <h1>Aprende jugando</h1>
            <div class="playButton">
            <input required type="text" id="name" placeholder="Ingresa tu nombre" />
            <button id="play">Jugar</button>
            </div>
        </div>
    </body>
    `;
    //Se agrega el nombre para testear
    document.getElementById("name").value = "Ricardo"

    //Disponibiliza las funciones que vamos a testear
    require("./App.js")


    //ToDo: Probablemente esto está generando el console.error, revisar una forma alternativa de emular un click.
    //genera un click en "play", lo que debería gatillar playGame, lo que debería guardar el nombre en localStorage
    document.getElementById("play").click()
    
    //Esto hace exactamente lo mismo que la linea anterior
    //document.getElementById("play").dispatchEvent(new MouseEvent('click'),{bubbles: true})
    
    //localStorage debería tener el nombre testeado
    expect(localStorage.getItem("name")).toBe("Ricardo");
  });