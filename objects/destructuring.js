let person = {
  name: 'Alice',
  age: 23,
  city: 'Nairobi'
}

//using destructuring to extract name & age from the person object;
let {name, age} = person;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);

let {name: personName, age: personAge} = person;

console.log(`Name: ${personName}`);
console.log(`Age: ${personAge}`);

//destructuring allows for you to set default values

let {naMe,aGe,cOuntry = 'Unknown'} = person;
console.log(`Country: ${cOuntry}`);

//the shorthand notation of destructuring
name = 'Bob';
age = 27;

person = {name, age};
console.log(person);

//shorthand notattion is useful when returning objects from a function 

const createPerson = (name,age) => {
  return {name,age};
};
person = createPerson('charlie',21);
console.log(person);
