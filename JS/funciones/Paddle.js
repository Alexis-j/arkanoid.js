const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // 2D rendering context


export const drawPaddle = (ctx, paddleX, paddleY, paddleHeight, paddleWidth) => {
  ctx.fillStyle = '#fff';
  ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
};


// La función paddleMovement ahora devuelve el nuevo valor de paddleX
export const paddleMovement = (rightPressed, leftPressed, paddleX, paddleWidth) => {
  let newPaddleX = paddleX; // Crear una variable local para almacenar el nuevo valor

  const PADDLE_SENCITIVITY = 4;

  if (rightPressed && newPaddleX < canvas.width - paddleWidth) {
    newPaddleX += PADDLE_SENCITIVITY;
  } else if (leftPressed &&  newPaddleX > 0) {
    newPaddleX -= PADDLE_SENCITIVITY;
  }

  return newPaddleX;
}
