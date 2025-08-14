//num.toFixed(n)  retruns string rep of the num to a fixed n decimal places

let num = 3.2451;
console.log(num.toFixed(2)); // 3.24 (2 decimal places

//toFixed() rounds to the nearest value
 console.log((3.14159).toFixed(3)); //3.142
console.log((3.14449).toFixed(3)); //3.144
console.log((3.14550).toFixed(3)); //3.146

//tofixed() can be helpfull in finanacial calculations

let price = 19.99;
let taxrate = 0.08;
let total = price + (price * taxrate);

console.log(`Total = ${total.toFixed(2)} `);
