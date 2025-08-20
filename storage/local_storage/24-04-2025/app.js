//! Local Storage
// localStorage.setItem("first name","aman")
// localStorage.setItem("last name","pandey")
// localStorage.setItem("location","hyderabad")
// console.log(localStorage.getItem("first name"));
// console.log(localStorage.removeItem("location"));
// localStorage.removeItem("first name")
// localStorage.removeItem("last name")


let l = [10,20,30,40]
let str = JSON.stringify(l)
// console.log(str);

localStorage.setItem("key",str)
console.log(localStorage.getItem("key"));
let aray = JSON.parse(localStorage.getItem("key"))
console.log(aray);

//! Session Storage
// sessionStorage.setItem("qualification","B.Tech")
// sessionStorage.setItem("college","JBREC")
// sessionStorage.setItem("branch","IT")

// console.log(sessionStorage.getItem("college"));
// sessionStorage.removeItem("branch")