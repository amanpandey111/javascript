// // Function to generate all possible permutations
// function generatePermutations(res, arr, idx) {

//     // Base case: if idx reaches the end of array
//     if (idx === arr.length - 1) {
//         res.push([...arr]);
//         return;
//     }

//     // Generate all permutations by swapping
//     for (let i = idx; i < arr.length; i++) {
//         [arr[idx], arr[i]] = [arr[i], arr[idx]];

//         // Recur for the next index
//         generatePermutations(res, arr, idx + 1);

//         // Backtrack to restore original array
//         [arr[idx], arr[i]] = [arr[i], arr[idx]];
//     }
// }

// // Function to find the next permutation
// function nextPermutation(arr) {

//     let res = [];

//     // Generate all permutations
//     generatePermutations(res, arr, 0);

//     console.log(arr,res)

//     // Sort all permutations lexicographically
//     res.sort((a, b) => {
//         for (let i = 0; i < a.length; i++) {
//             if (a[i] !== b[i]) return a[i] - b[i];
//         }
//         return 0;
//     });

//     // Find the current permutation index
//     for (let i = 0; i < res.length; i++) {

//         // If current permutation matches input
//         let match = true;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] !== res[i][j]) {
//                 match = false;
//                 break;
//             }
//         }

//         if (match) {

//             // If it's not the last permutation
//             if (i < res.length - 1) {
//                 for (let j = 0; j < arr.length; j++) {
//                     arr[j] = res[i + 1][j];
//                 }
//             }

//             // If it's the last permutation
//             else {
//                 for (let j = 0; j < arr.length; j++) {
//                     arr[j] = res[0][j];
//                 }
//             }

//             break;
//         }
//     }
// }

// // Driver Code
// let arr = [2, 4, 1, 7, 5, 0];
// nextPermutation(arr);
// console.log(arr)

//! Median of Two Sorted Arrays
function median(num1,num2){
    // let res = [...num1, ...num2]
    // let num = Math.floor(res.length/2)
    // if(res.length%2==0){
    //     let res1 = res[num-1] + res[num]
    //     return res1/2
    // }else{
    //     return res[num]
    // }
    let arr = [...nums1,...nums2]
    arr.sort((a,b)=>a-b)
    let num = Math.floor(arr.length/2)
    if(arr.length%2==0){
        let res = arr[num-1] + arr[num]
        return res/2
    }else{
        return arr[num]
    }
}
let nums1 = [1,3]
let nums2 = [2]
console.log(median(nums1, nums2));