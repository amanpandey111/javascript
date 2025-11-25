//! very first example
// function piyush(){
//   console.log("Piyush Enters");
//   let res = rehana()
//   console.log("exit piyush returning ",res);
//   return res
// }
// function rehana(){
//   console.log("rehana Enters");
//   let res = vedant()
//   console.log("exit rehana returning",res);
//   return res
// }
// function vedant(){
//   console.log("vedant Enters");
//   let res = chirag()
//   console.log("exit vedant returning",res);
//   return res
// }
// function chirag(){
//   console.log("chirag Enters");
//   let res = ajay()
//   console.log("exit chirag returning",res);
//   return true
// }
// function ajay(){
//   return true
// }
// console.log(piyush())


//! First Example to understand
// function gotoLunch(person){
//   if(person===5) return true
//   console.log(person)
//   return gotoLunch(person+1)
// }
// console.log("Output is ",gotoLunch(1))

//! second example to understand
// function multiply(arr){
//   console.log(arr)
//   if(arr.length <= 0){
//     return 1
//   }else{
//     return arr[arr.length-1] * multiply(arr.slice(0,arr.length-1))
//   }
// }
// console.log(multiply([1,2,3,4]))

//! second example to understand
// function multiply(arr){
//   console.log(arr);
//   if(arr.length==0){
//     return 1
//   }
//   return arr[arr.length-1] * multiply(arr.slice(0,arr.length-1))
// }
// console.log(multiply([1,2,3,4]))

//! 1. Find the factorial of n
// function factorialOfN(num){
//   if(num===0){
//     return 1
//   }
//   return num * factorialOfN(num-1)
// }
// console.log(factorialOfN(5))

// function factorial(num){
//   if(num===1) return 1
//   return num * factorial(num-1)
// }
// console.log(factorial(5))

//! 2. create an array with range of number
// function rangeOfNumber(start,end){
//   if(end<start){
//     return []
//   }else{
//     let number = rangeOfNumber(start,end-1)
//     number.push(end)
//     return number
//   }
// }
// console.log(rangeOfNumber(0,4))

// function rangeOfNumber(start, end){
//   console.log(`enter rangeOfNumber(start=${start}, end=${end})`);
//   if (end < start) {
//     console.log(`  base case reached (end < start). return []`);
//     return [];
//   } else {
//     const number = rangeOfNumber(start, end - 1);
//     console.log(`  after recursive call for end=${end-1} -> number = [${number}]`);
//     number.push(end);
//     console.log(`  pushed ${end}. now number = [${number}]`);
//     console.log(`exit  rangeOfNumber(start=${start}, end=${end}) -> returning [${number}]`);
//     return number;
//   }
// }

// console.log('FINAL ->', rangeOfNumber(0,4));


//! 3. return true if x is a palindrome else false
// function returnPalindrome(str){
//   console.log(str)
//   let n = str.length
//   console.log(n)
//   if(n<=1){
//     return true
//   }
//   if(str[0]!==str[n-1]){
//     return false
//   }
//   returnPalindrome(str.slice(1,-1))
// }
// console.log(returnPalindrome("madam"));

