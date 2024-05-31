// console.log("functions")
// // function saymyname(){   // when u declare a function it is called parameter
// //     console.log("hello morning");
// // }
// // saymyname(); // saymyname is reference and() is execution
// // function add(number1,number2){
// //     console.log(number1 + number2);
// // }
// // function add2(number1,number2){
// //     let result=(number1 + number2);
// //     return result;
// // }
// // add();
// // add(2,3); //when u call a function the values are called arguments
// // add(2,"3");
// // add(2,"null");
// // const result= add(3,3);
// // console.log("result : " ,result) // because the function is only printing there is no return type in the function 
// // const result2= add2(4,3);
// // console.log("result2 : " ,result2)

// function loginuser(username = "user"){
//     // if(!username){
//     //     // console.log("validno")
//     //     return
//     // }
//     return `${username} just logged in`
// }
// console.log(loginuser("ujjawal"))
// console.log(loginuser())

// //console.log(loginuser())

// //--------------------------------------------

function calculateprice(val1,val2,...num1){ //rest operator when more number of arguments are passed
    return num1;
}
// console.log(calculateprice(2,3,4,5,6,67,7,87))
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

