//dealing with nested object in an object

let person = {
  name: 'Alice',
  age: 23,
  contact: {
    email: 'alica@example.com',
    phone: {
      home: '+254-711-345-672',
      work: '+254-799-876-540'
    }
  }
};

//accessing alice work phone number
console.log(`Home phone: ${person.contact.phone.home}`);
//above is accessing is used using dot notation

//below bracket notatin is used
console.log(`Work phone: ${person['contact']['phone']['work']}`);

//how to access data if the object has a array value

person = {
  name: 'Andrew',
  age: 24,
  address: [
    {
      type: 'home',
      street: '231 Main St',
      city: 'Nairobi'
    },
    {
      type: 'work',
      street: '654 Market st',
      city: 'Mombasa'
    }
  ]
};

//accessing Andreww work address city

console.log(`Work city: ${person.address[1].city}`);
