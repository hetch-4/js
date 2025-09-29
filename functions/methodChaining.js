let result = "  Hello World. "
  .trim()
  .toLowerCase()
  .replace("world", "javascript");

console.log(result);


let transactions = [
  {amount: 100, type: "credit"},
  {amount: 20, type: "cash"},
  {amount: 150, type: "credit"},
  {amount: 50, type: "cash"},
  {amount: 75, type: "credit"}
];

let totalCreditWithBonus = transactions
.filter((transaction)=> transaction.type === "credit")
.map((transaction)=>transaction.amount * 1.1)
.reduce((sum,amount)=>sum+amount,0);

console.log(totalCreditWithBonus);
