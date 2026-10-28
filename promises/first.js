//todo: How do we create a Promise?
// const myPromise = new Promise((firstArgResolve, secondArgReject) => {
//   // resolve means success
//   // reject means failure
//   const result = true;
//   if(result){
//     firstArgResolve("Data fetched successfully");
//   }else{
//     secondArgReject("Promise Reject Successfully")
//   }
// });
// myPromise.then((success) => console.log(success))

//todo: How do we consume a Promise?
// const myPromise = new Promise((resolve, reject) => {
//   resolve("Employee data fetched");
// });

// myPromise
//   .then((result) => {
//     console.log(result); // Handles success
//   })
//   .catch((error) => {
//     console.log(error); // Handles failure
//   });

//todo: A practical example: success and failure
// const checkLogin = new Promise((resolve, reject) => {
//   const isLoggedIn = false;

//   if (isLoggedIn) {
//     resolve("Login successful");
//   } else {
//     reject("Login failed");
//   }
// });

// checkLogin
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Login check completed"));

//todo: Self-Practice
// const checkLogin = new Promise((resolve, reject) => {
//   const isLoggedIn = true;
//   if (isLoggedIn) {
//     resolve("Login Successful")
//   } else {
//     reject("Login failed")
//   }
// });

// checkLogin
//   .then(message => console.log('Here We have then message',message))
//   .catch(err => console.log('Here We have catch message',err))
//   .finally(() => console.log('Finally Executed'))

//todo: Promise Exercise
// const practicePromise = new Promise((resolve, reject) => {
//   const isLoggedIn = true;
//   if (isLoggedIn) {
//     resolve('Welcome to JavaScript')
//   } else {
//     reject("Keep practicing")
//   }
// })

// practicePromise
//   .then(message => console.log(message))
//   .catch(err => console.log(err))
//   .finally(() => console.log('Promises Executed Fully'))