//! Map Data Structure
//todo : declare Map
// let map = new Map()

//todo : Initialize with values
// let map1 = new Map([['name', 'aman pandey'], ['company', 'Infoane Technologies'], ['role', 'Software Engineer']])

//todo : How to add a value
const map = new Map()
map.set('name', 'aman pandey')
map.set('company', 'Infoane Technologies')
map.set('role', 'software engineer')
map.set('role', 'software engineer1') // latest one will be replaces the old property

//todo : How To Get a value
// console.log("Name is",map.get('name'))

//todo : Map Keys
const funMap = new Map()
funMap.set(560, "My House Number");
funMap.set(true, "I Love Teaching")
let obj = { name: 'Aman Pandey' }
funMap.set(obj, true)

//todo : create empty object
const funObj = {}
funObj[560] = "My House Number"
// console.log(funObj[560] === funObj['560'])
// console.log(funMap.get(560) === funMap.get('560'))
// console.log(funMap.get(560) === funObj[560])

//todo : Map() properties and methods
// console.log(funMap.size) // 3
// console.log(funMap.has(560)) // true
// console.log(funMap.has('560')) // false
// console.log(funMap.delete('560')) // If it delete return true else false
// console.log(funMap)
// funMap.clear() // It Will Clear the full funMap
// console.log(funMap)

//todo : MapIterator: keys(), values() and entries()
// const ageMap = new Map([['Jack', 30], ['Harry', 20], ['Stokes', 25], ['Sam', 28]])
// console.log(ageMap.keys())
// console.log(ageMap.values())
// console.log(ageMap.entries())

// const mitr = ageMap.keys()
// const mitr = ageMap.values()
// const mitr = ageMap.entries()

// mitr.forEach(element => {
//   console.log(element)
// });

// ageMap.forEach((value, key) => {
//   console.log(`${key} is ${value} year old!...`)
// })

//todo : conversion :-> (object into map), (map into object), (map into array)

// Object into Map
const address = {
  'aman' : 'hyderabad',
  'shubham': 'odisha',
  'alok': 'hyderabad',
}
const addressMap = new Map(Object.entries(address))

// Map into Object
const addressObj = Object.fromEntries(addressMap)

// Map into an Array
const map1 = new Map()
map1.set('milk', 200)
map1.set('tea', 100)
map1.set('coffee', 300)
// console.log(Array.from(map1))
// console.log([...map1])

//todo : Map vs Object :-> When and how to use


//! Set in Javascript : A set is a collection of unique item
//todo : initialize and properties and methods
const set = new Set()
// console.log(set);

const fruitSet = new Set(['mango', 'banana', 'orange'])
// console.log(fruitSet);
// console.log(fruitSet.size); // to get the size of set

const team = new Set()
team.add('Rohith sharma')
team.add('virat kohli')
team.add('dhoni')
team.add('gill')
// console.log(team);.

// console.log('Do we have rohith sharma ', team.has('Rohith sharma')); // has to check whether we have in set or not

// console.log(team.delete('gill'));
// console.log(team);
// team.clear()
// console.log(team);

//todo : Iterate over set
// const houseNos = new Set([1,2,3,4,5,60])
// houseNos.values(); // Now Here You can use forEach or forOf
// console.log(houseNos.keys()) // Now Here You can use forEach or forOf
// console.log(houseNos.entries()) // Now Here You can use forEach or forOf : this will give key:value pair

//todo : sets vs array in javascript
// whenever you have to desl with unique items got with sets, sets are added muscle to array

//todo : convert sets to array
const numSet = new Set([10,20,30,40])
const arr = [...numSet]
// console.log(numSet, arr)

//todo : convert arrays into set
const arrFruit = ['🍉', '🚗', '🚴🏻', '🚛', '🐵', '🥥', '🚴🏻', '🚛']
const setFruit = new Set(arrFruit)
// console.log(arrFruit, setFruit)

//todo : when you want to use object with sets
// let person = {
//   name: 'Robert',
//   age: 32,
// }
// const pSet = new Set()
// pSet.add(person)

// console.log(pSet)
// person.name="Vicky Singh" // this name will get updated in pSet as well because it is storing in same reference.
// person = { name: 'jghdj' } // Here this won't change the pSet because it is creating a reference {b} and pSet has stored reference {a}.
// pSet.add(person)  // person will get added as a secondary object if it's reference changes, else updated person object will be there.
// console.log(pSet)

//todo : set theories (union, intersection, difference)
const first = new Set([1, 2, 3]);
const second = new Set([3, 4, 5]);

console.log(first.union(second))            // union
console.log(first.intersection(second))     // intersection 
console.log(first.difference(second))       // difference : first / second
console.log(second.difference(first))       // difference : second / first