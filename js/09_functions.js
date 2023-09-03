function name(){
    console.log("R");
    console.log("R");
    console.log("R");
    console.log("R");
    console.log("R");
    console.log("R");
}
//name()

//add two numbers
function add(num1,num2) {
    return num1+num2
}
const x=add(4,2)
console.log(x);

function loggedinuser(username){   //u can give your default userser name as username="raj"
                                   // it will never execute if block
    if(!username)
    {
        return "Please enter user name"
    }
    else
    {
        return `${username} is logged in`
    }
}
const output=loggedinuser("raj")
console.log(output);

// suppose u want to add n numbers

// function usercart(num1)
// {
//     return num1
// }

// console.log(usercart(200)); // this is ok when u have more numbers then


//then use rest operator ... rest and spread operator is same just depends on place
// function usercart(...num1)
// {
//     return num1
// }

// console.log(usercart(200,400,700));  //op [ 200, 400, 700 ] we can add this later on


//now let us see how a object can be passed in an function

const user3={
    name:"raj",
    price:"999"
}

function handleobject(anyobject) {
    console.log(`name is ${anyobject.name} and price is ${anyobject.price}`);
}
handleobject(user3)

//u can even pass custom parameters
handleobject({
    name:"mohit",
    price:789
})