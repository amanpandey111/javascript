let obj1 = {
    firstname : "akash",
    lastname : "shukla"
}
let obj2 = {
    age : 20,
    graduate : "No"
}

//! Object.assign()
let newobj1 = Object.assign(obj1,obj2)
// console.log(newobj1);
// console.log(obj1);

//! Object.entries()
let newobj2 = Object.entries(newobj1)
console.log(newobj2);

//! Object.fromEntries()
let newobj3 = Object.fromEntries(newobj2)
console.log(newobj2);
console.log(newobj3);

//! Object.keys()
let key1 = Object.keys(newobj3)
console.log(key1);

//! Object.values()
let val = Object.values(newobj3)
console.log(val);

//! Object.groupBy()
let fruits = [
    {name:"apple",quantity:100},
    {name:"mango",quantity:400},
    {name:"guava",quantity:200},
    {name:"watermelon",quantity:500},
]
function myCallBack({quantity}){
    return quantity>200?"Ok":"low"
}
let result = Object.groupBy(fruits,myCallBack)
console.log(result);