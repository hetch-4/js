//hasOwnProperty() method return boolean if an object has a specified property
//

let person = {
  name: 'Alice',
  age: 30
};

console.log(person.hasOwnProperty('name'));//true
console.log(person.hasOwnProperty('job'));//false

//another way to chek for property in object is - in -

console.log('name' in person); // true


// another method is checking if it is undefined

console.log(person.name !== undefined);//true
