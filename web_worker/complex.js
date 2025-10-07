let btn1 = document.getElementById('btn1')
// console.log(btn1);
btn1.addEventListener('click',()=>{
    let workerObj = new Worker("worker.js")
    workerObj.postMessage("start worker")
    workerObj.onmessage = function(e){
        document.querySelector('#output').innerHTML = e.data
    }

})

let btn2 = document.getElementById('btn2')
// console.log(btn2);
btn2.addEventListener('click',()=>{
    document.querySelector('#hi').innerHTML += " Hi !! "
})