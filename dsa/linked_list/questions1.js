//todo : Finding middle element : 876

//! Approach one using array
// var middleNode = function(head) {
//     curr = head
//     const arr = []
//     while(curr.next !== null){
//         arr.push(curr)
//         curr = curr.next
//     }
//     arr.push(curr)
//     let mid = Math.floor(arr.length / 2)
//     return arr[mid]
// };


//todo : Linked List cycle : 141

//! Normal Approacj
// let hasLinkidList = new Set()
// let curr = head
// while(curr !== null){
//     if(hasLinkidList.has(curr)){
//         return true
//     }
//     hasLinkidList.add(curr)
//     curr = curr.next
// }
// return false

//! Floyd algorithm or slow fast pointer approach
let slow = head
    let fast = head.next
    while(slow !== fast){
        if(fast == null || fast.next == null) return false
        slow = slow.next
        fast = fast.next.next
    }
    return true