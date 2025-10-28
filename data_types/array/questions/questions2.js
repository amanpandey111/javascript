//! Second Largest Element in an Array
// let num = [12, 35, 1, 10, 34, 1]
// let res = num.sort((a,b)=>a-b)

// let first = 0;
// for(let i of num){
//     first = i>first ? i : first
// }
// console.log(first);

// let second = 0
// for(let i of num){
//     second = i>second && i<first ? i : second
// }
// console.log(second);

//! Third Largest
// function getThirdLargest(){
//     let first = 0;
//     let second = 0;
//     let third = 0;
//     for(let i of num){
//         first = i>first ? i : first
//     }
//     for(let i of num){
//         second = i>second && i<first ? i : second
//     }
//     for(let i of num){
//         third = i>third && i<second ? i : third
//     }
//     return third
// }
// console.log(getThirdLargest());

//! Reverse an array
// let num = [12, 35, 1, 10, 34, 1]
// let res = []
// num.forEach((ele)=>res.unshift(ele))
// console.log(num,res);

//! Reverse an Array in groups of given size
// let arr = [ 1,2,3,4,5,6,7,8 ]
// let result = []
// let size = 4
// let initial = 0
// for(let i=initial; initial<arr.length; i++ ){
//     let r = arr.slice(initial,initial+size).reverse()
//     result.push(...r)
//     initial+=size
// }
// console.log(result);

//! Rotate an Array by d - Counterclockwise or Left
// let arr = [1,2,3,4,5,6,7]
// let d = 8
// if(d>arr.length){
//     d = d % arr.length
// }
// console.log(d);
// let result = arr.slice(d).concat(arr.slice(0,d))
// console.log(result,arr.length);

//! Maximum product of a triplet (subsequence of size 3) in array
// let arr = [10, 3, 5, 6, 20]
// let res = arr.sort((a,b)=>b-a)
// console.log(res[0]*res[1]*res[2]);

//! Maximum consecutive one’s (or zeros) in a binary array
// let arr = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1]
// let maxCount = 0
// let count = 1
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] === arr[i - 1]) {
//     count += 1
//   } else {
//     maxCount = maxCount > count ? maxCount : count
//     count = 1
//   }
//   maxCount = count > maxCount ? count : maxCount
// }
// console.log(maxCount);

//! Move all Zeros to End of Array
// let arr = [1, 2, 0, 4, 3, 0, 5, 0]
// let zero = 0
// let res = []
// arr.forEach((num)=>{
//   if(num===0){
//     zero+=1
//   }else{
//     res.push(num)
//   }
// })
// res.push(...new Array(zero).fill(0))
// let myarray = new Array(zero).fill(0)
// console.log(myarray);

//! Sort an array in wave form : pattern: arr[0] ≥ arr[1] ≤ arr[2] ≥ arr[3] ≤ arr[4] ≥ ...
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// function swap(x, y) {
//   let temp = arr[x]
//   arr[x] = arr[y]
//   arr[y] = temp
// }
// function sortWave(){
//   for(let i=0; i<arr.length-1; i+=2){
//     swap(i,i+1)
//   }
// }
// sortWave()
// console.log(arr);

//! Adding one to number represented as array of digits
// let arr = [1, 2, 4]
// let str = arr.join("")
// console.log(Number(str)+1);

//! Stock Buy and Sell - Max one Transaction Allowed
// let arr = [1, 3, 6, 9, 11]
// let min = arr[0]
// let profit = 0
// for(i of arr){
//     if(i<min){
//         min = i
//     }
// }
// let firstHalf = arr.slice(0,arr.indexOf(min))
// let secondHalf = arr.slice(arr.indexOf(min)+1)
// if(secondHalf.length===0){
//     console.log("the profit is ",profit);
// }else{
//     let max = secondHalf[0]
//     secondHalf.forEach((num)=>{
//         max = max>num ? max : num
//     })
//     console.log("The Profit is ",max-min);
// }

//! Stock Buy and Sell - Multiple Transaction Allowed
// let arr = [100, 180, 260, 310, 40, 535, 695]
// let stockPurchased;
// let sellingCost;
// let totalProfit = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (i == 0) {
//         stockPurchased = arr[i]
//     } else {
//         if (stockPurchased > arr[i]) {
//             totalProfit = totalProfit + (sellingCost - stockPurchased)
//             stockPurchased = arr[i]
//         } else {
//             sellingCost = arr[i]
//         }
//     }
// }
// if (stockPurchased && sellingCost) {
//     totalProfit = totalProfit + (sellingCost - stockPurchased)
// }
// console.log(totalProfit);

//! Remove duplicates from Sorted Array
// let arr = [2, 2, 3, 2, 5, 2, 2, 5, 5, 5, 5, 3]
// arr.sort((a, b) => a - b)
// let newArr = []
// arr.forEach((num) => {
//     if (newArr.length === 0) {
//         newArr.push(num)
//     } else {
//         let bool = newArr.some((num1) => num1 === num)
//         if (!bool) {
//             newArr.push(num)
//         }
//     }
// })
// console.log(newArr);

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (i !== j) {
//             if (arr[i] === arr[j]) {
//                 arr.splice(j, 1)
//                 j-=1
//             }
//         }
//     }
// }
// console.log(arr);

//! Rearrange Array Elements by Sign
// let arr = [1, 2, 3, -4, -1, 4]
// let poIndex = 0
// let negIndex = 1
// let solArray = new Array(arr.length)
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<0){
//         solArray.splice(negIndex,0,arr[i])
//         negIndex += 2
//     }else{
//         solArray.splice(poIndex,0,arr[i])
//         poIndex += 2
//     }
//     console.log(negIndex, poIndex);
// }
// console.log(solArray);

//! Leaders in an array : An element is a Leader if it is greater than or equal to all the elements to its right side.
// let arr = [16, 17, 4, 3, 5, 2]
// let arr = [1, 2, 3, 4, 5, 2]
// let result = []
// for (let i = 0; i < arr.length; i++) {
//     let b = true
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] <= arr[j]) {
//             b = false
//         }
//     }
//     if(b){
//         result.push(arr[i])
//     }
// }
// console.log(result.join(" "));

//! Missing and Repeating in an Array
let arr = [3, 1, 3]
let r = []
for(let i=0; i<arr.length; i++){
    let rc = 0
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]===arr[j]){
            rc+=1
        }
    }
    if(rc>0){
        r.push(arr[i])
    }
}
console.log(r);