const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// ctx.fillRect(50, 50, 100, 200); // x좌표, y좌표, 가로, 세로

ctx.rect(50, 50, 100, 100); // 선 그음
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill(); // 색 채움

ctx.beginPath();    // 새 경로
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "red";
ctx.fill();
