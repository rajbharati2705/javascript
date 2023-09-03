const user= {
    username:"raj",
    price: 999,

    welcome: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // u can see everytime the context will change
    }
    
}
user.welcome()
user.username="ramu"
user.welcome()
console.log(this) //op {} , if u type thois line in console then u will find windows and all here u will find empty paranthesis



/***arrow functions */
function add(num) {
    return num+1
}
console.log(add(5));

//arrow function
//()=>{}
//const variable=()=>{ }
const addone = (num1) =>{ return num1+1 }
console.log(addone(8));

// still we can simply 
//if u have only one line to return then we can ignore {} and return keyword
const addtwo=(num2)=>  (num2+2) // or we can ignore bracket but not a good practice to ignore bracket const addtwo=(num2)=>  (num2+2)
console.log(addtwo(5));