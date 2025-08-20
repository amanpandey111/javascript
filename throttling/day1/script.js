//todo default leading
// const throttleScroll = throttle(manageScroll,1000)
// const handleScroll = () => {
//     throttleScroll()
// }
// function manageScroll(){
//     console.log("scrolling");
// }
// function throttle(callback, delay){
//     let waiting = false;
//     return function throttleFunction(){
//         if(!waiting){
//             callback()
//             waiting=true

//             setTimeout(()=>{
//                 waiting=false
//             },delay)
//         }
//     }
// }



const throttleScroll = throttle(manageScroll,10000)
const handleScroll = () => {
    // manageScroll()
    throttleScroll()
}
function manageScroll(){
    console.log("scrolling");
}
function throttle(callback, delay){
    let lastCall = 0;
    return function throttleFunction(){
        let now = Date.now();
        if(now - lastCall >= delay){
            callback()
            lastCall = now;
        }
    }
}


//todo : adding our conditional leading
// const throttleScroll = throttle(manageScroll,1000)
// const handleScroll = () => {
//     // manageScroll()
//     throttleScroll()
// }
// function manageScroll(){
//     console.log("scrolling");
// }
// function throttle(callback, delay, options={}){
//     const { leading=true, trailing=true } = options
//     let lastCall = 0;
//     return function throttleFunction(){
//         let now = Date.now();
//         console.log(now,lastCall);

//         //! here we have add our leading condition
//         if(!leading && lastCall==0){
//             console.log("executing");
//             lastCall = now
//         }

//         if(now - lastCall >= delay){
//             callback()
//             lastCall = now;
//         }
//     }
// }


//todo : adding trailing
// const throttleScroll = throttle(manageScroll,1000)
// const handleScroll = () => {
//     throttleScroll(1,2,3,43)
// }
// function manageScroll(){
//     console.log("track scrolling");
// }
// function throttle(callback, delay, options={}){
//     const { leading=false, trailing=true } = options
//     let timeoutId = '';
//     let lastCall = 0;
//     return function throttleFunction(...args){
//         let now = Date.now();
//         const self = this || globalThis
//         console.log(globalThis);
//         // console.log(now,lastCall);

//         //! here we have add our leading condition
//         if(leading && lastCall==0){
//             console.log("executing");
//             lastCall = now
//         }
//         if(now - lastCall >= delay){
//             callback.apply(self,args)
//             lastCall = now;
//             clearTimeout(timeoutId)
//             timeoutId=""
//         }else if(trailing && !timeoutId){
//             timeoutId=setTimeout(()=>{
//                 callback.apply(self,args)
//                 lastCall = leading ? now : 0;
//                 timeoutId=""
//             },delay)
//         }
//     }
// }