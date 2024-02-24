export const drawPaddle = (ctx, paddleX, paddleY, paddleHeight, paddleWidth) => {
  ctx.fillStyle = '#fff';
  ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
};


// La función paddleMovement ahora devuelve el nuevo valor de paddleX
export const paddleMovement = (rightPressed, leftPressed, paddleX) => {
  let newPaddleX = paddleX; // Crear una variable local para almacenar el nuevo valor

  if (rightPressed) {
    newPaddleX += 5;
  } else if (leftPressed) {
    newPaddleX -= 5;
  }

  return newPaddleX; // Devolver el nuevo valor
}
