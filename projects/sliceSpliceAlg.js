const frankenSplice = (arr1,arr2, index) => {
  let arr = [...arr2];

  arr.splice(index, 0, ...arr1);

  console.log(arr);
  return arr;
}

frankenSplice([1, 2, 3], [4, 5], 1);
