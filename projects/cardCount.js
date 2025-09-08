//card counting assistant
//
let count = 0;

const cc = card =>{
  if(card>=2 && card<=6){
    count++;
  }
  else if(card>=7 && card<=9){
    count;
  }else{
    count--;
  }

  if(count>=1){
    return count +" "+ "Bet";
  }else if(count===0 || count<1){
    return count + " " + "Hold";
  }

  return count;
}


console.log(cc(2))
console.log(cc("J"))
console.log(cc(9))
console.log(cc(2))
