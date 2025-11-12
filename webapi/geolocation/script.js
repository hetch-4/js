const x = document.getElementById("demo");

const showBtn = document.getElementById("showBtn");


function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
        console.log("hello world");
    }else{
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position){
    x.innerHTML = "Latitude: "+position.coords.latitude+"<br>Longitude: "+position.coords.longitude;
}

showBtn.addEventListener("click", ()=>{
    getLocation();
});