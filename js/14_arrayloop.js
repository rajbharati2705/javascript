const arr=[1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
}

//let us see for strings

// const greeting="Hello Everyone!"
// for (const greet of greeting) {
//     if(greet==' ')
//     continue
//     else
//     console.log(`Each word in greet ${greet}`);
// }


//in map key do not repeat
const map=new Map()
map.set('IN','India')
map.set('USA','United State of America')
map.set('IN','In')


// for (const key of map) {
//     console.log(key);
// }

// // to print only key
// for (const [key,value] of map) {
//     console.log(key);
// }


// //for both keys and values
// for (const [key,values] of map) {
//     console.log(key ,":-" ,values);
// }

//for of loop do not work on objects***
// so for objects use for in loop

const myobj={
    js  :"JavaScript",
    cpp :"C plus plus"
}
for (const key in myobj) {
    //console.log(key); //prints only keys
    //console.log(myobj[key]); //prints values
    //console.log(`${key} full for is ${myobj.key}` );
}

//*****for each loop */
const coding=["js","cpp","java","python"]
coding.forEach( function(val){      //rembember const coding,foeEach( dont give function name ,just give function keyword(){})
    //console.log(val);
})


//we can write above with arrow function too
coding.forEach( (item,index,coding)=>{  //not only items we can access index,array too 
    //console.log(item);
   // console.log(item,index,coding);
})

//when u have object inside array
const myCoding=[
    {
        langName:"java",
        langextenction:"java"
    },
    {
        langName:"cpp",
        langextenction:".cpp"
    },
    {
        langName:"python",
        langextenction:"py"
    },
]

myCoding.forEach( (item)=>{
    //console.log(item.langName);
})

//
let mynum=[1,2,3,4,5,6,7,8,9]

const newnums=mynum.forEach( (num)=>{
    return num>4

})
//console.log(newnums) // says undefined
// so we can use filter
const newnums1=mynum.filter( (num)=>{
    return num>4

})
console.log(newnums1);

// so if still if u want to use foreach
//then
const dummyarray=[]
mynum.forEach( (dn)=>{
    if (dn>4) {
        dummyarray.push(dn)
    }

}) 
console.log(dummyarray);

// use of maps in place of filters
const myNumbers=[1,2,3,4,5,6,7,8,9,10]

const result=myNumbers.map( (num)=>{
    return num+1
})
console.log(result);

//we can also do chaining i.e map->map->filter etc i.e nesting
const ans=myNumbers
            .map( (num)=>(num*10))
            .map( (num)=>(num+1))
            .filter( (num)=>(num>40))

console.log(ans);

// now we will study abput reduce
const meranumber=[1,2,3]

const total=meranumber.reduce( function(acc,currentvalue) {
    console.log(`acc value is ${acc} and currentvalue is ${currentvalue}`  );
    return acc+currentvalue
},0) //this zero is acc initial value

console.log(total);

//we can write above in arrow function too
const total1=meranumber.reduce( (acc,currentvalue)=>(acc+currentvalue),0)
console.log(total1);

const shoppingcart=[
    {
        item:"java course",
        price:999
    },
    {
        item:"py course",
        price:1999
    },
    {
        item:"mob dev course",
        price:2999
    },
]

const shoppingcarttotal=shoppingcart.reduce( (acc,shoppingitem)=>(acc+shoppingitem.price),0)
console.log(shoppingcarttotal);