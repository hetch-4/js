const myElement = document.getElementById("demo");


const btn = document.getElementById("button");

btn.addEventListener("click",geolocation() );


function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        myElement.textContent = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position){
    myElement.textContent = "Latitude: "+ position.coords.latitude + "<br>Longitude: "+position.coords.longitude;
    console.log("Latitude: "+ position.coords.latitude + "<br>Longitude: "+position.coords.longitude);
}
