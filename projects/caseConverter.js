const titleCase = (string) => {
  //split the sentence into array of words 
  let result = string.split(" ")

  //arr to add cased words 
  let arr = [];
  
  //iterate through result array 
  for(let ar of result){
    //each char of the word in result;
    let chars = [];
      for(let a of ar.split("")){
        chars.push(a);
      }
    //destructure to fisrt letter and the rest
    let [first,...rest] = chars;
    let second = rest.join("");
    
    
    let casedWord = first.toUpperCase()+second.toLowerCase();

    arr.push(casedWord);
  }
  //join casedWords to form a string
  return arr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
