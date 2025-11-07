function checkValidity() {
    const inpObj = document.getElementById("id1");
    if(!inpObj.checkValidity()){
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
}

function checkOverFlow(){
    let text = "value Ok";
    if(document.getElementById("id2").validity.rangeOverflow){
        text = "value too Large";
    }
    document.getElementById('demo2').innerHTML = text
}

function checkUnderFlow(){
    let text = "Value Ok";
    if(document.getElementById("id3").validity.rangeUnderflow){
        text = "Value too small";
    }
    document.getElementById('demo3').innerHTML = text;
}