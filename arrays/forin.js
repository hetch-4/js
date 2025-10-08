const fruit = {
  name: 'apple',
  color: 'red',
  price: 0.99
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}


const shoppingList = { tomatoes: 4, apples: 10 };
for (const item in shoppingList) {
  console.log(item);
}



for (let i = 2; i <= 13; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}
