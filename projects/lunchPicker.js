const lunches = [];

const addLunchToEnd = (array, string) => {
  array.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return array;
}

const addLunchToStart = (array,string) => {
  array.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return array;
}

const removeLastLunch = (array)=>{
  let last = array.pop();
  if(array.length === 0){
    console.log(`No lunches to remove.`);
  }else{
    console.log(`${last} removed from the end of the lunch menu.`);
  }
  return array;
}

const removeFirstLunch = (array) => {
  let first = array.shift();
  if(array.length === 0){
    console.log(`No lunches to remove.`);
  }else{
    console.log(`${first} removed from the start of the lunch menu.`);
  }
  return array;
}

const getRandomLunch = array => {
  let random = Math.floor(Math.random() * (array.length));
  let lunch = array[random];
  if(array.length === 0){
    console.log(`No lunches available.`);
  }else{
    console.log(`Randomly selected lunch: ${lunch}`);
  }
  return array;
}
getRandomLunch(['chapo','waru','groundnut','chips','avocado'])
const showLunchMenu = array =>{
  if(array.length === 0){
    console.log(`The menu is empty.`);
  }else{
    let list = array.join(', ');
    console.log(`Menu items: ${list}`);
  }
}

showLunchMenu(["Greens", "Corns", "Beans"]);
 showLunchMenu(["Pizza", "Burger", "Fries", "Salad"])
