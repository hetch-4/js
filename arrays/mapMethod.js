let numbers = [1,2,3,4,5];

let doubled = numbers.map((num) => num * 2);

console.log(numbers);

console.log(doubled);

numbers = [3,4,5,6,7].map((element) => {
  console.log('Element:' + element);
  return element * 2; 
});

console.log(numbers);

numbers = [3,4,5,6,7,8].map((element,index,array)=>{
  console.log(`Element: ${element}`);
  console.log(`index: ${index}`);
  console.log(`Array: ${array}`)
  return element * 3;
});

console.log(numbers);
