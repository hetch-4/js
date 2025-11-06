function fetchData() {
    return new Promise( (resolve, reject) =>{
        //simulating an error
        reject(new Error('Network error'));
    });
}

fetchData()
    .then(
        data => console.log('Data:',data),
        error => console.log('Error handled in then:',error.message)
    );

//Alternate method using catch 
fetchData()
    .then( data=>console.log('Data:',data))
    .catch(error =>console.log('Error handled in catch:',error.message));