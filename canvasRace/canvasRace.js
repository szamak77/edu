const canvas = document.getElementById("canvasRace");
const ctx = canvas.getContext("2d");


const x = canvas.width;
const y = canvas.height;
const ballRadius = 30;

function drawTrack() {
    ctx.beginPath();
    ctx.fillStyle = "#9E6902";
    ctx.fillRect(x - 280, y - 140, x - 40, y - 20);
    ctx.fillStyle = "#0F991C";
    ctx.fillRect(x - 220, y - 100, x - 160, y - 100);
    ctx.strokeStyle = "#fff";
    ctx.moveTo(x - 140, y - 10);
    ctx.lineTo(x - 140, y - 50);
    ctx.stroke();
    ctx.closePath();
}

function drawBlackCar() {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(x - 155, y - 46, 10, 5);
    ctx.closePath();
}

function drawGreyCar() {
    ctx.beginPath();
    ctx.fillStyle = "grey";
    ctx.fillRect(x - 155, y - 37, 10, 5);
    ctx.closePath();
}

function drawBlueCar() {
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.fillRect(x - 155, y - 28, 10, 5);
    ctx.closePath();
}

function drawYellowCar() {
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.fillRect(x - 155, y - 19, 10, 5);
    ctx.closePath();
}

function draw() {
    drawTrack();
    drawBlackCar();
    drawGreyCar();
    drawBlueCar();
    drawYellowCar();
}

draw();
//console.log(drawStartLine);