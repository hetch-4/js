const largestOfAll = arr =>{
  let newArr=[];
  for(let ar of arr){
    let largest = 0;
    ar.sort( (a,b) => b-a);
    largest=ar[0]
    newArr.push(largest);
  }
  return newArr;
}

console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
