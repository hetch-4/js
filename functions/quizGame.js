//questions array
const questions = [
//question objects to be puched into the question array
{
  category: 'history',
  question: 'When did Kenya gain independence?',
  choices:['1963','1961','1960'],
  answer:'1963'
},
{
  category: 'sport',
  question: 'How many players are in a standard soccer team while playing in a field?',
  choices: ['10','11','22'],
  answer: '11'
},
{
  category: 'science',
  question: 'How may teeth does a fully developed adult have?',
  choices: ['20','28','32'],
  answer: '32'
},
{
  category: 'geography',
  question: 'What is the tallest mountain in Kenya?',
  choices: ['Mt.Kenya','Mt.Kilimanjaro','Mt.Everest'],
  answer: 'Mt.Kenya'
},
{
  category: 'entertainment',
  question: 'Who was the first president of kenya?',
  choices: ['Jomo Kenyatta','William Ruto','Raila Odinga'],
  answer: 'Jomo Kenyatta'
}
];
//pushing the objects above into the array 
//questions.push(question1,question2,question3,question4,question5,);

//function to get a random question from the array
const getRandomQuestion = questions =>{
  let random = Math.floor(Math.random() * (questions.length -1) );
  return questions[random];
}

//function to get a random computer choice from the question.choices array
const getRandomComputerChoice = choices =>{
  let random = Math.floor(Math.random() * (choices.length-1));
  return choices[random]
}

//function to get the result and compairs with the computer answer
const getResults = (question, computerChoice) => {
  if(question.answer === computerChoice){
    return 'The computer\'s choice is correct!';
  }else{
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}
console.log(getResults(questions[0],getRandomComputerChoice(questions[0].choices)));

