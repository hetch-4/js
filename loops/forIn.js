//for ..in is used best to iterate properties of an object

let fruit = {
  name: 'Apple',
  color: 'red',
  price: 0.99
}

for (let prop in fruit){
  console.log(fruit[prop]);
};
//prop is used as the property of fruit ta access its values fruit[prop]

//dealing with a nested object
console.log('Accessing a nested object in an object');
let person ={
  name: 'John',
  age: 30,
  address: {
    street: '123 Main st',
    city: 'Mombasa',
    state: 'CA'
  }
};

console.log('before using nested for..in');
for(let prop in person){
  console.log(person[prop]);
}
//John
//30
//{ street: '123 Main st', city: 'Mombasa', state: 'CA' }

//to access a nested object we use an nested for in statement

function isObject(obj){
  return typeof obj === 'object' && !Array.isArray(obj) &&obj !== null;
}
//isObject(obj) is used to identify if obj is an object not an array and not null
//

console.log('after using a nested for..in ');
for(let prop in person){
  if(isObject(person[prop])){
    for(let nested in person[prop]){
      //nested for..in lop to iterate through nested object
      console.log(person[prop][nested]);
    }
  }else{
    console.log(person[prop]);
  }
}

