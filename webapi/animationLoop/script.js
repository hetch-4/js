
        //
        const rect = document.querySelector(".rect");

        rect.width = window.innerWidth;
        rect.height = "250px";

        //starts at 0
        let position = 0;

        function update(){
            //move the rectangle to the right
            rect.style.left = position+"px";
            position += 1;

            //reset the position when the rectangle reaches
            //the right side of the screen
            if(position>window.innerWidth){
                //move the rect outside the left side of the screen
                position = -rect.offsetLeft;
            }
        }

        function animate(){
            //update the position
            update();

            //request next frame
            requestAnimationFrame(animate);
        }

        




// .container        
const container = document.querySelector(".container");
container.width = window.innerWidth;

const playBtn =  document.getElementById("playJsBtn");
const pauseBtn = document.getElementById("pauseJsBtn");

playBtn.addEventListener("click",()=>{
    //function to play animation
    console.log("play btn clicked");
    //start the animation
        requestAnimationFrame(animate);
});

pauseBtn.addEventListener("click",()=>{
    //function to pause animation
    console.log("pause btn clicked")
    //stop animation
        
});
