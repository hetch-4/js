let num = 5;

const factorialCalculator = num => {
  let result = 1;
  let i = num;
  do{
    result = result * i;
    i--;
  }while(i<=num && i>0);

  return result;
}

let factorial = factorialCalculator(num)

let resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg)
