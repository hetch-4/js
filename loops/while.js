//while loop runs the block of code as long as condition is true


let userInput = Math.floor(Math.random() * 10 );
  //prompt('Enter a number between 1-10');

while(isNaN(userInput) || Number(userInput)<1 || Number(userInput) > 10){
  console.log('Invalid input. Please enter a number between 1 and 10.');
}

console.log('You\'ve entered a valid number');


//do...while runs the block of code atleast once before checking the condition

do{
  let userInput = Math.floor(Math.random() * 15);
  //prompt('Enter a number between 1-10');
}while( Number(userInput)<1 || Number(userInput) >10);

console.log('you\'ve entered a valid number');
