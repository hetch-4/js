async function fetchUserData(){
    try{
        const response = await fetch ('https://api.example.com/users/1');
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        const user = await response.json();
        console.log('User data:', user);
        return user;
    }catch(error){
        console.error('Error fetching user data:', error);
        throw error;
    }
}

fetchUserData().catch(error =>{
    console.log('Caught outside of async function:', error.message);
});