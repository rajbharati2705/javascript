//IIFE Immediately Invoked Function Expressions
//why do we use iife 1)we dont want to pollute from global scope

// function chai() {
//     console.log("DB connected");
// }
// chai()


// named IIFE ->wt is named IIFE here chai
(function chai() {
    console.log("DB connected");
})();  // semi colon is must to run below iife i.e if u want to run 2IIFE in a same file u must have this ;


//we can pass parameters in this way too
//unnamed IIFE
((name)=>{
    console.log(`My name is ${name}`);
})('raj')


//javascript call stack 25th video chai aur code
// java ececution Context
// 1)Global execution Context
// 2)function execution context
// 3)eval execution context

// phases:-
// 1)Memory creation phases
// 2)execution phases

// // all this work on stack - stack follow lifo order
