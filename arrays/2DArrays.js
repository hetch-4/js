//1 demension array looks like 

const fruits = ['apple','banana','cherry','date'];
console.log(fruits[2]);

//2D array is an array of arrays 
//example
// 2d arrays are ideal for grid like data structures
let chessboard = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"]
];

//in a 2D to access an element you need two indices [row][column]

console.log(chessboard[0][3]);
