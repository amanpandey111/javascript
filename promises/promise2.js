//todo: work with functions - 1
// function getData() {
//   return Promise.resolve("Employee data fetched");
// }

// getData().then((data) => {
//   console.log(data);
// });

//todo: work with functions - 2
// function getData() {
//   return Promise.resolve("Employee data fetched");
// }

// async function displayData() {
//   const data = await getData();
//   console.log(data);
// }

// displayData();

//todo: Understand async and await

//! async — makes a function return a Promise.
// console.log('First Console')
// async function greet() {
//   return "Hello!";
// }

// greet().then((message) => console.log(message));
// console.log('Last Console')

//! await — waits for a Promise to settle before continuing that async function.
// console.log('Before get employee');
// function getEmployee() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Aman");
//     }, 2000);
//   });
// }

// console.log('After get employee');

// async function displayEmployee() {
//   console.log("Fetching employee...");

//   const name = await getEmployee();

//   console.log(name);
//   console.log("Finished");
// }

// console.log('Before displayEmployee call');

// displayEmployee();
// console.log('After displayEmployee call');

//todo: Handling errors with async/await
// async function fetchEmployee() {
//   try {
//     const employee = await Promise.reject("Server error");
//     console.log(employee);
//   } catch (error) {
//     console.log(error);
//   } finally{
//     console.log('Atlast finally has to execute')
//   }
// }

// fetchEmployee();

// //! Guess the output
// async function test() {
//   console.log("A");

//   const result = await Promise.resolve("B");

//   console.log(result);
// }

// test();

// console.log("C");
// //! A -> C -> B