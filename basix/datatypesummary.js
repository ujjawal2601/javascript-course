// //  Primitive: always passed a copy i.e call by value
// //  7 types : String, Number, Boolearn, null, undefined, Symbol(unique copies are made), BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// //symbol working same id with different names still when checked they are not same 
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);
// console.log("type of null only primitive data type whoose data type is object")
// console.log(typeof null);

// // const bigNumber = 3456543576654356754n

// // ~~~~~~~~~~~
// // Reference (Non primitive): passed by reference 
// // Array, Objects, Functions
// //there data type is object 

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);
// https://262.ecma-international.org/5.1/#sec-11.4.3

// ~~~~~~~~~~~~~~~~memory in js

// stacK(primitive):copy of values are send;
// let a=2;
// let b=a; //copy of a is provided to b
// b=3;
// console.log(a);
// console.log(b);

// heap (non primitive) call by reference 
let user1={
    email:"abc@gmail.com",
    upi:"abc@ybl"
}
console.log(user1.email);
let user2=user1
user2.email="cba@gmail.com";
console.log(user1.email);
console.log(user2.email);