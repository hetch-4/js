let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const lookUpProfile = (name, prop) =>{
  for(let contact of contacts){

    if(contact.firstName === name){

      if(contact.hasOwnProperty(prop)){
        console.log(contact[prop]);
        return contact[prop];
      }else{
        return 'No such property';
      }

    }
    
    
  }
  
  return 'No such contact';
}

console.log(lookUpProfile("Kristian", "lastName"));

console.log(lookUpProfile("Bob", "number"));
