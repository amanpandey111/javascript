//! Higher Order Functions

// A higher-order function is a function that takes another function as an argument, or returns a function as a result. Higher-order functions are a powerful tool in functional programming, allowing you to create more abstract and reusable code.

// Here are some examples of higher-order functions in JavaScript:
function withLoggedin(fn) {
  return function(...args) {
    const result = fn(...args)
    console.log('Here We Got Our Result ', result)
    return result;
  }
}

const add = (a, b) => a+b;

const loggedInAdd = withLoggedin(add);
loggedInAdd(2, 4);