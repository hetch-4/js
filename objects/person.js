//object is a data structure that allows you to store related data and funtionality
const person = {
  name: 'Alice',
  age: 30,
  city: 'New York'
};

//above is an object person with 3 properties name, age, city

//how to acces object properties
console.log(person.age);
console.log(person.name);

console.log(person['name']);
console.log(person['age']);

//bracket allow to use varibles
let propertyName = "city";
console.log(person[propertyName]); 
