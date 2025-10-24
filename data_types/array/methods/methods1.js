//! forEach()
// let n = [1,2,3,4,5]
// n.forEach(num=>console.log(num))

//! map()
// console.log(n.map((num)=>num));

//! filter()
// let r = n.filter((num)=>num>3)
// console.log(r);

//! find()
// const users = [
//     {id:1, name:"aman"},
//     {id:2, name:"vishal"}
// ]
// let r1 = users.find((curEle)=>curEle.id===1)
// console.log(r1);

//! reduce()
// const numbers = [100,2,3,4,5,6]
// const t = numbers.reduce((sum,num)=>sum+num,9)
// console.log(t);

// numbers.reduce((a,n)=>{
//     console.log(a,n);
//     return a+n
// },0)

// numbers.reduce((a,n)=>{
//     console.log(a,n);
//     return a+n
// })

//! some()
// const numbers = [1,2,3,4]
// const hasEven = numbers.some((num)=>num%2===0)
// console.log(hasEven);

//! every()
// const num = [2,4,6,8,10]
// const hasEve = num.every((num)=>num%2===0)
// console.log(hasEve);

//! findIndex()
// const students = ["Aman", "Riya", "Rohan"];
// const index = students.findIndex(name => name==="Rohan")
// console.log(index);

//! sort()
// const nums = [30, 2, 100, 5];
// const s = nums.sort((a,b)=>b-a)
// console.log(nums);

//! concat()
// const n1 = [1,2,3]
// const n2 = [4,5,6]
// const re = n1.concat(n2)
// console.log(re);

//! push(), pop()
// let arr = [1,2,3]
// let res = arr.push(4)
// let pop = arr.pop()
// console.log(pop);
// console.log(arr);

//! unshift(), shift()
// let res = [1,2,3,4,5,6]
// let us = res.unshift(100)
// console.log(us);
// console.log(res);

//! slice()
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let res = arr.slice(1,7)
// console.log(res);

//! splice()
let arr = [1,2,3,4,5,6,7,8,9]
let res = arr.splice(1,2,[100,200,300])
console.log(res);
console.log(arr);