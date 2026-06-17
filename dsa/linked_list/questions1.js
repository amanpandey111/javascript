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
// let slow = head
// let fast = head.next
// while(slow !== fast){
//     if(fast == null || fast.next == null) return false
//     slow = slow.next
//     fast = fast.next.next
// }
// return true

//todo : 160. Intersection of Two Linked Lists

//! Using Naive Approach
// let first = headA
// while(first !== null){
//     let second = headB
//     while(second !== null){
//         if(first == second){
//             return first
//         }
//         second = second.next
//     }
//     first = first.next
// }
// return null

//todo : 19. Remove Nth Node From End of List

//! Norma two way approach
// var removeNthFromEnd = function (head, n) {
//     let sentinel = new ListNode();
//     sentinel.next = head
//     let length = 0
//     while (head) {
//         head = head.next
//         length++
//     }
//     let prevPos = length - n
//     let prev = sentinel
//     for (let i = 0; i < prevPos; i++) {
//         prev = prev.next;
//     }
//     prev.next = prev.next.next;
//     return sentinel.next
// };

//! Two pointer approach
// var removeNthFromEnd = function(head, n) {
//     let sentinel = new ListNode()
//     sentinel.next = head
//     let slow = sentinel
//     let fast = sentinel
//     for(let i=0; i<n; i++){
//         fast = fast.next
//     }
//     while(fast.next){
//         slow = slow.next
//         fast = fast.next
//     }
//     slow.next = slow.next.next
//     return sentinel.next
// };