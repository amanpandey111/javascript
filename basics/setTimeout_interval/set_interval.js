//! setInterval() : It is used to perform the operation repetidly after some interval of time

let num = 0
let myInterval = setInterval(function (){
  console.log("The Number is :", num)
  if(num===5) clearInterval(myInterval)
  num +=1
},2000)