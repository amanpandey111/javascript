//! 1.Length Of a string
// console.log("aman pandey".length);

//! 2.Reversing a string
// console.log("aman pandey".split("").reverse().join(""));

//! 3.Remove a Character From String
// let str = "Aman Pandey"
// console.log(str.replace("y",""));                                                    //? ysing replace
// console.log(str.substring(0,str.indexOf("y"))+str.substring(str.indexOf("y")+1));    //? using substring
// console.log(str.slice(0,str.indexOf("y"))+str.slice(str.indexOf("y")+1));            //? using slice
// console.log(str.split("y").join(""));                                                //? using split()
// let res = Array.from(str)                                                            //? using filter and join
// res = res.filter((s)=>s!=="y")
// console.log(res.join(""));

//! 4.Delete the first character from the string
// console.log("aman pandey".slice(1));
// console.log("aman pandey".substring(1));

//! 5.Remove Text From a String
// let str = "Hello Welcome to removetext Infoane Technology"
// console.log(str.replace("removetext","").replace("  "," "));
// console.log(str.split("removetext").join("").replace("  "," "));
// let res = str.split(" ")
// res = res.filter((text)=>text!=="removetext")
// console.log(res.join(" "));

//! 6.Iterate Over a string
let str = "mangal pandey"
// for(let i=0; i<str.length; i++){
//     console.log(str[i]);
// }

// for(var s of str){
//     console.log(s);
// }

str.split("").forEach((char, index)=>{
    console.log(`${char} : ${index}`);
})