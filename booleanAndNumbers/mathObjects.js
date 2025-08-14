let randomNum = Math.random();
//Math.random generates random floating point between 0 to 1
console.log(randomNum);

let smallest = Math.min(1, 5, 3, 9);
//.min() returns the smallest num 
console.log(smallest);

let largest = Math.max(1, 5, 3, 9);
//.max() return the largest num
console.log(largest);

console.log(Math.ceil(7.402)); //output 8
//.ceil(n) convert a number n to the nearest integer

console.log(Math.floor(4.7)); // output 4
//.floor rounds down to the nearest integer

console.log(Math.round(2.3)); //output 2
console.log(Math.round(4.7)); //output 5
// .round is the hybrid of .floor() and .ceil() rounds to the nearest integer taking to account the decimal 


// generating random numbers btn to numbers
// Math.random() * (min - max) + min
// ie btn 20 & 1

console.log("random num"+Math.floor(Math.random() * (20-1) + 1));


console.log(Math.trunc(2.9));
console.log(Math.trunc(7.8));
// .trunc(n) removes the decimal from he number

console.log(Math.sqrt(4)); // output 2 : the squareroot of 4

console.log(Math.cbrt(27)); //ouput 3 : the cuberoot of 27

console.log(Math.abs(-5));
console.log(Math.abs(5));
//.abs(n) returns the absolute value of a number n

console.log(Math.pow(2, 3));
console.log(Math.pow(8,2));
//.pow(a, b)  returns a^b || (a**)
