//! Here I am just practicing in 1st phase covered(value copy, referece copy, shallow copy, deep copy)

//todo : referecen copy test
// let obj1 = {
//     name: 'aman',
//     address: {
//         city: 'hyd',
//         village: {
//             name: 'laxmiguda'
//         }
//     }
// }
// let obj2 = obj1
// obj2.address.village.name = 'vrindavan'
// console.log(obj1, obj2);

// let obj1 = {
//     name: 'aman pandey'
// }
// let obj2 = obj1
// obj2 = {
//     name: 'hyd'
// }
// console.log(obj1, obj2);

//! deep copy method 1 flaws
let user = {
    name: 'aman',
    // greet: function() { console.log("Hello"); },
    status: undefined
}
let flawCopy = JSON.parse(JSON.stringify(user));
let cc = structuredClone(user)
cc.status = 'pp'
// flawCopy.status = 'vfv'
console.log(flawCopy, cc);