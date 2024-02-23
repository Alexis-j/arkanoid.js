// BallMovement.js
let gameEnded = false; // Variable para controlar si el juego ya ha terminado

export const ballMovement = (canvas, ctx, x, y, ballRadius, dx, dy) => {
  // rebotar en las paredes
  if (
    x + dx > canvas.width - ballRadius || // colision con la derecha
    x + dx < ballRadius // colision con la izquierda
  ) {
    dx = -dx;
  }
  // colision con el techo
  if (y + dy < ballRadius) {
    dy = -dy;
  }

  if (y + dy > canvas.height - ballRadius && !gameEnded) {
    
  }

  x += dx;
  y += dy;

  return { x, y, dx, dy }; // Devolver las nuevas posiciones y velocidades
};
