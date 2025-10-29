console.log('First');
setTimeout( ()=>console.log('Third'),0);
Promise.resolve().then( ()=> console.log('second') );
console.log('Fourth');
