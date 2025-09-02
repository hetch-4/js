const findLongestWordLength= sentence =>{
  sentence = sentence.split(/\s+/);
  let longest = 'default';
  let count = 0;
  let words = [];
  for(let word of sentence){
    let length = word.length;

    if(word.length > count){
      count = length;
      words.push(word);
    }  
  }
  console.log(`longest word is of ${count} characters`);
  return count;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

