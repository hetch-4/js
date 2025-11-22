const inventory = []

inventory.push({name: "flour", quantity:2})
inventory.push({name: "milk", quantity: 2});

//
const findProductIndex = productName => {
  let searchName = productName.toLowerCase();
  
  for(let i=0; i<=inventory.length; i++){
    let productName = inventory[i]["name"].toLowerCase();
    

    if(productName === searchName){
      return i;
    }

  }

  return -1;
}



console.log(findProductIndex("Soda"));

const addProduct = productObject => {
  let index = findProductIndex(productObject.name);

  if (index < 0) {
    // not found
    inventory.push({
      name: productObject.name.toLowerCase(), // store consistently in lowercase
      quantity: productObject.quantity
    });
    console.log(inventory);
    console.log(productObject.name.toLowerCase() + " added to inventory");
  } else {
    // found
    inventory[index].quantity += productObject.quantity;
    console.log(inventory[index].name + " quantity updated");
  }
};

addProduct({name: "FLOUR", quantity: 5}); 


const removeProduct = (name,quantity) => {
  let index = findProductIndex(name);
  let newQuantity = inventory[index].quantity -= quantity
  console.log(`Remaining ${inventory[index].name} pieces: ${inventory[index].quantity}`)

  if(newQuantity === 0){
    inventory.splice(index, 1);
  }else if(newQuantity < 0){
    console.log(`Not enough ${inventory[index].name} available, remaining pieces: ${inventory[index].quantity}`)
  }
}

removeProduct("flour",3);
