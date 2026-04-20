// Get canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// night color backdrop
ctx.fillStyle = "#010417";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// moon
ctx.beginPath();
ctx.arc(700, 80, 40, 0, Math.PI * 2);
ctx.fillStyle = "#7a7a79";
ctx.fill();
ctx.stroke();

// clouds
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

// ground color
ctx.fillStyle = "#053322";
ctx.fillRect(0, 350, canvas.width, 150);

// house (bottom piece)
ctx.fillStyle = "#5c4033";
ctx.fillRect(300, 250, 200, 150);
ctx.strokeRect(300, 250, 200, 150);

// roof
ctx.beginPath();
ctx.moveTo(300, 250);
ctx.lineTo(400, 180);
ctx.lineTo(500, 250);
ctx.closePath();
ctx.fillStyle = "#8b0000";
ctx.fill();
ctx.stroke();

// door
ctx.fillStyle = "black";
ctx.fillRect(375, 300, 50, 100);

// windows
ctx.fillStyle = "yellow";
ctx.fillRect(320, 270, 40, 40);
ctx.fillRect(440, 270, 40, 40);
ctx.strokeRect(320, 270, 40, 40);
ctx.strokeRect(440, 270, 40, 40);

// add text
ctx.fillStyle = "white";
ctx.font = "32px Arial";
ctx.fillText("Good Night 😴", 80, 220);


function drawFence(x, y) {
    ctx.save();
    ctx.translate(x, y);

    ctx.strokeStyle = "white";
    ctx.lineWidth = 9;

    for (var i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -40);
        ctx.stroke();

        ctx.translate(20, 0);
    }

    // fencing details
    ctx.beginPath();
    ctx.moveTo(-20 * 10, -30);
    ctx.lineTo(-20, -30);
    ctx.stroke();

    ctx.restore();
}
drawFence(50, 350); // draw fence 1
drawFence(560, 350); // draw fence 2
