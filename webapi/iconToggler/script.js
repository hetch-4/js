const btns = document.querySelectorAll(".favorite-icon");
btns.forEach((btn)=>{
  btn.addEventListener("click", ()=> {
    
    const filledHeart = ()=>{
      btn.classList.remove("filled");
      btn.innerHTML = "&#9825;"};

    const emptyHeart  = ()=>{
      btn.classList.add("filled");
      btn.innerHTML = "&#10084;"
      };


  
  return btn.classList.contains("filled") ? filledHeart() : emptyHeart();

  })
})

