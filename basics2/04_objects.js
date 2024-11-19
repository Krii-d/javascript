// singleton

//const tinderUser =  new Object()

const tinderUser = {}
tinderUser.id="123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false 
//console.log(tinderUser);

const regularUser = {
    email : "user@gmail.com",
    fullname : {
        firstname : "krishma",
        lastname : "deoju"

    }
}
//console.log(regularUser.fullname.firstname);


//combine objects
const obj1 = { 1: "a" , 2: "b"}
const obj2 = { 3: "a" , 4: "b"}
const obj4 = { 5: "a" , 6: "b"}


//const obj3 = Object.assign({},obj1,obj2,obj4)
//const obj3 = {...obj1,...obj2,...obj4}  //spread operator

//console.log(obj3);

//data from database
const users = [
    {
        id : 1,
        email : "krishma@gmail.com"
    },{
        id : 1,
        email : "krishma@gmail.com"
    },{
        id : 1,
        email : "krishma@gmail.com"
    },{
        id : 1,
        email : "krishma@gmail.com"
    },{
        id : 1,
        email : "krishma@gmail.com"
    },
]

//console.log(users[1].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));