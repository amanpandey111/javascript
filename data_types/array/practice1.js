//! splice() method
let array = ["mango","banana","grapes","pineapple"]
console.log("before splice :"," ",array);
array.splice(2,2,"replaced1","replaced2")
console.log("after splice :",array);

//! find() method 
let user = [
    {id:1,name:"aman",role:"admin"},
    {id:2,name:"kalyan",role:"user"},
    {id:3,name:"shiva",role:"publisher"},
]
let user_find = user.find(user=>user.id == 2);
console.log(user_find.name);

//! filter() method -> returns all matching record
let user_details = [
    {id:1,name:"aman",role:"admin"},
    {id:2,name:"kalyan",role:"user"},
    {id:3,name:"shiva",role:"user"},
]
let result = user_details.filter(user_details=>user_details.role == "user")
console.log(result);