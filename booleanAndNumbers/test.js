let result = 0/0;

console.log(result);
console.log(NaN === NaN);

console.log(isNaN(NaN)); //true
console.log(isNaN(undefined)); //true
console.log(isNaN); //true

console.log(isNaN(true)); //false
console.log(isNaN(null)); //false
console.log(isNaN(37)); //false

console.log(isNaN("37")); //false: "37" isconverted to 37 
console.log(isNaN("37.37"));// flase '37.37 is converted to 37.37
console.log(isNaN("")); //false : '' is converted to 0
console.log(isNaN(" "));//false : string with a space is converted to zero

console.log(isNaN("blabla")); //true : blabla is not a number


//Number.isNaN(n) returns tru only if n isNaN
console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN(Number.NaN)); //true
console.log(Number.isNaN(0/0)); //true

console.log(Number.isNaN("NaN")); //false
console.log(Number.isNaN(undefined)); //false
console.log(Number.isNaN({})); //false
console.log(Number.isNaN("blabla")); //false

let a=7;
let b =3;
function divide(a, b){
  let result = a/b;
  if(Number.isNaN(result)){
    return "Error: Division resulted to NaN";
  }
  return result;
}

console.log(divide(4,3));
console.log(divide(6,2));
console.log(divide(8,0));
console.log(divide(0,0));
