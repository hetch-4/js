//arrow functions 

const greeting = (name) => {
  console.log(`Hello, ${name}!`);
}

greeting('Joseph');


//if the function has only one parameter

const greet = name => {
  console.log(`Hello, ${name}!`);
};
greet('Gracie');

//if it has no parameter
const sayHello = () => {
  console.log('Hello, You!');
}
sayHello();

// if the function contains one line of code 

const greetings = name => console.log(`Hello, ${name}! \n MF`);

greetings('Alpha');

//using return statement

const calculateArea = (width, height) =>{
  return width * height;
};
console.log(calculateArea(4,9));
//removing the curly brackets in the function above return an error
//to clean up the code remove the {} and return statement

const area = (width, height) => width * height;
console.log(area(5,6));

let multiply = (a, b=1) => a*b;
console.log(multiply(5));
console.log(multiply(4,2));
