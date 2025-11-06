//create a new promise
const myPromise = new Promise( (resolve, reject) => {
    //simulate an async operation eg APi, file read

    setTimeout( ()=>{
        const success = Math.random() > 0.5;
        console.log(success);
        if(success){
            resolve('Operation completed successfully');
        }else{
            reject( new error('Operation failed'));
        }
    }, 1000); //simulate Delay

});

//Using the promise
myPromise
    .then(result => console.log('Success:', result))
    .catch(error => console.log('Error:', error.message));