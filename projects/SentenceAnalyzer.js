const getVowelCount = sentence => {
  let count = [];
  let vowel = ['a','e','i','o','u'];
  for(let char of sentence){
   if(vowel.includes(char.toLowerCase())){
     count.push(char)
     console.log(char)
   } 
  }
  return count.length;
}

console.log(getVowelCount('Apples are tasty fruits'));

let vowelCount = getVowelCount('Apples are tasty fruits');
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

const getPunctuationCount = sentence => {
  let vowel = 'aeiou';
  let consonants = 'bcdfghjklmnpqrstvwxyz';
  let count = 0;
  
  for(let char of sentence.toLowerCase()){
    if(!vowel.includes(char) && !consonants.includes(char) && char !== ' '){
      count ++;
      console.log(char);
    }
  }

  return count;
}

console.log(getPunctuationCount('hello, world!'));

const getWoCount = sentence => {
  let count = 0;

  if(sentence ===' '){
    count = 0;
    return count;
  }else{
    sentence = sentence.trim().toLowerCase();
    count = sentence.split(/\s+/).length;
    return count;
  }
}


function getWordCount(sentence) {
  if (sentence.trim() === '') {
    return 0;
  }
  
  const words = sentence.trim().split(/\s+/);
  return words.length;
}


console.log(getWordCount(" "));

let wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`)
