const { error } = require('console');

const fs = require('fs').promises;

const promise1 = Promise.resolve('First result');
const promise2 = new Promise( (resolve) => setTimeout( ()=> resolve('Second Result'), 5000));
//setTimeout above delays the process for given time
const promise3 = fs.readFile('myfile.txt', 'utf8');
//read local file instead of fetch

Promise.all( [promise1, promise2, promise3] )
    .then( results => {
        console.log('results:', results);
        // the results are looged with respective to indices
    })
    .catch( error=>{
        console.error('Error in one of the promises:',error);
    })