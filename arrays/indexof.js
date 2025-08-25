// syntax for finding index of an element in an array 
// array.indexOf(element, fromIndex) 
// fromIndex is the starting point of the search of the element // it is not necessary

let fruits = ['apple', 'banana', 'orange', 'banana'];
let index = fruits.indexOf('banana') //banana is of index 1&3
console.log(index); // returns 1 index of first banana

index = fruits.indexOf('grape'); //returns -1 since ggrape is not in the array fruits
console.log(index) // -1

let colors = ['red', 'green', 'blue', 'yellow', 'green'];
index = colors.indexOf('green', 3);//starting index is 3 hence next 'green' of index 4 is returned
console.log(index); //4
