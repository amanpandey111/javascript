//! Basic creating a node
// function node(data){
//     this.data = data
//     this.next = null
// }
// const head1 = new node(5)
// const mid = new node(10)
// const tail = new node(15)
// head1.next = mid
// mid.next = tail
// console.log(head1.next.next);

//! Let's Learn How To Add a node
// function node(data){
//     this.data = data
//     this.next = null
// }

// function LinkedList(){
//     this.head = null
//     this.size = 0
// }
// const list = new LinkedList()

// LinkedList.prototype.addAtHead = function(data){
//     const newNode = new node(data)
//     newNode.next = this.head;
//     this.head = newNode;
//     this.size++
// }

// LinkedList.prototype.addAtTail = function(data){
//     const newNode = new node(data)
//     if(this.head == null){
//         list.addAtHead(data)
//     }else{
//         let curr = this.head
//         while(curr.next !== null){
//             curr = curr.next
//         }
//         curr.next = newNode
//     }
// }

// LinkedList.prototype.addAtIndex(data, index){
    
// }

// list.addAtHead(10)
// list.addAtHead(20)
// list.addAtTail(1)

// console.log(list);

//! Let's start practcing linked list
function node(val){
    this.val = val
    this.next = null
}

function linkedList(){
    this.head = null
    this.size = 0
}

linkedList.prototype.addAtHead = function(val){
    const myNode = new node(val)
    if(this.head===null){
        this.head = myNode
    }else{
        myNode.next = this.head
        this.head = myNode
    }
    this.size++
}

linkedList.prototype.addAtTail = function(val){
    const myNode = new node(val)
    if(this.head === null){
        this.head = myNode
    }else{
        let curr = this.head
        while(curr.next !== null){
            curr = curr.next
        }
        curr.next = myNode
    }
    this.size++
}

linkedList.prototype.addAtIndex = function(index,val){
    if(index==0){
        this.addAtHead(val)
    }else if(index>=this.size){
        this.addAtTail(val)
    }else{
        const myNode = new node(val)
        let curr = this.head
        for(let i=0; i<index-1; i++){
            curr = curr.next
        }
        myNode.next = curr.next
        curr.next = myNode
        this.size++
    }
}

linkedList.prototype.findAtIndex = function(index){
    if(index<0 || index>=this.size){
        return -1
    }else if(index===0){
        return this.head.val
    }else{
        let curr = this.head
        for(let i=0; i<index; i++){
            curr = curr.next
        }
        return curr.val
    }
}

linkedList.prototype.deleteAtIndex = function(index){
    if(index===0){
        this.head = this.head.next
    }else{
        let curr = this.head
        for(let i=0; i<index-1; i++){
            curr= curr.next
        }
        curr.next = curr.next.next
    }
    this.size--
}

linkedList.prototype.middleElement = function(){
    let s = this.head
    let f = this.head
    while(f !== null && f.next !== null){
        s = s.next
        f = f.next.next
    }
    return s.val
}

linkedList.prototype.reverseLinkedList = function(){
    let prev = null
    let curr = this.head
    while(curr.next !== null){
        const temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    curr.next = prev
    prev = curr
    return prev
}

const l = new linkedList()
l.addAtHead(10)
l.addAtHead(9)
l.addAtTail(11)
l.addAtIndex(2,20)
// console.log(l.findAtIndex(2));
l.addAtHead(5)
// console.log(l.findAtIndex(0));
// l.deleteAtIndex(0)
// console.log(l.findAtIndex(2));
// l.deleteAtIndex(2)
// console.log(l.findAtIndex(2));
l.addAtIndex(4, 22)
console.log(l);
console.log(l.reverseLinkedList());