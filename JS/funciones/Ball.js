
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
  } if (y + dy > canvas.height - ballRadius && !gameEnded) {
    // Si la pelota toca el suelo y el juego no ha terminado
    if (x > paddleX && x < paddleX + paddleWidth) {
      // Si la pelota toca el paddle
      dy = -dy;
    } else {
      alert('GAME OVER'); // Mostrar un mensaje de GAME OVER
      document.location.reload(); // Recargar la página
    }
  }

  x += dx;
  y += dy;

  return { x, y, dx, dy }; // Devolver las nuevas posiciones y velocidades
};
