// concat() & slice() methods create shallow copies of an array
// concat() creates by merging two or more arrays

let original = [1,2,3,4];
let copy = [].concat(original);
//concat concatenate original to empty array

console.log(copy); //[1,2,3,4]
console.log(copy === original); //false
//return false as it uses strict === 
//

copy = original.slice() 
//using slice with no parameter return a shallow copy of the array  ie the same elements but are different objects

console.log(copy);
console.log(copy === original);
