//! Print a classic star pattern : n❌n
// for(let i=0; i<4; i++){
//     let row =  ""
//     for(let j=0; j<4; j++){
//         row += "* "
//     }
//     console.log(row);
// }

//! *  
//! * *  
//! * * *  
//! * * * * 
// for(let i=0; i<4; i++){
//     let row = ""
//     for(let j=0; j<=i; j++){
//         row += "* "
//     }
//     console.log(row);
// }

// for(let i=1; i<=5; i++){
//     let row = ""
//     for(let j=1; j<=i; j++){
//         row += `${j} ` 
//     }
//     console.log(row);
// }

// for(let i=1; i<=5; i++){
//     let row = ''
//     for(let j=1; j<=i; j++){
//         row += `${i} `
//     }
//     console.log(row);
// }

// for(let i=5; i>0; i--){
//     let row = ""
//     for(let j=1; j<=i; j++){
//         row += `${j} `
//     }
//     console.log(row);
// }

// for(let i=1; i<=5; i++){
//     let row = ''
//     for(let j=0; j<=5-i; j++){
//         row += `${j+1} `
//     }
//     console.log(row);
// }

// for(let i=1; i<=5; i++){
//     let row = ""
//     for(let j=1; j<=5-i; j++){
//         row += "  "
//     }
//     for(let k=1; k<=i; k++){
//         row += "* "
//     }
//     console.log(row);
// }

// for(let i=0; i<=5; i++){
//     let row = ""
//     for(let j=0; j<=i; j++){
//         row += j%2==0 ? "1 " : '0 '
//     }
//     console.log(row);
// }

// let toggle = "1"
// for(let i=1; i<=5; i++){
//     let row = ""
//     for(let j=1; j<=i; j++){
//         row += toggle
//         if(toggle == "1"){
//             toggle = "0"
//         }else{
//             toggle = "1"
//         }
//     }
//     console.log(row);
// }

//! write a function that returns a count of digit in a number
// function countDigit(n){
//     let s = String(n)
//     return s.length
// }
// console.log(countDigit(12234))
