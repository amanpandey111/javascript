// this should be continued once completed first.js

//todo weakMap

//! problem with array
// let user = { 'name': 'Rohith Kotla' }
// const allUser = [user]
// user = null;   // Here I did null so allUser[0] shold be null but not getting null
// console.log(allUser[0])

//! Same problem with map
// let user = { 'name': 'dinesh' }
// const uMap = new Map();
// uMap.set(user, true)
// user = null  // Here I did null so allUser[0] shold be null but not getting null
// console.log(uMap)

//? Now weakMap come here to solve this problem
// the key of weakMap must be a object only
// weak only suppose : get, set, delete, has : It doesn't support ietrator method
let addr = {'country': 'India'}
const wMap = new WeakMap();
wMap.set(addr, true)
// console.log(wMap.get(addr)) // Here You will get true
addr = null  // Now Here I put null in addr so all over location addr will gone
// console.log(wMap.get(addr))  // here we will get the undefined

//todo weakSet
// this is also same as wekMap but in terms of {set}
// It has methods like : has, add, delete : but not methods iterator

//! set Implmenetation and it's fault
// const onLineUser = new Set()
// let user1 = { name: 'alice' }
// let user2 = { name: 'mark' }
// onLineUser.add(user1)
// console.log(user2)
// console.log(onLineUser.has(user1))  // Here it will true
// user1 = null     // Now i set to null 
// console.log(onLineUser.has(user1))  // still true

//? WeakSet Implmenetation and it's feature over set
const onLineUser = new WeakSet()
let user1 = {name: 'anand'}
onLineUser.add(user1)
console.log(onLineUser.has(user1)) // expected it will return true
user1 = null  // set to null
console.log(onLineUser.has(user1)) // expected it will return false