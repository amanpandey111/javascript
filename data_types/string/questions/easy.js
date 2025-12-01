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
// let str = "mangal pandey"
// for(let i=0; i<str.length; i++){
//     console.log(str[i]);
// }

// for(var s of str){
//     console.log(s);
// }

// str.split("").forEach((char, index)=>{
//     console.log(`${char} : ${index}`);
// })

//! 7.JavaScript Program to Count Number of Alphabets
// const str = "adjfjh23"
// let count = 0
// for(let i=0; i<str.length; i++){
//     if(str.charAt(i)>="A" || str.charAt(i)>="Z"){
//         count++
//     }
// }
// console.log(count);

//! longest substring in an string
var longestPalindrome = function(s) {
    let longestPalindrome = ""
    for(let i=0; i<s.length; i++){
        for(let j=0; j<s.length; j++){
            if(s[i]===s[j]){
                let str = s.slice(i,j+1)
                // console.log(str);
                let bool = str == str.split("").reverse().join("")
                if(bool){
                    if(longestPalindrome.length<str.length){
                        // console.log(str);
                        longestPalindrome = str
                    }
                }
            }
        }
    }
    return longestPalindrome
};
console.log(longestPalindrome("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa..."));



var longestPalindrome = function(s) {
    if (s.length < 2) return s;

    let start = 0, maxLen = 1;

    function expand(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > maxLen) {
                start = l;
                maxLen = r - l + 1;
            }
            l--;
            r++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expand(i, i);     // odd length
        expand(i, i + 1); // even length
    }

    return s.substring(start, start + maxLen);
};
