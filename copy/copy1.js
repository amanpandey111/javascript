//todo primitive copy : number, string, boolean, bigInt, symbol, undefined, null : value copy
// let a = 10
// let b = a
// console.log('Just copied the value of a to b ',a, b);
// a = 30
// console.log('Changed the value of a(parent) ', a, b);
// b = 20
// console.log('Changed the value of b(child) ', a,b);
// note : when you create a copy of primitve they are separate and they don't effect when the changed

//todo object : reference copy
// let obj1 = {
//     name: 'aman pandey'
// }
// let obj2 = obj1
// console.log('Copied One Object into other ', obj1, obj2);
// obj1.name = 'shivam pandey'
// console.log('Changed obj1(parent) ', obj1, obj2);
// obj2.name = 'aman pandey'
// console.log('Changed obj2(child) ', obj1, obj2);

// ⚠️ Key Rule (Very Important)
// 👉 Primitive → copy by value
// 👉 Object/Array → copy by reference

//todo : shallow 
// let obj1 = {
//     name: 'aman pandey'
// }
// let obj2 = { ...obj1 }
// obj2.name = 'anand pandey'
// console.log('Shallow Copy ',obj1, obj2);

//todo : nested object problem : the problem with shallow copy is it only copies the first level
// let obj1 = {
//     name: 'aman',
//     address: {
//         city: 'Hyderabad'
//     }
// }
// let obj2 = { ...obj1 };
// obj2.address.city = 'delhi'
// console.log(obj2, obj1);

// let a = { x: 1, y: { z: 2 } };
// let b = { ...a };

// b.x = 100;
// b.y.z = 200;

// console.log(a);   // ?
// console.log(b); // ?

//todo deep copy : Full seperation
// let obj1 = {
//     name: 'aman',
//     address: {
//         city: 'hyderabad'
//     }
// }

// let obj2 = JSON.parse(JSON.stringify(obj1))

// obj2.address.city = 'Delhi'
// console.log(obj1, obj2);

// ⚠️ Limitations (VERY IMPORTANT for interviews)
// This method fails with:
// functions ❌
// undefined ❌
// Date ❌
// Map / Set ❌

// let obj1 = {
//     name: 'aman',
//     address: {
//         city: 'hyd'
//     }
// };
// let obj2 = structuredClone(obj1)
// obj2.address.city = 'delhi';
// console.log(obj1, obj2);