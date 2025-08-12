let result = true && 'hello';
// && operator checks if both checks if both operands are true if true returns the second value 
console.log(result); // returns hello
console.log(0&&3); //return 0 since first valu 0 is falsy

//&& used to check multiple conditions
//example

if(2<3 && 3<4){
  console.log('the if block runs');
}else {
  console.log('the else block runs');
}


// | logical OR operator check if either of the operand is truthy and returns the truthy operand
result = 'this is truthy' || false;
console.log(result);

result = 0 || 'this is also truthy';
console.log(result);

let userInput ;
if(userInput || 'Guest'){
  console.log(`A user is present :${userInput}`);
} else{
  console.log('No user detected');
}


//nullish coalescing ??
//returns a value only when the second value is null or undefined
result = null ?? 'default';
console.log(result);

const userSetting ={
  theme : null,
  volume : 0,
  notification : false,
};

let theme = userSetting.theme ?? 'light';
console.log(theme); 
