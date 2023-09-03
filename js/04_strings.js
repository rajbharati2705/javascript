const name = "Raj"
const repo = 50;
console.log(name+repo+"value"); // old way to wrie
//instead write this way i.e back ticks
console.log(`Hello everyone my name is ${name} and my repo count is ${repo}`);

//another way to make string 
const gameName= new String("Raj Bharati")
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.substring(0,5));
console.log(gameName.slice(-9,7));

//trim
const newString="   raj   "
console.log(newString);
console.log(newString.trim()); //removes spaces

//replace
const url="www.rajbharati.com%20course"
console.log(url.replace('%20','-'));

const name1="raj-bharati-visshu-mohit"
console.log(name1.split('-')); // it will return an object with array type
//let us see how                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
const nameobj=name1.split('-')
console.log(nameobj[1]);