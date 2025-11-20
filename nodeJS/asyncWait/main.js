async function getData(){
    console.log('Starting...');
    const result = await someAsyncOperation();
    console.log(`Result: ${result}`);
    return result;
}

function someAsyncOperation(){
    return new Promise(resolve => {
        setTimeout( ()=> resolve('Operation 1 is completed'),2000);
    });
}

//call async function
getData().then(data =>console.log('Final data:', data));