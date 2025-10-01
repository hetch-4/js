const destroyer = (array,...arg) =>{
  let nums = array.filter( num => !arg.includes(num) )
  console.log(nums)
  return nums;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)
