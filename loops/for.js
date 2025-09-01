 for(let i=0; i < 5; i++){
   console.log(i)
 }


//for..of loop is used when you need to loop over value of an ilterable
//ie arrays, strings

console.log('element of an array');
let numbers = [1,2,3,4,5,6];

for(let num of numbers){
  console.log(num);
}

console.log('String characters looped over');
let str = 'helloword';
//created a string and for statement below loops through its character represented by char
for(let char of str){
  console.log(char);
}

//example dealing with arrays

let people = [
  {name: 'John', age:21},
  {name: 'Paul', age:42}
];

for(let person of people){
  console.log(`${person.name} is ${person.age} years old`);
}

