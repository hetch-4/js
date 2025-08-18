//array destructuring allows for you to extract values from an array and assing to variables

let fruits = ['apple','banana','orange']

let [first,second,third] = fruits
console.log(first);
console.log(second);
console.log(third);


//array destructuring also allows for you to skip elements
let colors = ['red','blue','green','yellow'];

let [firstColor, ,thirdColor] = colors;
//skip th unwanted element by using an extra comma
console.log(firstColor);
console.log(thirdColor);
