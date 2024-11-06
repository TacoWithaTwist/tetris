const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (ctx) {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
