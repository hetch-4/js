//switch(n) evaluates an expression n and matches its values against series of case:
//break is used to end each case | exit the block code 

let dayOfWeek = Math.floor(Math.random() * (7-1) +1);

switch(dayOfWeek){
  case 1:
    console.log('Monday! Time to start the week strong.');
    break;
  case 2:
    console.log('Teusday! Keep the momentum going.');
    break;
  case 3:
    console.log('Wednesday! We\'re halfway there');
    break;
  case 4:
    console.log('Thursday! Almost the weekend.');
    break;
  case 5:
    console.log('Friday! The weekend is near.');
    break;
  case 6:
    console.log('Saturday! Enjoy your weekend.');
    break;
  case 7:
    console.log('Sunday! Rest and recharge.');
    break;
  default:
    console.log('Invalid day! try again.');
}


// if/else  is more readable and flexible when dealing with a wider range of possibilities

let creditScore = 720;
let m = Math.floor(Math.random() * (750-600) +600);
creditScore=m;
let annualIncome = 60000;
let loanAmount = 200000;

let eligibilityStatus;

if(creditScore >= 750 && annualIncome >= 80000){
  eligibilityStatus = 'Eligible for premium loan rates.';
} else if(creditScore >= 700 && annualIncome >= 50000){
  eligibilityStatus = 'Eligible for standard loan rates.';
} else if(creditScore >= 650 && annualIncome >= 40000){
    eligibilityStatus = 'Eligible for subprime loan rates.';
  }else if (creditScore < 650){
    eligibilityStatus = 'Not eligible due to low credit transfer';
  } else {
    eligibilityScore = 'Not Eligible due to insufficient income';
  }

console.log(eligibilityStatus);
