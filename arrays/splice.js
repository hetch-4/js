let fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
let removed = fruits.splice(2,2); // ['orange', 'mango']
//splice method starts at two and removes two elements
console.log(removed + '//removed items');
console.log(fruits + '//remaining items');

let colors = ['red', 'green', 'blue'];
colors.splice(1,0,'yellow','purple');
//starts and index 1, removes 0 items and inserts yellow&purples
console.log(colors); 

let numbers = [1,2,3,4,5]
numbers.splice(1,2,6,7,8);
//starts at 1, removed 2 items then inserts 6,7,8
console.log(numbers);


let original = [1,2,3,4,5,6];
let copy = [...original]; //creates a a copy using ... spread operator
copy.splice(2,1,6);

console.log(original);
console.log(copy);

//splice can be used to remove a element from a array when ou know the index 
//

let fruit = ['apple','banana','orange','mango']
let indexToRemove = fruit.indexOf('Orange');
if(indexToRemove !== -1){
  console.log(indexToRemove);
  fruit.splice(indexToRemove, 1);
}
console.log(fruit);
