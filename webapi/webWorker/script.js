if(typeof(Worker) !== undefined){
    console.log("Yes! Web worker support");
}

let w;

function startWorker(){
     if(typeof(w)=="undefined"){
        w = new Worker("demoworker.js");
    }
        w.onmessage = function(event){
        document.getElementById("result").innerHTML = event.data;
    };    
}
        
function stopWorker(){
    w.terminate();
    w = undefined;    
}
        
    