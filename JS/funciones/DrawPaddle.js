export const drawPaddle = (ctx, paddleX, paddleY, paddleHeight, paddleWidth) => {
  ctx.fillStyle = '#fff';
  ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
};
