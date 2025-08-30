//chaining operator (?.) 


const user = {
  name: 'John',
  profile:{
    email: 'john@gmail.com',
    address: {
      street: '231 Main st',
      city: 'Nairobi'
    }
  }
};

console.log(user.profile?.address?.street); // 231 Main st
console.log(user.profile?.phone?.number) //undefined
//by chaining op (?.) javascript only continues if the values before exists otherwise it returns undefined
//
