let score = 87;

if(score >= 80){
  console.log('You got an A');
} else if(score >= 68){
  console.log('You got a B');
} else if(score >= 55){
  console.log('You got a C');
} else{
  console.log('You failed! You need to study more!');
}

// ternary operator 
// condition ? rxpressionIfTrue : expressionIfFalse;

let temp = 24;
let weather = temp > 25? 'Sunny' : 'cool';
console.log(`It is a ${weather} day!`);
