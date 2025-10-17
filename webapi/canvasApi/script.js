const canvas = document.getElementById("my-canvas");
canvas.width = 400;
canvas.height = 400;

const ctx = canvas.getContext('2d');

console.log(ctx);

//set bg color 
ctx.fillStyle = 'crimson';

//draw a rectangle
ctx.fillRect(1, 1, 150, 100);

const textCanvas = document.getElementById("text-canvas");

const cts = textCanvas.getContext('2d');

//set bg color
cts.fillStyle="gray";

//set font family
cts.font = "30px Arial";

//draw the text
cts.fillText("Hello canvas!",1,50);