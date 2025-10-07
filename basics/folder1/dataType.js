//! console.log("object");
//! alert("1/0")

console.log(9007199254740991 + 4)

const bigInt = 1234567890123456789012345678901234567890n;
// console.log(bigInt+1);
// console.log(typeof true);
// console.log(typeof 20);
// console.log(typeof "string");
// console.log(typeof null); //! it's type is object
// console.log(typeof undefined);
// console.log(typeof alert);  //! Function but I got undefined
// console.log(typeof Math);   //! object
// console.log(typeof(10));    //todo Just Another Synatx

//todo some questions on string quote
let name = "aman pandey"
// console.log(`hello ${1}`);  //! hello 1
// console.log(`hello ${"name"}`); //! hello name
console.log(`hello ${name}`);      //! hello aman pandey

//todo Type Conversion
let value = true
console.log(typeof value);
console.log(typeof String(value));