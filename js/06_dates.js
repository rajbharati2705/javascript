//dates

let mydate=new Date
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

//creating own date
let myowndate=new Date(2023,0,28) // here 0 means jan
console.log(myowndate.toLocaleString());

//another way 
let myowndate2=new Date("2023-01-25")
console.log(myowndate2.toLocaleString());

//get present time
let newtime=Date.now()
console.log(newtime);// this will give time in millisec from 1 jan 1970
// to get in seconds divide by 1000 to remove decimal add math.floor
console.log(Math.floor(newtime/1000));

let mynewdate=new Date()
console.log(mynewdate.getMonth()+1); // +1because month starts with 0
