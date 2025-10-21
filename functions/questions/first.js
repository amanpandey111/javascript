const f1 = () => { console.log("Hello World"); }
const f2 = () => {}
console.log(f1===f2);
const f3 = f1
f3()
console.log(f3===f3);