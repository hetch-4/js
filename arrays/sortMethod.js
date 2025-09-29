let fruits = ['Banana','Orange','Apple','Mango'];
console.log(fruits.sort());

let numbers =[ 141, 200,4,10,40,3];
console.log(numbers.sort()+" .sort() used directly on numbers");
//.sort method does not work on numbers as expected 
//
//to sort numbers using compare function 
//

numbers.sort((a,b) => a-b);

console.log(numbers+"using compare function with sort");
