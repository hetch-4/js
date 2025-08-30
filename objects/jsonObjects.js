//import data from "./example.json" with {type:"json"};
//the import statement above imports an object from a json file
const data = require("./example.json");
console.log(data);
console.log(`Age: ${data.age}`);

console.log(`List of courses :${data['list of courses']}`);
//you can also use bracket notation to access
