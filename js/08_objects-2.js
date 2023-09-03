// object singleton--i.e use new keyword

const fbuser=new Object()       //this will create singleton object
console.log(fbuser)

const instauser={}  //this will also create object but not singleton obj
console.log(instauser)

//now let us push values in insta user
instauser.name="raj"
instauser.age="28"
instauser.loggedIn="false"

console.log(instauser);

//objects in objects
const regularUser={
    fullname:{
        userfullname:{
            firstname:"raj",
            lastname:"bharati"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

//concat three objects
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"a",6:"b"}

// const obj4={obj1,obj2} //wrong
// console.log(obj4); 

const obj4=Object.assign({},obj1,obj2,obj3) //this {} empty braces is source
console.log(obj4); 

//or we can use spread operator 
const obj5={...obj1,...obj2,...obj3}
console.log(obj5);


console.log(Object.keys(instauser));
console.log(Object.values(instauser));


/****Destructuring */
const course={
    coursename:"JS",
    courseprice:"999",
    courseinstructor:"raj"
}
console.log(course.courseinstructor); // always you cancont write this course.courseinstructor
//so

const {courseinstructor}=course
console.log(courseinstructor)

//still if u want to call courseinstructor as instructor u can

const {courseinstructor:instructor}=course
console.log(instructor);