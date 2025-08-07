//charCodeAt & fromCharCode() aid in conversion to and from ASCII
let letter = 'A'
console.log(letter.charCodeAt());
console.log(String.fromCharCode(97));

let message = "Hello, World!";
let greeting = message.slice(0, 5);
//getting part of a string
console.log(greeting);

greeting = message.slice(7);
//getting part of a string from a starting point 7
console.log(greeting);

let upperGreeting = message.toUpperCase();
//converting a string to uppercase //all characters are changed
console.log(upperGreeting);

let shout = 'I A LEARNING JAVASCRIPT';
//converting a string to lowercase
console.log(shout.toLowerCase());

let text = "I love javascript";
console.log(text);
//replacing a string within a string ie javascript - coding 
console.log(text.replace('javascript', 'coding'));

let phrase = 'Hello, world! Welcome to the world of coding';
//replace() function replaces the first occurence only
console.log(phrase);
console.log(phrase.replace('world','universe'));

// repeat(n) mthod allows to repeat a string n number of times
console.log(greeting.repeat(3)); //ie 3 times 


//trim() , trimStart(), trimEnd() methods clear white pace from a string
//trim()-from start to end
//trimEnd()- at the end
//trimStart()-at start
let greet = "  Hello!  ";
console.log(greet);
console.log(greet.trim());
console.log(greet.trimEnd());
console.log(greet.trimStart());