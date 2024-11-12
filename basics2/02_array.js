const fruits = ["apple" , "banana" , "cherry"]
const veg = ["cauli" , "potato" , "tomato"]

// fruits.push(veg)
// console.log(fruits);
// console.log(fruits[3][0]);

const allFruits = fruits. concat(veg)
// console.log(allFruits);


//SPREAD OPERATOR

const all_fruits = [...fruits , ...veg]
//console.log(all_fruits);

const another_array = [1,2,3,[4,5,6],7,8,[6,7,[9]]]
const real_another_array = another_array.flat(1)
//console.log(real_another_array);



console.log(Array.isArray("shreeaansh"))
console.log(Array.from("shreeaansh"))
console.log(Array.from({name : "shreeaansh"}))   //gives empty string

let score1=100
let score2=200
let score3=300

console.log(Array.of (score1,score2,score3));
