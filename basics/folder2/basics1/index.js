//! var is a global scopt, let & const has the local scope
var myVar = "Hello World"
let myVar2 = "Declared by ley"

// console.log(window.myVar,window.myVar2)

//! Var has a function scopt, (let & const) has the local scope, let create a block scope js doesn't have any block scope type concept
//! js has only two scope : global, function scope.
function testVar() {
    if (1) {
        var t = "function var"
        const t1 = "function let"
    }
    console.log(t);
}
testVar()