const score=400
console.log(score);

const balance=new Number(600) //exciplitely u say it is a number dont store anything else except number
console.log(balance);
//can convert to string
console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toPrecision(2));

// to find numbers of zeros
const hundreds=400000000
console.log(hundreds.toLocaleString('en-IN'));

//*******************Maths */
console.log(Math.abs(-1))

// imp 
console.log(Math.random()); // it will give value always between 0 and 1

// to give 1 digit value
console.log((Math.random()*10)+1); //*10 to move one decimal right,
// +1 because if 0 then there will be problem, if 0 then it will become 1

//to decimal to floor
console.log(Math.floor((Math.random()*10))+1);

// to find between min and max
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min)+min));