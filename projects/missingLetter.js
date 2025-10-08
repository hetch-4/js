const fearNotLetter = string =>{
  //console.log(string)
  let newArr = string.split('');
  //console.log(newArr);
  let charCode = [];
  newArr.forEach(char => charCode.push(char.charCodeAt()))

  //console.log(charCode)
  for(let i=1; i<charCode.length; i++){
    if(charCode[i] === charCode[i-1]+1){
      //console.log(newArr[i]);
    }else{
      return (String.fromCharCode(charCode[i]-1))
    }
  }
}

console.log(fearNotLetter('abce'))


