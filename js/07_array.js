// const myarr=[1,2,3,4]
// console.log(myarr[0]);

// //or
// const myarr1=new Array(1,2,3,4)
// console.log(myarr1[3]);

// //array merhods
// myarr1.push(6)
// myarr1.push(9)
// myarr1.pop()
// console.log(myarr1);
// myarr1.unshift(7)   //add elements to the start
// console.log(myarr1);


//slice and splice
// const mna=[0,1,2,3,4,5]
// console.log("original " + mna);
// const mna1=mna.slice(1,3)
// console.log("slice "+ mna1)
// console.log("after slice " + mna);
// const mna2=mna.splice(1,3)
// console.log("splice "+ mna2)
// console.log("after splice " + mna); //if u see the original array u 
//                                     //will notice that original array is modifidied***
//                                     //ie removes element from the array



//concact two array
const arr1=[0,1,2]
const arr2=[3,4,5]
// arr1.push(arr2)
// console.log(arr1); // this give array in array

//so we try to concatinate
//how??
// const arr3=arr1.concat(arr2)
// console.log(arr3);

//instead of this concat we can use spread operator   ...
// const arr3=[...arr1,...arr2]
// console.log(arr3);




// const a1=[1,2,3,[1,2],1,9,[4,5,[1,8,6]]]
// const realarray=a1.flat(Infinity) // this will remove array in array infinty here is depth
// console.log(realarray);

// to convert anything into array  from and of
// console.log(Array.isArray("raj")); // false raj is not array
// //to convert it into array
// console.log(Array.isArray(Array.from("raj"))); // gives true
// console.log(Array.from("raj")); // print in array form


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));



