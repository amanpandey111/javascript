//todo 1. Write a Program to reverse a string in JavaScript.
function reverseString(s){
    return s.split("").reverse("").join("")
}
// console.log(reverseString("aman pandey"));

//todo 2. write a program to check string is a palindrome or not
function palindromString(s){
    return s == s.split("").reverse("").join("")
}
// console.log(palindromString("ama"));

//todo 3. Find the largest Number in an array
function largestNumber(arr){
    let largest = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest
}
// console.log(largestNumber([100,10,20,5,15,45,25,80]));