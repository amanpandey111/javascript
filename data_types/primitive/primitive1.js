//! Number Data Type
let num = Number.MAX_SAFE_INTEGER
// console.log(num);

//! BigInt Data Type
let num1 = BigInt(Number.MAX_SAFE_INTEGER)
console.log(num1);
let num2 = BigInt(num)

// console.log(num2 === num1);

//! Symbol() Data type
let s = Symbol()
console.log(s);