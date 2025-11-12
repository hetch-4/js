const myElement = document.getElementById("demo");

const btn = document.getElementById("showBtn");

btn.addEventListener("click",()=>{
    console.log("js")
    geolocation();
});


function showPosition(position){
    myElement.textContent = "Latitude: "+ position.coords.latitude + "<br>Longitude: "+position.coords.longitude;
    console.log("Latitude: "+ position.coords.latitude + "<br>Longitude: "+position.coords.longitude);
}

function error(err){
    console.warn(`Error (${err.code}): ${err.message}`);
}

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge:0
};

function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,error,options);
    }else{
        myElement.textContent = "Geolocation is not supported by this browser.";
    }
}

