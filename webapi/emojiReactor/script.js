const happyBtn = document.querySelector("#happy-btn");


  const countEl = happyBtn.querySelector(".count");

  let strings = countEl //+ tochange string to num
            .textContent //get string value of count element
            .split("");//split the string to && get element @ index 0

  let num = +strings[0];
happyBtn.addEventListener("click", () => {
  strings.shift();
  //console.log(countEl.textContent);
  //console.log(num )
  strings.unshift(num);
  //console.log(strings.join(''))
  //countEl.textContent = num.join('',rest);
  if(num >10){
    return;
  }else{
    num ++;
  }
  countEl.textContent = strings.join('');
})

