console.log("**********  Let's Learn Object **********");

//! Object creation
// let obj = {name:"aman pandey"}
// console.log(obj);

// let s1 = "aman"
// let s2 = "aman"
// console.log(s1==s2);

//! Accessing values from object
// let myname = "shivam"
// let obj = {
//     firstname : "aman",
//     "lastname" : "pandey",
//     qualification : "b.tech",
//     shivam : "developer"
// }
// console.log(obj);
// console.log(obj.firstname);
// console.log(obj["firstname"]);
// console.log(obj[myname]);

//! How We can add the values in our object
// let obj = {
//     product : "samsugn s24",
//     company : "samsung"
// }
// console.log(obj);
// console.log(obj.price);
// obj.price = 120000
// console.log(obj.price);
// console.log(obj);
// obj["refundable"] = "yes"
// console.log(obj);

//! object insdie a object
// let obj = {
//     firstname : "aman",
//     lastname : "pandey",
//     address : {
//         city:"Hyderabad",
//         state:"telangana",
//         pincode : 500077,
//         moredetails : {
//             population : 40000000,
//             area : "1200 sq km"
//         }
//     }
// }
// console.log(obj);
// console.log(obj.address.city);
// let obj1 = {
//     firstname : "aman",
// }

// console.log(obj.firstname == obj1.firstname);

//todo object.freeze() vs object.seal() 

const user = {
    firsname : "rithik",
    lastname : "reddy",
    pata : {
        city:"hyderabad",
        state:"telangana",
        moredetails:{
            population:40000000,
            area:"1100 sqkm"
        }
    },
    qualification : "B.Tech",
    isgraduate : true 
}                
// console.log(user);
user.college = "JBREC"
// console.log(user);

// const name = "aman pandey"
// console.log(name);
// name = "mohit bendre"
// console.log(name);

//! How to delete a key value pair in js object
console.log(delete user.college);
console.log(user);
Object.seal(user)
console.log(delete user.isgraduate);console.log("firsname" in user );
