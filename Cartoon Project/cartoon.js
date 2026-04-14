// Get canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


ctx.fillStyle = "#010417";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.arc(700, 80, 40, 0, Math.PI * 2);
ctx.fillStyle = "#f5f3ce";
ctx.fill();
ctx.stroke();

function drawCloud(x, y) {
    ctx.fillStyle = "#d3d3d3";

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.arc(x + 25, y - 10, 25, 0, Math.PI * 2);
    ctx.arc(x + 55, y, 20, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}
drawCloud(100, 80);
drawCloud(300, 120);
drawCloud(500, 90);

ctx.fillStyle = "#053322";
ctx.fillRect(0, 350, canvas.width, 150);

ctx.fillStyle = "#5c4033";
ctx.fillRect(300, 250, 200, 150);
ctx.strokeRect(300, 250, 200, 150);

ctx.beginPath();
ctx.moveTo(300, 250);
ctx.lineTo(400, 180);
ctx.lineTo(500, 250);
ctx.closePath();
ctx.fillStyle = "#8b0000";
ctx.fill();
ctx.stroke();

ctx.fillStyle = "black";
ctx.fillRect(375, 300, 50, 100);

ctx.fillStyle = "yellow";
ctx.fillRect(320, 270, 40, 40);
ctx.fillRect(440, 270, 40, 40);

ctx.strokeRect(320, 270, 40, 40);
ctx.strokeRect(440, 270, 40, 40);
