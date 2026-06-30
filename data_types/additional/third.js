//todo Once You Done with second.js then start third.js

 /* //todo 7. Create a Map of Book Titles and Authors
Add at least 5 entries.
Update an author.
Count the number of books. */
// const bookMap = new Map([['The Guide', 'R.K Narayan'], ['A Suitable Boy', 'Vikram Seth']])
// bookMap.set('Malgudi Days', 'R.K Narayan')
// bookMap.set('Train to Pakistan', 'Khushwant Singh')
// bookMap.set('The God of Small Things', 'Arundhati Rai') // upto here added a 5 entries
// bookMap.set('The God of Small Things', 'Arundhati Roy') // Here I updated a authour
// console.log(bookMap)
// console.log(bookMap.size) // To get the number of books

/* //todo 8. Associate Metadata with DOM Elements Using WeakMap
Create fake DOM elements (objects).
Store related metadata in a WeakMap.
Demonstrate benefits for garbage collection. */
// let button = {
//   tag: 'button',
//   id: 'btn-login'
// }
// const input = {
//   tag: 'input',
//   id: 'txt-name'
// }
//? With WeakSet which is a part of assignment and it works
// const elementMetadata = new WeakMap()
// elementMetadata.set(button, {
//   clickCount: 10,
//   color: 'blue'
// })
// elementMetadata.set(input, {
//   placeholder: 'Enter Name',
//   required: true,
// })
// console.log(elementMetadata.get(button))
// console.log(elementMetadata.get(input))

// button = {
//   tag: 'button'
// }
// // elementMetadata.set(button, { clicks: 100 })
// console.log(elementMetadata.get(button))
// console.log(elementMetadata.get(input))

//? Now Just for Experiment purpose
// const ele = new Map()
// ele.set(button, { canClick: 20, color: 'blue' })
// ele.set(input, { placeholder: 'Enter Name' })
// console.log(ele)
// button = null
// console.log(ele)

/* //todo 9. Track Instances of a Class with WeakSet
Define a Session class.
Add each instance to a WeakSet when created.
Discuss how it avoids memory leaks. */
const s = new Set(['aman'])
console.log(s)