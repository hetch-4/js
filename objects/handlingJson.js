// two methods are used 
// JSON.stringify()
// JSON.parse()


const user = { 
  name: 'John',
  age: 30,
  isAdmin: true
};

const jsonString = JSON.stringify(user);
console.log(jsonString);
//{"name":"John","age":30,"isAdmin":true}

//stringify() accepts optional parameters known as replacers

const developerObj = {
  firstName : 'Jessica',
  isAwesome: true,
  isMusician: true,
  country: 'Kenya'
};

console.log(JSON.stringify(developerObj,['firstName','country'],2));
//result: {"firstName":"Jessica","country":"Kenya"}
//an array is passed as the second parameter of the stringify method 
//it contains specified properties of the object which is returns or stringify
//

//another parameter is the space parameter that allows to specify the space between the stringified objects
console.log(JSON.stringify(developerObj, null, 2));

//result :
//{
//  "firstName": "Jessica",
//  "isAwesome": true,
//  "isMusician": true,
//  "country": "Kenya"
//}



//JSON.parse() method
//converts json string back to javascript object

const jsonstring = '{"name":"John","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonstring);
console.log(userObject);
