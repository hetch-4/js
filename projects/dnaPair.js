const pairElement = string => {
  let array = string.split('');
  for(let ar of  array){
    console.log(array.indexOf(ar))
    let index = array.indexOf(ar);
    
    switch(ar){
      case 'A':
      array.splice(index,1,['A','T']);
      break;

      case 'T':
      array.splice(index,1,['T','A']);
      break;
      
      case 'C':
      array.splice(index,1,['C','G']);
      break;

      case 'G':
      array.splice(index,1,['G','C']);
      break;

    }
  }

  //console.log(array)
  return array;
}


pairElement("ATCGA")
