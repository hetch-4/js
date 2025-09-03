const repeatStringNumTimes = (string,num)=>{
  let arr = [];
  let i=0;
  do{
    if(num>0){
      arr.push(string);
      i++;
    }else{
      return '';
    }
  }while(i<num);

  return arr.join('');
}

console.log(repeatStringNumTimes("*", 3) )
