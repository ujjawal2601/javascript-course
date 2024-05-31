// console.log("scope")
// let a=20;
// if(true){
//     let a=10
//     console.log(a)
// }
// console.log(a)

function one(){
    const username="ujjawal"
    function two(){
        const website="youtube";
        console.log(username);
    }
    //console.log(website);
    two();
}
one();

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}