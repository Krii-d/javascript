//singleton

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "krishma",   //here key i.e name is also string " name"
    age : 23,
    "full name" : "Krishma Deoju" ,
    location : " Dhulikhel " ,
    [mySym] : "mySym1",
    email : "krishma@gmail.com",
    isLoggedIn : false,
    lastLoggedInDays : ["Monday", "saturday"]
}

//console.log (jsUser.email);
//console.log (jsUser["email"]);

//console.log(jsUser["full name"]);  //if keys are written in "key" this form , use this method
//console.log( jsUser[mySym]);

//change 

jsUser.email =  "krishmadeoju@gmailcom"  //overwrite by using "="
//Object.freeze(jsUser)
jsUser.email = "krishmadeoju@chatgpt.com"
// console.log(jsUser.email);
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello js users")
}
jsUser.greetingTwo = function(){
    console.log(`Hello js users , ${this.name}`);
}

console.log(jsUser.greetingTwo());
console.log(jsUser.greeting());
