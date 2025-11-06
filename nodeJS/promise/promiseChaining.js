const userId = 1891;

function getUser(userId){
    return new Promise( (resolve, reject) => {
        //simulating database call
        setTimeout( ()=>{
            resolve({id:userId, name:'john'});
        }, 1000);
    });
}

function getUserPosts(user){
    return new Promise( (resolve, reject) => {
        //simulating an Api call
        setTimeout( ()=> {
            resolve(['Post 1', 'Post 2', 'Post 3']);
        }, 1000);
    });
}

//Chain the promises
getUser(123)
    .then(user => {
        console.log('User:',user);
        return getUserPosts(user);
    })
    .then(posts=>{
        console.log('Posts:', posts);
    })
    .catch(error =>{
        console.log('Error:',error);
    })