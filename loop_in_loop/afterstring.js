//! count digit
// function countDigit(num){
//     if(num==0) return 1
//     if(num < 0) num = Math.abs(num)
//     let count = 0;
//     while(num>0){
//         num = Math.floor(num/10)
//         count += 1
//     }
//     return count
// }
// console.log(countDigit(-635456));

//! palindrom
// function isPalindrome(num){
//     if(num<0) return "Not a Palindrom"
//     let cmp = num
//     let rev = 0
//     while(cmp>0){
//         rem = cmp % 10;
//         rev = (10*rev) + rem
//         cmp = Math.floor(cmp/10)
//     }
//     return num === rev
// }
// console.log(isPalindrome(636396));

//! Reverse A Integer
function reverseDigit(num){
    if(num===0) return 0
    let limit = Math.pow(2,31)
    if(num<-limit || num>limit) return 0
    let rev = 0
    let bool = num < 0
    num = Math.abs(num)
    while(num>0){
        let l = num % 10
        num = Math.floor(num/10)
        rev = (rev*10) + l
    }
    return bool ? -rev : rev
}
console.log(reverseDigit(214748364781));
