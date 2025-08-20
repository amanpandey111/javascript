//! 1.Find the Longest word in a string

//todo : first way : using for loop
// function longestWord(s){
//     let array = s.split(" ")
//     // new_array = array.sort((a,b)=>b.length - a.length)
//     console.log(new_array);
//     let r = ""
//     for(let i=0;i<array.length;i++){
//         console.log(array[i].length);
//         for(let j=i+1;j<array.length;j++){
//             if(array[j].length>array[i].length){
//                 r = array[j]
//             }
//         }
//     }
//     console.log(r);
// }
// longestWord("write a simple syntax for Javascript")

//todo : second way : using sort()
// function longestWord(s){
//     let array = s.split(" ").sort((a,b)=>b.length-a.length)
//     console.log(array[0]);
// }
// longestWord("write a simple syntax for Javascript")

//todo : third way : usign reduce()
// function longestWord(s){
//     let r = s.split(" ").reduce((accum,current)=>accum.length>current.length?accum:current,"")
//     console.log(r);
// }
// longestWord("write a simple jhgfkjefvhjebbekwhjb syntax for Javascript")

//! 2.Hashtag Generator

//todo : first way -> using normal for loop
// function hashTagGenerator(s){
//     let d = s.split(" ")
//     let r = []
//     for(let i=0;i<d.length;i++){
//         r.push(d[i][0].toUpperCase()+d[i].slice(1))
//     }
//     console.log(r);
//     console.log(d);
//     console.log("#"+r.join(""));
// }
// hashTagGenerator("code with me")

//todo : second way -> using map method
// function hashTagGenerator(s){
//     let arr = s.split(" ")
//     arr = arr.map((curEle)=>curEle.replace(curEle[0],curEle[0].toUpperCase()))
//     console.log("#"+arr.join(""));
// }
// hashTagGenerator("code with me")

//todo : third way -> using map and slice
// function hashTagGenerator(s){
//     let arr = s.split(" ")
//     arr = arr.map((curEle)=>curEle.charAt(0).toUpperCase()+curEle.slice(1))
//     console.log("#"+arr.join(""));
// }
// hashTagGenerator("code with me")

//! count occurance of character

//todo : first way -> normal for loop in our string
// function ocuurCount(str,w){
//     let c=0
//     for(let i=0; i<str.length;i++){
//         if(w==str[i]){
//             c+=1
//         }
//     }
//     console.log(c);
// }
// ocuurCount("MissIssippi","i")

//todo : second way -> using reducer
function ocuurCount(str,w){
    let arr = str.split("")
    // console.log(arr);
    count = arr.reduce((accum,ele)=>{
        if(ele==w){
            accum++
        }
        return accum
    },0)
    console.log(count);
    return count
}
ocuurCount("MissIssippi","i")
console.log(ocuurCount("MissIssippi","i"));