const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let score = 0;

// Snake starting position
let snake = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 }
];

let dx = 10;
let dy = 0;

function drawSnake() {
  snake.forEach(part => {
    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(part.x, part.y, 10, 10);
  });
}

function moveSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);
  snake.pop();
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSnake();
  moveSnake();
  setTimeout(gameLoop, 100);
}

document.getElementById('startButton').addEventListener('click', () => {
  gameLoop();
});
