//objects

//object literals
const mysymbol="key"

const user={
    name:"raj",
    "full name":"raj bharati", // to make a key value
    //to make symol type
    [mysymbol]:"don", //[] is imp to make it symbol and delectation of this is imp const mysymbol="key"
    age:18,
    email:"rajbharati2705@gmail.com",
    isLoggedin:false,
    lastLoggedIn:["Monday","Saturday"]
}

console.log(user.email);
console.log(user["full name"]); // to acess key which is not key
console.log(user[mysymbol]);  // it will print don
// to prove my mysymbol as symbol
console.log(user)

//now let us create function to the user object
user.greeting=function(){
    console.log("hello JS user");
}

console.log(user.greeting());
//let us use this to get details from user object
user.greetingTwo=function()
{
    console.log(`Hello JS user ${this["full name"]}`);
}
console.log(user.greetingTwo());

