//! How to convert a string into a integer without using parseInt() function in JavaScript
// function convertStoI(){
//     let a = "100"
//     console.log(typeof +a);
// }
// convertStoI()

//! How to generate all combinations of a string in JavaScript ?
// Dog => Possible Combination [D], [Do], [Dog], [o], [og], [g]
// let s = "dog"
// let r = []
// for(let i=0;i<s.length;i++){
//     for(let j=i+1;j<s.length+1;j++){
//         r.push(s.slice(i,j))
//     }
// }
// console.log(r);

//todo : you have list of object and you need to remove the duplicate object based on email address
const users = [
  {
    name: "Alice Johnson",
    email: "duplicate@example.com",
    phone: "1234567890",
    password: "alice@123"
  },
  {
    name: "Bob Smith",
    email: "bob.smith@example.com",
    phone: "2345678901",
    password: "bob@456"
  },
  {
    name: "Charlie Davis",
    email: "charlie.d@example.com",
    phone: "3456789012",
    password: "charlie@789"
  },
  {
    name: "Diana Miller",
    email: "duplicate@example.com",
    phone: "4567890123",
    password: "diana@321"
  },
  {
    name: "Ethan Wright",
    email: "ethan.w@example.com",
    phone: "5678901234",
    password: "ethan@654"
  },
  {
    name: "Fiona Clark",
    email: "fiona.c@example.com",
    phone: "6789012345",
    password: "fiona@987"
  },
  {
    name: "George Allen",
    email: "george.a@example.com",
    phone: "7890123456",
    password: "george@321"
  },
  {
    name: "Helen Brooks",
    email: "duplicate@example.com", 
    phone: "8901234567",
    password: "helen@159"
  }
];
let updates_array = []
let duplicate = []
for(let i=0;i<users.length-1;i++){
    let bool=false
    for(let j=i+1;j<users.length;j++){
        if(users[i].email==users[j].email){
            bool=true
            break
        }else{
            bool=false
        }
    }
    if(bool){
        duplicate.push(users[i])
    }else{
        updates_array.push(users[i])
    }
}
updates_array.push(duplicate[0])
console.log(duplicate);
console.log(updates_array);