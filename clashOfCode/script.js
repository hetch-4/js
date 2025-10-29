function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

const john = new Person("John","smith");
const jane = new Person("jane","Doe");
const marko = new Person("marko","Denis");

const persons = [];
persons.push(john,jane,marko);
console.table(persons);