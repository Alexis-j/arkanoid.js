import  { drawBall } from './funciones/DrawBall.js';
import { ballMovement } from './funciones/BallMovement.js';
import { drawPaddle } from "./funciones/DrawPaddle.js";
// import { initEvents } from './funciones/initEvent.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // 2D rendering context

canvas.width = 448;
canvas.height = 600;

// Variables de la PELOTA
let counter = 0;
//variables de la pelota
const ballRadius = 3;

let x = canvas.width / 2;
let y = canvas.height - 30;
// velocidad de la pelota
let dx = -1;
let dy = -1;


// Variables del PADDLE
const paddleHeight = 10;
const paddleWidth = 50;

let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = canvas.height - paddleHeight - 10;


let rightPressed = false;
let leftPressed = false;

function drawBricks() {}
function collicionBall() {}
function paddleMovement() {
  if (rightPressed) {
    paddleX += 7;
  } else if (leftPressed) {
    paddleX -= 7;
  }
}

function cleanCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


const draw = () => {
  cleanCanvas();

  // hay que dibujar la pelota
  drawBall(ctx, x, y, ballRadius);
  drawPaddle(ctx, paddleX, paddleY, paddleHeight, paddleWidth);
  drawBricks();
  // drawScore();

  //colisiones y movimientos
  collicionBall();
  ({ x, y, dx, dy } = ballMovement(canvas, ctx, x, y, ballRadius, dx, dy));
  paddleMovement();


  window.requestAnimationFrame(draw);
}

draw();
// initEvents();
