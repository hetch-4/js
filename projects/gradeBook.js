const getAverage = (array) =>{
  let average = 0
  for(let ar of array){
    average +=ar;
  }
  average = average / array.length;
  return average;
}

const getGrade = (score) =>{
  if(score === 100){
    return "A+";
  }else if(score<100 && score >=90){
    return "A";
  }else if(score<90 && score>=80){
    return "B";
  }else if(score<80 && score>=70){
    return "C";
  }else if(score<70 && score>=60){
    return "D";
  }else{
    return "F";
  }
}

const hasPassingGrade = score =>{
  let grade = getGrade(score);
  if(grade === 'F'){
    return false;
  }else{
    return true;
  }
}

const studentMsg = (array, score) =>{

    if(hasPassingGrade(score)){
      return `Class average: ${getAverage(array)}. Your grade: ${getGrade(score)}. You passed the course.`
    }else{
      return `Class average: ${getAverage(array)}. Your grade: ${getGrade(score)}. You failed the course.`
    }
  
}

//"Class average: 71.7. Your grade: F. You failed the course."
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]))

let student = studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 89);
console.log(student === "Class average: 71.7. Your grade: F. You failed the course.")

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100))

console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75))
