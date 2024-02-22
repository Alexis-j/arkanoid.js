const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // 2D rendering context

canvas.width = 448;
canvas.height = 512;


// Variables de nuestro juego
let counter = 0;


function draw() {
  //aqui haras tus dubujos y check de colisiones
  window.requestAnimationFrame(draw);
}

draw();
