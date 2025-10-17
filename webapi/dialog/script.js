const dialog = document.getElementById("my-modal");
const openButton = document.getElementById("open-modal");
const closeButton = document.getElementById("close-modal");


openButton.addEventListener("click", ()=>{
    dialog.showModal();
    //dialog.show() to allow interaction with the rest of web 
    //when showing modal
})

closeButton.addEventListener("click", ()=>{
    dialog.close();
})