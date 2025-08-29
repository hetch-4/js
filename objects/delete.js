//delete method is used to remove properties from an object

let person = {
  name: 'Joseph',
  age: 20,
  job: 'Engineer'
};

delete person.job;

console.log(person.job);

//destructuring allows creating an new object using the ... rest method to asign unnamed properties to the new object
//

person = {
  name: 'Bob',
  age: 25,
  job: 'Designer',
  city: 'Nairobi'
};

let {job, city, ...remainingProperties} = person;

console.log(remainingProperties);
//{name: 'Bob', age:25}
