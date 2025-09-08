const n = parseInt(readline());
let inputs = readline().split(' ');
let arr = [];
for (let i = 0; i < n; i++) {
    const number = parseInt(inputs[i]);
    arr.push(number);
}

arr.sort( (a,b) => b-a);
arr.shift();

let sum = 0;
for(let ar of arr){
    sum += ar;
}
console.log(sum)

