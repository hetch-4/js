const mutation = array => {
  // Convert both strings to lowercase for case-insensitive comparison
  const firstString = array[0].toLowerCase();
  const secondString = array[1].toLowerCase();

  // Iterate through each character of the second string
  for (let i = 0; i < secondString.length; i++) {
    // Check if the current character is NOT in the first string
    if (firstString.indexOf(secondString[i]) === -1) {
      // If it's not found, immediately return false
      return false;
    }
  }

  // If the loop completes without returning false, all characters are present
  return true;
};

console.log(mutation(["hello", "Hello"])); // Output: true
console.log(mutation(["hello", "hey"]));   // Output: false
console.log(mutation(["Alien", "line"]));   // Output: true
