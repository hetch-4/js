const truncateString= (string,num)=>{
  if(string.length<=num){
    return string;
  }else{
    return string.replace(string.slice(num),'...')
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))
