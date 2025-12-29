//! Remove Element
// function returnLengthAfterRemoving(arr,num){
//     let x = 0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]!==num){
//             arr[x]=arr[i]
//             x += 1
//         }
//     }
//     return x
// }
// console.log(returnLengthAfterRemoving([0,1,2,2,3,0,4,2],2));

//! Reverse a string
// function reverseString(arr){
//     console.log(Math.round(arr.length/2));
//     for(let i=0; i<Math.round(arr.length/2); i++){
//         console.log(arr[i],arr[arr.length-1-i]);
//         let temp = arr[i]
//         arr[i] = arr[arr.length-1-i]
//         arr[arr.length-i-1] = temp
//     }
//     return arr
// }
// console.log(reverseString(['a','m','a','n','p','s','k']));

//! Best Time to sell and buy stocks
// function maxProfit(arr){
//     let b = 0;
//     let p = 0;
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]<arr[b]){
//             b = i
//         }else{
//             if(arr[i]-arr[b]>p){
//                 p = arr[i] - arr[b]
//             }
//         }
//     }
//     return p
// }
// console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([7,6,5,4,3,2]));

//! Longest common prefix
// function longestPrefix(arr){
//     if(arr[0].trim().length===0){
//         return ""
//     }
//     let prefix = arr[0]
//     for(let i=1; i<arr.length; i++){
//         if(arr[i].trim().length === 0){
//             return ""
//         }
//         while(!arr[i].startsWith(prefix)){
//             prefix = prefix.slice(0,prefix.length-1)
//             if(prefix.length === 0){
//                 return ""
//             }
//         }
//     }
//     return prefix
// }
// console.log(longestPrefix(["flower","flow","flight"]));

//! Remove duplictes from array
var removeDuplicates = function(nums) {
    let p = 0
    for(let i=1; i<nums.length; i++){
      if(nums[i]>nums[p]){
        nums[p+1] = nums[i]
        p+=1
        i = p+2
      }  
    }
    // console.log(p)
    return p+1
};
console.log(removeDuplicates([1,2,3]));