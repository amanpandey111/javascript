// this should be continued once completed first.js

//todo weakMap

//! problem with array
// let user = { 'name': 'Rohith Kotla' }
// const allUser = [user]
// user = null;   // Here I did null so allUser[0] shold be null but not getting null
// console.log(allUser[0])

//! Same problem with map
// let user = { 'name': 'dinesh' }
// const uMap = new Map();
// uMap.set(user, true)
// user = null  // Here I did null so allUser[0] shold be null but not getting null
// console.log(uMap)

//? Now weakMap come here to solve this problem
// the key of weakMap must be a object only
// weak only suppose : get, set, delete, has : It doesn't support ietrator method
let addr = {'country': 'India'}
const wMap = new WeakMap();
wMap.set(addr, true)
// console.log(wMap.get(addr)) // Here You will get true
addr = null  // Now Here I put null in addr so all over location addr will gone
// console.log(wMap.get(addr))  // here we will get the undefined

//todo weakSet
// this is also same as wekMap but in terms of {set}
// It has methods like : has, add, delete : but not methods iterator

//! set Implmenetation and it's fault
// const onLineUser = new Set()
// let user1 = { name: 'alice' }
// let user2 = { name: 'mark' }
// onLineUser.add(user1)
// console.log(user2)
// console.log(onLineUser.has(user1))  // Here it will true
// user1 = null     // Now i set to null 
// console.log(onLineUser.has(user1))  // still true

//? WeakSet Implmenetation and it's feature over set
// const onLineUser = new WeakSet()
// let user1 = {name: 'anand'}
// onLineUser.add(user1)
// console.log(onLineUser.has(user1)) // expected it will return true
// user1 = null  // set to null
// console.log(onLineUser.has(user1)) // expected it will return false

//todo : Let's Do a assignment

/* 1. Create a Map of Student IDs and Names
Add at least 5 students.
Retrieve a name using a student ID.
Delete one entry and print the Map. */
// const student = new Map([[1, 'anand shrivasatav'], [2, 'michel clark'], [3, 'harishankar'], [4, 'kalyan']])
// student.set(5, 'shiva prasad')  //? added 5 students
// console.log(student.get(3))     //? Retrieve using student id
// console.log(student.delete(1))  //? Deleted one entry
// student.forEach((ele, index) => console.log(ele, index)) //? printed the map

/* 2. Create a Set of Programming Languages
Add duplicate languages to test uniqueness.
Iterate and print all unique entries. */
// const pl = new Set(['java', 'python', 'ruby'])
// pl.add('javascript')
// pl.add('ruby')
// console.log(pl)
// pl.forEach((ele) => console.log(ele))

/* 3. Compare Object vs Map for Key-Value Storage
Store the same data in both.
Compare insertion order and key types (e.g., object keys). */
// let obj = {
//   'name': 'akhil',
// }
// const mapObj = new Map([['name', 'akhil']])
// // console.log(obj, mapObj)
// obj['role'] = 'software engineer'
// mapObj.set('role', 'software engineer')
// // console.log(obj, mapObj)
// obj['tech'] = 'cold fusion'
// mapObj.set('tech', 'cold fusion')
// // console.log(obj, mapObj)
// obj[1] = 'performance'
// mapObj.set(1, 'performance')
// // console.log(obj, mapObj)  // here the order got change in obj but not in map
// obj[{ b: true }] = true
// mapObj.set({a: true}, true)
// console.log(obj, mapObj)

/* 4. Build a Contact List Using Map
Use phone numbers as keys and names as values.
Add, update, delete contacts.
Search for a contact by number. */
// const phone = new Map([[1909090909, 'ashish mehta'], [5454545454, 'virat kaur'], [4343767698, 'rohith shinde']])
// phone.set(9898878778, 'yuvraj sisodhia')
// phone.set(9898878778, 'youvraj s')
// console.log(phone)
// console.log(phone.get(9898878778))

/* 5. Remove Duplicates from Array Using Set
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
Convert to a Set and back to an array with only unique values. */
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
// const fruitSet = new Set([...fruits])
// console.log(fruitSet)
// console.log([...fruitSet])

/* 6. Track User Logins with Set
Add user IDs when users log in.
Remove them on logout.
Check if a specific user is currently logged in. */
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const loggedInUsers = new Set();

function menu() {
    console.log("\n===== User Login System =====");
    console.log("1. Login");
    console.log("2. Logout");
    console.log("3. Check Login Status");
    console.log("4. View Logged In Users");
    console.log("5. Exit");

    rl.question("Enter your choice: ", (choice) => {
        switch (choice) {
            case "1":
                rl.question("Enter User ID: ", (id) => {
                    loggedInUsers.add(id);
                    console.log(`✅ User ${id} logged in.`);
                    menu();
                });
                break;

            case "2":
                rl.question("Enter User ID: ", (id) => {
                    if (loggedInUsers.delete(id)) {
                        console.log(`✅ User ${id} logged out.`);
                    } else {
                        console.log("❌ User not found.");
                    }
                    menu();
                });
                break;

            case "3":
                rl.question("Enter User ID: ", (id) => {
                    console.log(
                        loggedInUsers.has(id)
                            ? "✅ User is logged in."
                            : "❌ User is not logged in."
                    );
                    menu();
                });
                break;

            case "4":
                console.log("Logged In Users:");
                console.log([...loggedInUsers]);
                menu();
                break;

            case "5":
                console.log("Goodbye!");
                rl.close();
                break;

            default:
                console.log("Invalid choice.");
                menu();
        }
    });
}

menu();