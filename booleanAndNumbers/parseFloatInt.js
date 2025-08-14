//parse.Float(n) extracts float numbers satrting  from the beginning of a string n

console.log(parseFloat('3.14')); // 3.14
console.log(parseFloat('3.14 abc')); // 3.14
console.log(parseFloat('3.14.15')); //3.14
console.log(parseFloat('abc 3.14')); //NaN

//parse.Int(n) extracts int starting from the begining of a string n
console.log(parseInt('42')); //42
console.log(parseInt('42px')); //42
console.log(parseInt('3.14')); // 3
console.log(parseInt('abc123')); //NaN


//in common parseInt(), parseFloat()
//ignore the white space ahead of the string 
console.log(parseFloat('  6.6')); //6.6
console.log(parseInt('  332'));

//handle + | -  sing at the beggining of the string
console.log(parseInt('+32')); //32
console.log(parseFloat('-3.25')); //-3.25
