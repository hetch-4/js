function greet(name){
  console.log(`Hello, ${name}.`);
}

greet('Jessica');
greet('Anna');
greet('Nick');

//functions have a return value which is undefined by default
function doSomething(){
  console.log('Doing Something.');
}
let result = doSomething();
console.log(result) // undefined

//to return a value you need a specific value using // return // statement

function calculateSum(num1, num2){
  return num1 + num2;
}
console.log(calculateSum(7,6));

// the above are named functions
// below is anonymous function 

const sum = function(num1,num2){
  return num1 + num2;
};
console.log(sum(3,2)); // return the sum of 3,2


//function support default parameters 
//used when it is called wiyhout an argument

function greetings(name = 'Guest'){
  console.log(`Hello, ${name}`);
}
greetings();
greetings('Jesse');


function mystery(a,b=3){
  return a*b;
}
console.log(mystery(4));
