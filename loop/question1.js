//! write a function that searches a element in an array and return the index
// function returnIndex(arr,ele){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]==ele) return i
//     }
//     return -1
// }
// console.log(returnIndex([10,20,30,40,50,60],620));

//! write a function that return number of negative number in an array
// function returnNeagtive(arr){
//     let count = 0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<0) count++
//     }
//     return count
// }
// console.log(returnNeagtive([10,20,-10,-2,-3,-4,4]));

//! write a function that returns a largest number in an array
// function returnLargest(arr){
//     let res = arr[0]
//     for(let i=0; i<arr.length; i++){
//         if (arr[i]>res) res=arr[i]
//     }
//     return res
// }
// console.log(returnLargest([10,20,100,30,40,100,500]));

//! write a function that returns a smallest number in an array
//! write a function that returns a count of negative number in an array
// function negativeCount(arr){
//     let count = 0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<0) count++
//     }
//     return count
// }
// console.log(negativeCount([-1,2,3,4,-5,-6,-4,1,2,3]));

//! Find the second largest number in an array
function secondLargest(arr){
    let l = arr[0]
    let s = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i]>l) l=arr[i]
    }
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>s && arr[i]<l) s=arr[i]
    }
    console.log(s);
}
secondLargest([10,20,20]);