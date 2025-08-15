const maskEmail = email => {
  let index = email.indexOf('@');
  let slice = email.slice(1, index)
  let repeat = email.repeat('@')
  return repeat;
  //email.repeat();
}

let email = 'freecodecamp@example.com';

console.log(maskEmail(email));
