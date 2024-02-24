export const drawBall = (ctx, x, y, ballRadius) => {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.closePath();
};


// BallMovement.js
let gameEnded = false; // Variable para controlar si el juego ya ha terminado

export const ballMovement = (canvas, ctx, x, y, ballRadius, dx, dy) => {
  // rebotar en las paredes laterales
  if (
    x + dx > canvas.width - ballRadius || // colision con la derecha
    x + dx < ballRadius // colision con la izquierda
  ) {
    dx = -dx;
  }
  // colision con la parte de arriba
  if (y + dy < ballRadius) {
    dy = -dy;
  }
  // colision con la parte de abajo
  else if (
    y + dy > canvas.height - ballRadius
  ) {
    console.log('GAME OVER');
    dicument.location.reload();
  }

  x += dx;
  y += dy;

  return { x, y, dx, dy }; // Devolver las nuevas posiciones y velocidades
};
