const bouncer = (array) => {
  let newArray = [];

  for(let ar of array){
    if(ar) newArray.push(ar);
  }
  return newArray;
}


console.log(bouncer([7, "ate", "", false, 9]))

bouncer([7, "ate", "", false, 9])
