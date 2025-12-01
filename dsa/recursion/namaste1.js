//! print n....1 
// function printNumber(num){
//     if(num==0) return 100;
//     console.log(num);
//     num-=1
//     printNumber(num);
// }
// let r = printNumber(4)
// console.log(r);

//! print 1....n
let x = 1;
function printNum(num){
    if(x===num){
        console.log(num);
        return
    }
    console.log(x);
    x+=1
    printNum(num)
}
printNum(5)