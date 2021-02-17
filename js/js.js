//-------------------------VARIABLES------------------------//

let numAleatorio = Math.floor(Math.random() * 100) + 1; // Generamos un número aleatorio y lo guardamos en una variable //
const input = document.querySelector("#input"); // Capturamos lo que introduce el jugador //
const button = document.querySelector("#button"); // Capturamos el boton //
const mensajes = document.querySelector('.mensajes') // Bloque que contiene los mensajes //
const intentos = document.querySelector(".intentos"); // Generamos un párrafo que mostrará los intentos //
const comentario = document.querySelector(".comentario"); // Generamos un comentario sobre el ingreso //
const consejo = document.querySelector(".consejo"); // Generamos un párrafo que mostrará un consejo //
const reglas = document.querySelector(".reglas"); // Párrafo de las reglas de juego //
const inputText = document.querySelector('.inputText') // Bloque que contiene label + input + button //
let h1 = document.querySelector(".h1"); // Capturamos el título //
const reinicio = document.querySelector(".reinicio");
let contador = 1;
let numUsuario;
input.focus();

//------------------------FUNCIONES-----------------------//

button.addEventListener('click', () => { // Capturamos el click y pasamos a número //
  numUsuario = parseInt(input.value);
  input.value = '';
  input.focus();
  comprobacion();
})

function comprobacion() { // Comprobamos que este dentro del rango y que sea un número//2020
  if (isNaN(numUsuario) || numUsuario < 0 || numUsuario > 100) {
    comentario.innerHTML = '!!! Ingresa un NÚMERO entre 0 y 100 !!!';
    comentario.className = 'coment';
  } else {
    evaluacion();
  }
}

function evaluacion() { // Evaluamos si el número es el ganador o no //
  if (numUsuario == numAleatorio) {
    win()
  } else {
    noWin()
  }
}

function win() { // Ocurrencias al ganar //
  h1.innerHTML = 'Ganaste !!!';
  h1.className = 'win';
  reglas.innerHTML = `Muy bien, "${numUsuario}" era el número que buscábamos.` + '<br style="margin-top: 5%">' + `Utilizaste ${contador} intentos para ganar.`;
  reglas.className = 'msnInt';
  inputText.innerHTML = '';
  mensajes.innerHTML = '';
  confetti.start();
  reinicioJuego();
}

function noWin() { // Ocurrencias al no acertar //
  if (contador === 1) {
    intentos.innerHTML = 'Intentos anteriores: ';
  }
  intentos.innerHTML += numUsuario + ' - ';
  contador++;
  input.value = '';
  input.focus();
  comentario.innerHTML = respuesta();
  comentario.className = 'coment';
  contadorIntentos();
  consejos();
}

function contadorIntentos() { //Intentos y fin del juego //
  if (contador === 10) {
    h1.innerHTML = 'Ups se acabó el juego !!!';
    h1.className = 'win2';
    reglas.innerHTML = 'Usaste los 10 intentos';
    reglas.className = 'msnInt';
    inputText.className = 'btnReinicio';
    inputText.innerHTML = '';
    mensajes.innerHTML = '';
    reinicioJuego();
  }
}

function consejos() {
  if (numAleatorio > numUsuario) {
    consejo.innerHTML = 'Consejo: Prueba un número <span style="color: rgb(255, 0, 0)"> mas alto.</span> Intentemos de nuevo!!';
  } else {
    consejo.innerHTML = 'Consejo: Prueba un número <span style="color: rgb(255, 0, 0)"> mas bajo.</span> Intentemos de nuevo!!';
  }
}

function respuesta() { // Mensajes sin no hay acierto //
  text_array = new Array(
    `Hummmmm!! <span style="color: rgb(208, 255, 0)"> "${ numUsuario }" </span> no es el número que buscamos.`,
    `Parece que <span style="color: rgb(208, 255, 0)">"${ numUsuario }" </span> no es el número correcto.`,
    `Mala suerte <span style="color: rgb(208, 255, 0)">"${ numUsuario }" </span> no es el número que estamos buscando.`);
  let num = Math.round(Math.random() * 2);
  return text_array[num];
}

function reinicioJuego() {
  resetBtn = document.createElement('button');
  reinicio.appendChild(resetBtn);
  resetBtn.innerHTML = 'Jugar de nuevo';
  resetBtn.addEventListener('click', resetJuego);
}

function resetJuego() {
  location.reload();
}


