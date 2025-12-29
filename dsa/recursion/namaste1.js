//! print n....1 
// function printNumber(num){
//     if(num==0) return 100;
//     console.log(num);
//     num-=1
//     printNumber(num);
// }
// let r = printNumber(4)
// console.log(r);

//! print 1....n
// let x = 1;
// function printNum(num){
//     if(x===num){
//         console.log(num);
//         return
//     }
//     console.log(x);
//     x+=1
//     printNum(num)
// }
// printNum(5)

//! sum of first n number
// let sum = 0
// function sumNumber(num){
//     if(num===1){
//         return 1
//     }
//     // num--
//     sum = num + sumNumber(num-1)
//     return sum
// }
// console.log(sumNumber(3));

//! sum of all elements in an array
// let sum = 0
// function sumArray(arr){
//     if(arr.length === 1){
//         return arr[0]
//     }
//     sum = arr[arr.length-1] + sumArray(arr.slice(0,arr.length-1))
//     return sum
// }
// let res = sumArray([1,2,3,4,5,10])
// console.log(res);

//! factorial 
// let sum = 1;
// function returnFact(num){
//     if(num===1) return 1
//     sum = num * returnFact(num-1)
//     return sum
// }
// console.log(returnFact(5));

//! Power Of Two
// let bool = null
// function powerTwo(num){
//     if(num===1) return true
//     else if(num<1 || num%2==0) return false
//     bool = powerTwo(num/2)
//     return bool
// }
// console.log(powerTwo(2));

//! fibonacci number
function returnFibonacci(num){
    let fib = [0,1]
    for(let i=2; i<=num; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    console.log(fib);
}
returnFibonacci(9)