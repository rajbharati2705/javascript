//start- 82 line remove comments
// let num="33"
// console.log(typeof num)
// console.log(typeof(num));

// let result=Number(num)
// console.log(result);   
// // o/p:-
// // number
// // number
// // 33

// let num1="33abc"  //try with null,undefined
// console.log(typeof num1)
// console.log(typeof(num1));

// let result1=Number(num1)
// console.log(result1); 

// //op:-
// // string
// // string
// // NaN

// //****operations */

// //+,-,*,/,5 ..........

// let str1="raj"
// let str2=" bharati"
// let str3=str1+str2
// console.log(str3); //raj bharati
// console.log(1+2);
// console.log("1"+2);
// console.log(1+"2")
// console.log("1"+"2")
// console.log(1+2+"2");
// console.log(1+"2"+"2");

// //*********Comparision */
// // imp
// //== comapre values
// //=== i.e strict check compare values and datatypes too ,if both are equal then op is true

// //JS is dynamic lang

// // data types total 7 
// // symbol
// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id===anotherId) // false, if u pass same value also then it will return false because it is symbol ie unique

// //Bigint
// const bigint= 456896312158799n


// //aray
// const hero=["raj","vis","moh"]

// //object
// let myobj={
//     name:"raj",
//     age:18
// }

// //function
// const myfun=function(){
//     console.log("Hello World")
// }


// //to find type of data type
// console.log(myfun);

// const d=null
// console.log(typeof d);  //typeof null is object

// const e=undefined
// console.log(typeof e); //typeof undefined is undefined

// console.log(typeof hero); //typeof array is object


/************************************************* */
// memory stack (primitive)-here copy is made 
// and heap (Non-premitive)-here reference is made
//ex:- stack
let userid="raj"
let anotherUserId=userid
console.log(userid);
console.log(anotherUserId);
anotherUserId="bharati"
console.log("after change");
console.log(userid);
console.log(anotherUserId); // we can say a copy is made in stack 

//heap example
const user1={
    name:"raj",
    age:18
}

console.log(user1.name)
const user2=user1
console.log(user2.name)
user2.name="bharati"
console.log(user1.name) // bharati
console.log(user2.name) // bharati





 