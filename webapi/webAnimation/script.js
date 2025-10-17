const square = document.querySelector("#square");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");

const animation = square.animate(
    [{ transform: "translateX(0px)" }, { transform: "translateX(500px)" }],
    {
        duration: 2000,
        iteration: Infinity,
        direction: "alternate",
        easing: "ease-in-out"
    }
);

// set the onfinish property to log a message when the animation 
animation.onfinish = () => {
    console.log("Animation finished!");
    
};

//play animation when the play button is clicked
playBtn.addEventListener("click", () => {
    animation.play();
    console.log("you start the animation");
});

//pause the animation on button pause
pauseBtn.addEventListener("click", () => {
    animation.pause();
    console.log("You pause the animation");
});