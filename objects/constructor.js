//constructor is a special type of function used to create and initialize an object using keyword 'new'

//object() can be used with or without new

const num = 42;
const numobj = Object(num);

console.log(numobj);//[number: 42]
console.log(typeof(numobj));// object

//if you pass null or undefined to Object() 
const newObj = new Object(undefined);
//returns an empty object

console.log(newObj); //{}


//another usecase for Object is to return an object from unkown value

function toObject(value){
  if(value === null || value === undefined){
    return {}; //an empty object
  }

  if(typeof value === 'object'){
    return value;
  }

  return Object(value);
}

console.log(toObject(null));
console.log(toObject(true));
console.log(toObject([1,2,3]));
