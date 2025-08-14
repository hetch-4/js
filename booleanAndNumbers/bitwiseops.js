let a = 5; //binary 101
let b = 3; //binary 011

//& operator returns 1 for where each bit is 1 for both operands
console.log(a & b); //return 1 binary 001

// | or operator retuens 1 wher either or both operands are 1
console.log(a | b); //return 7 binary(111)

// ^ XOR operator return 1 where either operators are 1 but not both
console.log(a ^ b); //returns 6 binarry (110)

// ~ NOT operator inverts all bits of its operand
console.log(~a); //return -6

// << shifts bits of the operator to left by a number of spicified times
console.log(a << 1); //returns 10 binary 1010

// >> shifts bits of the operator to the right by specifed number
console.log(a >> 1) //returns 2 binary 10
