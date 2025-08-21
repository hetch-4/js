const reverseString = string =>{
  let split = string.split('');
  let reverse = split.reverse();
  let join = reverse.join('');

  return join;
}

console.log(reverseString('Hello'));
