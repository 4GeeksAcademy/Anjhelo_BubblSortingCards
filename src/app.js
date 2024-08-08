import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const drawButton = document.getElementById("drawButton");
const sortButton = document.getElementById("sortButton");
let cartasOrdenadas = [];

function CardGenerator() {
  const cantidad = parseInt(document.getElementById("inputNumber").value);
  console.log(cantidad);

  function cambiarNumero(num) {
    switch (num) {
      case "1":
        return "A";
      case "11":
        return "J";
      case "12":
        return "Q";
      case "13":
        return "K";
      default:
        return num;
    }
  }

  function random(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = "";
  cartasOrdenadas = [];
  let type = ["type-heart", "type-spades", "type-diamond", "type-clubs"];
  let number = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13"
  ];

  for (let i = 0; i < cantidad; i++) {
    // Generar clase de carta
    let claseCarta = type[random(type)];

    // Generar palo-carta
    let palo =
      claseCarta === "type-heart" || claseCarta === "type-diamond"
        ? ["♦", "♥"]
        : ["♠", "♣"];
    let paloCarta = palo[random(palo)];

    // Generar numero de carta
    let numero = number[random(number)];
    let cardNumber = cambiarNumero(numero);

    // Crear y modificar el div
    let card = document.createElement("div");
    card.classList.add("card");

    let top = document.createElement("div");
    top.classList.add(claseCarta);
    top.innerHTML = `<h1>${paloCarta}</h1>`;

    let Number = document.createElement("div");
    Number.classList.add("middleNumber");
    Number.innerHTML = `<h1>${cardNumber}</h1>`;

    let bottom = document.createElement("div");
    bottom.classList.add(claseCarta);
    bottom.innerHTML = `<h1>${paloCarta}</h1>`;

    card.appendChild(top);
    card.appendChild(Number);
    card.appendChild(bottom);
    cardsContainer.appendChild(card);

    let cartaContenido = {
      num: parseInt(numero),
      codigo: card.innerHTML
    };
    cartasOrdenadas.push(cartaContenido);
  }
}

drawButton.addEventListener("click", () => {
  CardGenerator();
  console.log(cartasOrdenadas);
});

sortButton.addEventListener("click", () => {
  const divOrden = document.getElementById("divCartasOrdenadas");
  divOrden.innerHTML = "";
  let wall = cartasOrdenadas.length - 1;

  //
  while (wall > 0) {
    let index = 0;

    while (index < wall) {
      if (cartasOrdenadas[index].num > cartasOrdenadas[index + 1].num) {
        //
        let aux = cartasOrdenadas[index];
        cartasOrdenadas[index] = cartasOrdenadas[index + 1];
        cartasOrdenadas[index + 1] = aux;

        //
      }

      let contenedor = document.createElement("div");
      contenedor.classList.add("pasos");

      for (let i = 0; i < cartasOrdenadas.length; i++) {
        divOrden.appendChild(contenedor);
        let cartaOrden = document.createElement("div");
        cartaOrden.classList.add("card");
        cartaOrden.innerHTML = cartasOrdenadas[i].codigo;
        contenedor.appendChild(cartaOrden);
      }
      index++;
    }
    wall--;
  }

  console.log(cartasOrdenadas);
});
