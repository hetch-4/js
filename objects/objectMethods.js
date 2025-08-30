//difference between functions and objectMethods
//
//functions are reusble block of code that perform specific task 
//object methods are functions associated with an object

const person = {
  name: 'Bob',
  age: 30,
  sayHello: function(){
    return `Hello, my name is ${this.name}`;
    //this keyword allows the function to acees the property of the object
  }
};
console.log(person.sayHello());
//functions are called by their name while object functions are invoked using dot notation from the object
