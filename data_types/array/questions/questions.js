//! Q1: Print each number multiplied by 3
// const numbers = [ 2,4,6,8 ]
// let result = numbers.forEach((num,index)=>console.log(num*3,index))

//! Q2: Print all names in uppercase using forEach
// const names = ["aman", "riya", "rohan"];
// names.forEach((name)=>console.log(name.toUpperCase()))

//! Q3: Count how many numbers are even (use a counter variable and forEach)
// const nums = [1, 2, 3, 4, 5, 6];
// let count = 0
// nums.forEach((num)=>{
//     count = num%2===0 ? count+1 : count
// })
// console.log(count);

//! Q4: Return a new array with each number doubled
// const numbers = [1, 2, 3];
// const result = numbers.map((num)=>num*2)
// console.log(result);

//! Q5: Convert an array of names to their lengths
// const names = ["Aman", "Riya", "Rohan"];
// const length = names.map((name)=>name.length)
// console.log(length);

//! Q6: Add 10% tax to each product price
// const prices = [100, 200, 300];
// const tax = prices.map((price)=>(price/100)*10+price)
// console.log(tax);

//! Q7: Get only even numbers
// const nums = [1, 2, 3, 4, 5, 6];
// const result = nums.filter((num)=>num%2===0)
// console.log(result);

//! Q8: Get all strings with length > 3
// const words = ["hi", "hello", "bye", "welcome"];
// const result = words.filter((word)=>word.length>3)
// console.log(result);

//! Q9: Filter out students who scored less than 50
// const marks = [30, 55, 70, 45, 90];
// const filt = marks.filter((num)=>num<50)
// console.log(filt);

//! Q10: Find the first even number
// const nums = [1, 3, 7, 8, 10];
// const result = nums.find((num)=>num%2===0)
// console.log(result);

//! Q11: Find the first name that starts with “R”
// const names = ["Aman", "Riya", "Rohan", "Simran"];
// const result = names.find((name)=>name.startsWith('R'))
// console.log(result);

//! Q12: Find the first product whose price is greater than 500
// const products = [
//     { name: "Phone", price: 400 },
//     { name: "Laptop", price: 800 },
//     { name: "Tablet", price: 300 }
// ];
// const result = products.find((obj)=>obj.price>500)
// console.log(result);

//! Q13: Find the sum of all numbers
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((sum,num)=>sum+num,0)
// console.log(sum);

//! Q14: Find the maximum number
// const numbers = [5, 9, 2, 7, 3, 100];
// const max = numbers.reduce((acc,num)=>{
//     acc = acc>num ? acc : num
//     return acc
// })
// console.log(max);

//! Q15: Count how many times each item appears
// const fruits = ["apple", "banana", "apple", "orange", "banana"];

// let resObj = fruits.reduce((acc,str)=>{
//     if(acc[str]){
//         acc[str]+=1
//     }else{
//         acc[str]=1
//     }
//     return acc
// },{})
// console.log(resObj);

// let result = {}
// for(i of fruits){
//     if(result[i]){
//         result[i] += 1
//     }else{
//         result[i]=1
//     }
// }
// console.log(result);

//! Q16: Given an array of numbers,
//! 👉 Double only the even ones,
//! 👉 Then find their total sum.
// const numbers = [1, 2, 3, 4, 5, 6];
// const f = numbers.map((num)=>{
//     if(num%2===0){
//         return num*2
//     }else{
//         return num
//     }
// }).filter((num)=>num%2===0).reduce((acc,num)=>acc+num,0)

// const f1 = numbers.filter((num)=>{
//     if(num%2==0) return num*2
// }).map((num)=>num*2).reduce((acc,num)=>acc+num,0)
// console.log(f1);

//! Given an array of ages, check if there’s any person who is 18 or older.
// const ages = [12, 14, 16, 21, 15];
// const isThere = ages.some((age)=>age>18)
// console.log(isThere);

//! You have an array of numbers. Check if all numbers are positive.
// const numbers = [3, 7, 9, 12];
// const checkAll = numbers.every((num)=>num>=0)
// console.log(checkAll);

//! You have an array of students’ scores. Find the index of the first student who scored less than 40.
// const scores = [78, 82, 39, 56, 30];
// const index = scores.findIndex((num)=>num<40)
// console.log(index);

//! You have an array of employee salaries. Sort them in ascending order.
// const salaries = [25000, 18000, 32000, 22000];
// const order = salaries.sort((a,b)=>a-b)
// console.log(order);

//! You have two arrays of fruits. Combine them into a single array.
// const fruits1 = ["apple", "banana"];
// const fruits2 = ["mango", "orange"];
// const result = fruits1.concat(fruits2)
// console.log(result);

//! You have two arrays of students’ ages.
//! 👉 Merge them
//! 👉 Keep only those 18 or older
//! 👉 Sort them in ascending order
// const classA = [17, 21, 19, 16];
// const classB = [20, 18, 15, 22];
// let result = classA.concat(classB)
// result = result.filter((num)=>num>=18).sort((a,b)=>a-b)
// console.log(result);