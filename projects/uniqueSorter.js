const uniteUnique =(...arrs)=>{
  const newArr=[];
  for(let i=0; i<arrs.length; i++){

    for(let j=0; j<arrs[i].length; j++){

      if(!newArr.includes(arrs[i][j])){
        newArr.push(arrs[i][j]);
      }
    }
  }
  return newArr;
} 

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));