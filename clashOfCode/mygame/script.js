const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

//player position
let x = 50, y = 50;
let speed = 8;

//key Controls
const keys = {};
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

//Game loop
function gameloop() {
    //update
    if (keys["ArrowUp"]) y -= speed;
    if (keys["ArrowDown"]) y += speed;
    if (keys["ArrowLeft"]) x -= speed;
    if (keys["ArrowRight"]) x += speed;

    //Draw 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "cyan";
    ctx.fillRect(x, y, 70, 30);
    ctx.fillRect(x, y, 30, 70);
    ctx.fillRect(x, y, 40, 100)


    requestAnimationFrame(gameloop);
}

gameloop();
