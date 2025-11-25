// function x(){
//   var i = 1;
//   setTimeout(()=>{
//     console.log(i)
//   },1000)
//   let my = setInterval(()=>{
//     console.log("Hello INterval")
//     clearInterval(my)
//   },2000)
//   console.log("Hello Javascript")
// }
// x()

//! print 1-1s, 2-2s, 3-s, 4-4s, 5-5s
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, i * 1000)
//   }
//   console.log("Hello Javascript")
// }

//todo : case 2 :-> use let becase it is a block scope it will create a different copy at each time
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }
  console.log("Hello Javascript")
}
x();