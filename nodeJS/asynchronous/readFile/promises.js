
const fs = require('fs').promises;

console.log('1. Reading file...');
fs.readFile('myfile.txt', 'utf8')
    .then(data => {
        console.log('3.File content:', data);
    })
    .catch( err=> console.log('Error:', err));

console.log('2. this runs before the file reads');
