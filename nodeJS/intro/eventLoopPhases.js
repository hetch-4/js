console.log('1. Start');

//next tick queue
process.nextTick( ()=>console.log('2. Next tick') );

//Timer phase
setTimeout( ()=>console.log('4. Timeout'),0);

//check phase
setImmediate( ()=> console.log('5. Immediate') );

console.log('6. End');
