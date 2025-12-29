//! bubble sort
// let arr = [5,10,2,8,4,1]
// let arr = [9,1,3,4,5,6]
// let j = 1
// for(let i=0; i<arr.length; i++){
//     console.log("Hy");
//     let sortingHappen = false
//     for(let k = 0; k<arr.length-j; k++){
//         if(arr[k+1] !== undefined && arr[k]>arr[k+1]){
//             let temp = arr[k+1]
//             arr[k+1] = arr[k]
//             arr[k] = temp
//             sortingHappen = true
//         }
//     }
//     if(!sortingHappen) break
//     j += 1
// }
// console.log(arr);  

//! Selection sort
// let arr = [7,1,5,4,3,2]
// for(let i=0; i<arr.length; i++){
//     let min = i
//     for(let j=i+1; j<=arr.length-1; j++){
//         if(arr[j]<arr[min]){
//             min = j
//         }
//     }
//     if(min !== i){
//       let temp = arr[i]
//       arr[i] = arr[min]
//       arr[min] = temp
//       console.log(arr);
//     }
// }
// console.log(arr);

//! Insertion Sort
let arr = [5,4,10,1,6,2]
// for(let i=0; i<arr.length; i++){
//     let temp = i+1
//     let val = arr[i+1]
//     if(i===arr.length-1){
//         break
//     }
//     if(i===0){
//         if(arr[i]>arr[i+1]){
//             let temp1 = arr[i+1]
//             arr[i+1] = arr[i]
//             arr[i] = temp1
//         }
//     }else {
//         for(let j=i; j>=0; j--){
//         if(arr[j]>val){
//             arr[j+1] = arr[j]
//             temp = j
//         }
//         arr[temp] = val
//     }
//     }
// }
for(let i=1; i<arr.length; i++){
    let curr = arr[i]
    let prev = i-1
    while(arr[prev]>curr && prev>=0){
        arr[prev+1] = arr[prev]
        prev = prev-1
    }
    arr[prev+1] = curr
}
console.log(arr);