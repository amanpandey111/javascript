//! Binary search
// let arr = [1, 3, 5, 7, 9, 11, 13]
// const target = 11
// function binaryIndex() {
//     let left = 0
//     let right = arr.length - 1
//     while(right>left){
//         const middle = Math.floor((right+left)/2)
//         if(arr[middle]===target){
//             return middle
//         }else if(target>arr[middle]){
//             left = middle + 1
//         }else {
//             right = middle - 1
//         }
//     }
//     return -1
// }
// console.log(binaryIndex());

//! bubble sort
// let arr = [5,10,2,8,4,1]
let arr = [9,1,3,4,5,6]
// console.log(arr[8] && "hell");
let j = 1
for(let i=0; i<arr.length; i++){
    console.log("Hy");
    let sortingHappen = false
    for(let k = 0; k<arr.length-j; k++){
        if(arr[k+1] !== undefined && arr[k]>arr[k+1]){
            let temp = arr[k+1]
            arr[k+1] = arr[k]
            arr[k] = temp
            sortingHappen = true
        }
    }
    if(!sortingHappen) break
    j += 1
}
console.log(arr);