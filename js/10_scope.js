//scopes
// let
// const 
// var // var is global scope so avoid using var use let and const only
//let and const are block scope

//let us see scope in function in function

// function user1(){
//     const name="raj"
//     function user2(){
//         const price="999"
//         console.log(name + price);
//     }
//     //console.log(price)
// }
// user1()
//summary child can access parent but parent cant access child

//console.log(addone(5)); //here also it will work 
function addone(num) {
    return num+1
}
//console.log(addone(5)); //here also it will work

// ex2
//console.log(two(8))  //Cannot access 'two' before initialization ,it is due to hoisting
const two=function(num)
{
    return num+2
}
console.log(two(8))
