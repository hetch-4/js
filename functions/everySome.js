let numbers = [2, 4, 6, 8,10];
let hasAllEven = numbers.every((num) => num%2===0);

console.log(hasAllEven);

numbers = [1,3,5,6,7];
let hasSomeEven = numbers.some((num)=>num%2===0);
console.log(hasSomeEven);

