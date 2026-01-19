//! Here We just learn how to create a node
// function node(data){
//     this.data = data;
//     this.next = null;
// }

// var head = new node(5)
// var mid = new node(10)
// var tail = new node(15)
// head.next = mid
// mid.next = tail
// console.log(head.next.next);


//! Here We Will add(head, tail, index)
function Node(data){
    this.data = data
    this.next = null
}

function LinkedList(){
    this.head = null
    this.size = 0
}

let n1 = new Node(10)
// console.log(n1);

const list = new LinkedList()
// console.log(list);

LinkedList.prototype.addAtHead = function(data) {
    let newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
    this.size++
}

LinkedList.prototype.addAtTail = function(data) {
    let newNode = new Node(data);

    if (this.head === null) {
        this.head = newNode;
    } else {
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = newNode;
    }

    this.size++;
};


list.addAtHead(10);
list.addAtHead(20)
list.addAtTail(1)
console.log(list);