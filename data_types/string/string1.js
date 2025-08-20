//todo : String

//todo : string property :-> It only support length() property
//! String are indexed
// let s = "aman"
// console.log(s[-2]);

//? Note : If u try to fetch out of length number or negative number u will get undefined

//todo : Here We will see the method which will not take the arguments
//! toUpperCase(),toLowerCase()
// console.log(s.toLowerCase());
// console.log(s.toUpperCase());

//! trim(), trimStart(), trimEnd()
// let m = "    hy I am Aman Pandey     "
// console.log(m.trim());
// console.log(m.trimStart());

//todo : Here We will see the method which will take the arguments
//! includes()
// let i = "Hello Everyone How are You"
// console.log(i.includes(" are"));
// console.log(i.includes(" are",18)); //? does the string starts from 18
// console.log(i.includes("jhghjcd"));

//! indexOf()
// let i = "Hello Everyone welcome to my tutorial"
// console.log(i.indexOf("e",10));
// console.log(i.indexOf("hfbejkf"));  //? If string not there it will return "-1"

//! replace(), replaceAll()
// let r = "Welcome to infoan technologies"
// let z = r.replace("to","in")
// console.log(r.replace("e","a"));
// console.log(z);
// console.log(r.replaceAll("e","a"));

//! concat() 
// let str1 = "Hello all of You"
// let str2 = "I am Aman Pandey"
// console.log(str1.concat(" "+str2));
// console.log(str1.concat(" ",str2));

//! padStart(), padEnd()
// let l = '9876'
// console.log("*********"+l);
// console.log(l.padStart(12,"*"));
// console.log(l.padEnd(12,"*"));

//! charAt() :-> It work same as indexing like string[3]
// let c = "Hello Welcome to coding cohort"
// console.log(c[3]);
// console.log(c.charAt(3));

//! charCodeAt() :-> It Will return the ASCII Code 
// let c = "Hello Welcome to Bootcamp project"
// console.log(c.charCodeAt(0));
// console.log(c.charCodeAt(1));