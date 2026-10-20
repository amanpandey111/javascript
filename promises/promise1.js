//todo: Promise chaining
// Promise.resolve({ name: "Aman" })
//   .then((employee) => employee.name)
//   .then((name) => console.log(name));

// Promise.resolve({ name: "Aman" })
//   .then((employee) => employee.name)
//   .then((name) => console.log("Hello",name));

// Promise.resolve(5)
//   .then((num) => num + 3)
//   .then((num) => num * 2)
//   .then((result) => console.log(result));

//todo: using setTimeOut
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data Fetched Successfully");
//   }, 2000);
// });

// myPromise
// .then(message => console.log(message))

// console.log('Fetching Data....')

//todo: Understanding reject() and .catch()
// const employeePromise = new Promise((resolve, reject) => {
//   const isServerWorking = false;

//   setTimeout(() => {
//     if (isServerWorking) {
//       resolve("Employee data fetched");
//     } else {
//       reject("Server error!");
//     }
//   }, 1000);
// });

// employeePromise
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// console.log("Request sent");

Promise.reject("Logined Failed")
.then(message => console.log('Got resolved', message))
.catch(err => console.log('Error:', err))
.finally(() => console.log('Pr'))