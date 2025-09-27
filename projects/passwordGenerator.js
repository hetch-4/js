const generatePassword = len =>{
  let passwordgen = '';
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let array = [];
  
  let i = 0;
  do{
    let random = Math.floor(Math.random() * chars.length);
    //console.log(chars[random])
    array.push(chars[random])
    
    i++;
  }while(i < len);

  passwordgen = array.join('');
  //console.log(password);
  return passwordgen;
}

//console.log(generatePassword(10));
let num = 8;
const password =generatePassword(8)
console.log(`Generated password:${password}`)
