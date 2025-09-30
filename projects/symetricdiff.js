const diffArray = (arr1,arr2) =>{
  let newArr = [];

  let ar1 = arr1.filter(ar => !arr2.includes(ar));
  let ar2 = arr2.filter(ar => !arr1.includes(ar));
  newArr = ar1.concat(ar2)
  //console.log(ar2)
  console.log(newArr)
  return newArr;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])

diffArray(["pen", "book"], ["book", "pencil", "notebook"])
