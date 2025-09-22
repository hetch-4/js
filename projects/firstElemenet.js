//function to find to find the first element in an array that suits passes the function func 
//
//function findElement takes two parameters an array and function
const findElement = (array, func) => {

  //iterate through member of the array
  for (let ar of array){
    //check if condition is false
    if(!func(ar)){
      console.log(func(ar), ar)
    }else{
      //else check if true to return the value
      console.log(ar,func(ar))
      return ar;
    }
  }
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
