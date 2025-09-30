const getIndexToIns = (arr, num) => {
  //sort the array arr into ascending order
  arr.sort( (a,b) => a-b );

    //function to return element > num
    const findElement =(a)=>{
      return a >= num;
    }

    //call find first Element index greater than num  
    return arr.findIndex(findElement);
}

console.log(getIndexToIns([20, 3, 5], 19));
console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
