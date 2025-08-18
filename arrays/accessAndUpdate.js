//how to access and update elements in javascript

const fruits = ["apple","banana","cherry"];
//first element is indexed at 0
console.log(fruits[0]);

// in case of index that does not exist returns undefined
console.log(fruits[3]);

//updating the array in th following
fruits[1] ='blueberry';
fruits[3] = 'date'; //adds 'date' at index 3
console.log(fruits);

//push() method adds an element at the end of an array
fruits.push('Orange');
console.log(fruits);

//pop() method removes an element from the end of an array
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

//shift() method removes and retrun  the first element of an array  
//
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

//unshift() method adds an element at the 0 index of an element 

let newFruit = fruits.unshift('Avocado');
console.log(newFruit)
console.log(fruits)
