/* Let's Practice array */

//! Index of array
// let arr = [10,20]
// console.log(typeof arr);
// console.log(arr[-1]);
// arr[2] = 30
// console.log(arr);
// arr[4] = 40
// console.log(arr);
// console.log(arr[4]);
// arr[8] = 90
// console.log(arr);
// arr[2] = 40
// console.log(arr);

//! data types in array
// let arr = [10,20,"anand",true,false,null,undefined,{college:"JBREC",branch:"IT"},["mango","musk melon"]]
// console.log(arr[2]);

//todo : Adding Element in the array
// let arr = [10,20,30,40]
// arr[arr.length] = 50
// console.log(arr);
// arr.push(60,70,80)
// console.log(arr);

//todo : Removing an element in an array
// let arr = [10,20,30,40]
// arr.pop()
// console.log(arr);

//todo : Key-Value Pair in array
// let arr = []
// arr.firstname = "aman"
// console.log(arr);
// arr.lastname = "pandey"
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr);
// console.log(arr.firstname);

//! From Here We will learn the methods in javascript !//

//todo : push(),unshift() * pop(),shift()
// const arr = [10,20,30,40]
// arr.push(50)
// console.log(arr);
// arr.unshift(5)
// console.log(arr);

// arr.pop()
// console.log(arr);
// arr.shift()
// console.log(arr);

//todo : concat()
// const fruit = ["mango",'watermelon','musk melon']
// const num = [10,20,30]
// const num1 = [100,200,300]
// const r = fruit.concat(num,num1)
// console.log(r);

//todo : indexOf() -> Return the index of a element
// const fruit = ["mango",'watermelon','musk melon','abc','ghj']
// console.log(fruit.indexOf("ghj"));
// console.log(fruit.indexOf("Ghk"));

//todo : includes() -> Return's true if value exists else false
// const fruit = ["mango",'watermelon','musk melon','abc','ghj']
// console.log(fruit.includes("mango"));
// console.log(fruit.includes("Abc"));

//todo : reverse() 
// const fruit = ["mango",'watermelon','musk melon','abc','ghj']
// console.log(fruit.reverse());

//todo : sort() -> It will maintain the order
// const fruit = ["mango",'watermelon','musk melon','abc','ghj']
// console.log(fruit.sort()); // Not good to sort number
// const num = [100,90,80,10,200]
// console.log(num.sort(function(a,b){return a-b}));

//todo : slice() -> get a specific portion of a array , It basically don't changes the orginal array
// const fruit = ["mango",'watermelon','musk melon','abc','ghj']
// console.log(fruit.slice(1,4));
// console.log(fruit);

//todo : splice() -> 
const fruit = ["mango",'watermelon','musk melon','abc','ghj',"dog","cat","rat"]
console.log(fruit.splice(3,3));
console.log(fruit);