//! initially list of objects
let todo = [
    {id:Date.now(),text:"learn react",completed:false},
    {id:Date.now(),text:"learn react",completed:false}
];
console.log(todo[0].text)

//! creating a new text
let new_todo = "learn javascript"

//! adding the text using spread operator
todo = [...todo,{id:Date.now(),text:new_todo,completed:false}];

console.log(todo);

