let numbers = [1,2,3,4,5,6,7,8,9];
let evenNumbers = numbers.filter((num)=>num%2===0);

console.log(evenNumbers);


let developers = [
  {name:"Alice",age: 25},
  {name:"Bob", age: 30},
  {name:"Charlie", age: 35},
  {name:"David", age: 25}
]

let youngMembers = developers.filter((person)=> person.age < 30);
console.log(youngMembers);
