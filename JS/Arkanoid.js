import  { drawBall, ballMovement } from './funciones/Ball.js';
import { drawPaddle, paddleMovement} from "./funciones/Paddle.js";
import { initEvents, leftPressed, rightPressed } from './funciones/initEvent.js';

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
let dx = -.5;
let dy = -.5;


// Variables del PADDLE
const paddleHeight = 10;
const paddleWidth = 200;

let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = canvas.height - paddleHeight - 10;


function drawBricks() {}
function collicionBall() {}

function cleanCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


const draw = () => {
  console.log(rightPressed, leftPressed);
  cleanCanvas();

  // Dibujar la pelota y la paleta
  drawBall(ctx, x, y, ballRadius);
  paddleX = paddleMovement(rightPressed, leftPressed, paddleX);
  drawPaddle(ctx, paddleX, paddleY, paddleHeight, paddleWidth);
  drawBricks();

  // Movimiento de la pelota y colisiones
  collicionBall();
  ({ x, y, dx, dy } = ballMovement(canvas, ctx, x, y, ballRadius, dx, dy));

  window.requestAnimationFrame(draw);
}

draw();
initEvents(rightPressed, leftPressed);
