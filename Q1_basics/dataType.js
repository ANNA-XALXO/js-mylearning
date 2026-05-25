//two type of data
//primitive 
// string, number , boolean , null, undefined, BigInt, symbol
const id = Symbol('123')
const otherId = Symbol('123')
console.log(id===otherId) // give false as
// two idn symbol never ever equals
//others are somewhat similiar to other languages

//non primitive
//object, function, array
//array
const teaList = ["tealeaves","milk","sugar","spices","water"];
//obj
const topper = {
    name : "damien",
    age: 18,
    isTopper: true
}
const a = 9 
const b = 2

// func syntax
const sumTwo = function(a,b){
    console.log(a+b)
}
// first write the func then call in js
sumTwo(a,b)
//null, array, obj are obj are what they are
//js is dynamically typed lang
//means in runtime you assign the data type, during compile we dont

