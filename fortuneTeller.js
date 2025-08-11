let fortune1 = 'Your cat will look very cuddly today.';
let fortune2 = 'The weather will be nice tomorrow.';
let fortune3 = 'Be cautious of your new neighbours.';
let fortune4 = 'You will find a new hobby soon.';
let fortune5 = 'It will be wise to avoid the colour red today.';

let randomNumber = Math.floor(Math.random() * (5-1) +1);
let selectedFortune;

switch(randomNumber) {
  case 1:
  selectedFortune = fortune1;
  break;
  case 2:
  selectedFortune = fortune2;
  break;
  case 3:
  selectedFortune = fortune3;
  break;
  case 4:
  selectedFortune = fortune4;
  break;
  case 5:
  selectedFortune = fortune5;
  break;
  default:
  console.log('wrong choice');
};

console.log(selectedFortune);
