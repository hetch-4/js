const chunkArrayInGroups = (array,num) =>{
  let result = [];

  for(let i=0; i<array.length; i+=num){
    let newArr = array.slice(i, i+num);
    result.push(newArr);
  }

  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
