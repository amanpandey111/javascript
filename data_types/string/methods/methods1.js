//todo : Let's Learn Important Javascript methods

//? First FIve methods of String
// let practice = "    learn data type    "
// console.log(practice.length);
// console.log(practice.toLowerCase());
// console.log(practice.toUpperCase());
// console.log(practice.trim());
// console.log(practice.trim().split(" "));

//! Q1. Validate Palindrome (without reversing manually)
// let p = "Race car"
// let p1 = p.toLowerCase().replace(" ","").split("").reverse().join("")
// console.log(p.toLowerCase().replace(" ","") == p1);

//! Q2. Word Frequency Counter
// let str = "Hello hello world"
// let l = str.toLowerCase().split(" ")
// console.log(l);
// let r = {}
// for(let i of l){
//     if(r[i]){
//         r[i]+=1
//     }else{
//         r[i]=1
//     }
// }
// console.log(r);

//! Q3. Extract Domain from Email
// let str = "aman@gmail.com"
// let r = str.includes('com')
// if(r){
//     console.log(str.split('.')[1]);
// }else{
//     console.log("No domain not found");
// }

//! Q4. Longest Word in a Sentence
// let str = "I am learning JavaScript now"
// let iterate = str.split(" ")
// let result = ""
// for(let i of iterate){
//     if(i.length>result.length){
//         result = i
//     }
// }
// console.log(result);

//! Q5. Check for Forbidden Words : Write a function that checks if a message contains any forbidden words from a given list
// const forbidden = ["spam", "fake", "scam"]
// const message = "This is a Fake offer! fake"
// function returnForbidden(){
//     let iterate = message.split(" ")
//     for(let i of iterate){
//         for(let j of forbidden){
//             if (i===j){
//                 return "Sorry We Have Forbidden Word"
//             }
//         }
//     }
//     return "Congrats You Don't have any forbidden Words"
// }
// console.log(returnForbidden());

//? Second FIve methods of String
// let practice2 = "next five methods"
// console.log(practice2.slice(1,8));
// console.log(practice2.slice(-4,-1));
// console.log(practice2.substring(1,8));
// console.log(practice2.replace("five","six"));
// console.log(practice2.indexOf("methods",2));
// console.log(practice2.startsWith("n",1));
// console.log(practice2.endsWith("ods"));

//! 1.length → Count vowels in a string
// function vowelsCount(str){
//     let v = "aeiouAEIOU"
//     let presentVowel = ""
//     for(let i=0; i<str.length; i++){
//         if(v.includes(str[i])){
//             if(!presentVowel.includes(str[i])) presentVowel+=str[i]
//         }
//     }
//     return presentVowel.length
// }
// console.log(vowelsCount("JavaScript"));

//! 2.slice() → Mask sensitive data
// let phone = "8765544321"
// let lastfour = phone.slice(-4)
// let result = "*".repeat(phone.length-4)+lastfour
// console.log(lastfour);
// console.log(result);

//! 3.From a full name, extract the first two letters of the first and last name.
// let name = "Aman Pandey"
// let [first, last] = name.split(" ")
// console.log(first.substring(0,2)+last.substring(0,2));