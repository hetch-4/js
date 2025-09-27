const sumAll = array => {
 let sum= 0;
 //console.log(sum);

 let lesser = array[0]>array[1] ? array[1]:array[0];
  let more = array[0]< array[1] ? array[1]:array[0];
  //console.log(more)

    for(let i=more; i>=lesser; i--){ 
      sum += i
    }
 
  console.log(sum)
 return sum; 
}

sumAll([4,1])
sumAll([10,5])
//console.log(sumAll[4,1]);
