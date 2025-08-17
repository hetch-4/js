// confirm the ending of a string
const confirmEnding = (str1, str2) =>{
  if(str1.slice(-str2.length) === str2 ){
    console.log(str1.slice(-str2.length));
    return true;
  }else{
    console.log(str1.slice(-str2.length));
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));

console.log(confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain"))
