"use strict"

//todo Type Conversion

//! number conversion
// let str = "123"
// console.log(typeof Number(str));

// let age = Number("an arbitrary string instead of number")
// console.log(typeof age);                          //? number
// console.log(age);                                 //? NaN (conversion failed)
// console.log(Number("   123  "));                  //? 123
// console.log(Number(true), Number(false));         //? 1 0
// console.log(Number(null));                        //? 0
// console.log(Number(undefined));                   //? NaN
// console.log(Number("    "));

//! Boolean conversion
// console.log(Boolean(1));                          //? true
// console.log(Boolean(0));                          //? false
// console.log(Boolean("aman pandey"));              //? true
// console.log(Boolean(""));                         //? false
// console.log(Boolean("1"));                        //? true

//todo Operators

//! string concatenation with binary
// let s = "aman "+"pandey"
// console.log(s);                                      //? aman pandey
// console.log("10"+"string");                          //? 10string
// console.log("10"+"20");                              //? 1020
// console.log(2+'20');                                 //? 220
// console.log(2+2+'2');                                //? 42
// console.log('2'+2+2);                                //? 222
// let n = 2+2+"20"
// console.log(typeof n, n);                            //? string 420

//! Numeric conversion, unary +
// let x = 1
// console.log(+x);                                        //? 1
// console.log(+true);                                     //? 1
// console.log(+false);                                    //? 0
// console.log(+null);                                     //? 0
// console.log(+undefined);                                //? NaN
// console.log(+"aman");                                   //? NaN

// let apple = "3"
// let orange = "5"
// console.log(apple+orange);                             //? 35
// console.log(+apple + +orange);                         //? 8

//! Assignment
// let a = 1
// let b = 2
// let c = 3-(a=b+1)
// console.log(a);                                          //? 3
// console.log(c);                                          //? 0
// let n = 8
// n*=n+2
// console.log(n);
// let n1 = 8 * 8 + 2
// console.log(n1);

//! Increment/Decrement Operator
let counter = 2
// console.log(counter++);                                 //? No Instant Increment : 2
// console.log(++counter);                                 //? Instant Increment : 3
// console.log(5++);                                       //? Here It will throw an Error

//! basic question
// let a = prompt("First Number",1)
// let b = prompt("Second Number",2)
// let c = +a + +b
// console.log(c);