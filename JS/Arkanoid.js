const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // 2D rendering context

canvas.width = 448;
canvas.height = 800;

// Variables de nuestro juego
let counter = 0;
//variables de la pelota
const ballRadius = 2;

let x = canvas.width / 2;
let y = canvas.height - 30;
// velocidad de la pelota
let dx = -2;
let dy = -2;


function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.closePath();
}


function drawPaddle() {}
function drawBricks() {}

function collicionBall() {}
function ballMovement() {
  // rebotar en las paredes

  if (
    x + dx > canvas.width - ballRadius || // colision con la derecha
    x + dx < ballRadius // colision con la izquierda
  )
  {
    dx = -dx;
  }

  // colision con el techo
  if (y + dy < ballRadius || y + dy > canvas.height - ballRadius) {
    dy = -dy;
  }


  x += dx;
  y += dy;
}
function paddleMovement() {}
function cleanCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function draw() {
  // cleanCanvas();

  // hay que dibujar la pelota
  drawBall();
  drawPaddle();
  drawBricks();
  // drawScore();

  //colisiones y movimientos
  collicionBall();
  ballMovement();
  paddleMovement();


  window.requestAnimationFrame(draw);
}

draw();
