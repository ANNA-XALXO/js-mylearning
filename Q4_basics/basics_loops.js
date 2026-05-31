//for

for(let i = 0; i< 10 ; i++){
    if(i==5){
        console.log(`5 is the best no.`)
    }
    console.log(`${i}`)
}

// you can nest one loop within other 
for(let i = 1;i<= 10; i++){
    for(let j = 1; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

//there is no arrray out of bound error in the for loop
//it'll print undefined if the index is out of bound

let myArray = ["mario", "sonic", "crash", "megaman"]

console.log(myArray.length)

for(let i = 0; i <= myArray.length; i++){
    //here this will print undefined
    //in the last iterations
    console.log(myArray[i])
}

for(let o = 1; o<10 ; o++){
    if(o == 5){
        console.log(`5 is the best no.`)
        continue
        //continue will skip the current iteration
    }
    if(o == 8){
        console.log(`8 is gonna be the last no.`)
        break
        //break will break the loop
    }
    console.log(`${o}`)
}

//--------------------------------------------------------------------------------------------//



//while

let myArr = ["mango","apple","banana"]
let i = 0
while(i<myArr.length){
    console.log(myArr[i])
    i++
}

let score = 32

do {
    console.log(`your score is ${score}`)
    score++
} while (score<31)

//do while loop will run the loop at least once



//----------------------------------------------------------------------------------------------//


// for of 

//["" "" ""]
//[{} {} {}]

//for of loop is used to iterate obj in broader sense

const arr1 = [1,2,3,4,5]

//array is an obj in js

for(const num of arr1){
    console.log(num)
}

const greet = "hello world"

//we can also use for of loop on string (they are obj)

for(const char of greet){
    console.log(char)
}

//---------------------------------------------------------------------------------------------//


//Maps

const map = new Map()

map.set("IN", "India")
map.set("US", "United States")
map.set("FR", "France")

console.log(map.get("IN"))

//map hold unique key - value pair in the ordered fashion as they were set
//they are similiar to obj

//we can iterate them through for of loop 



//for of loop


for(const [key, value] of map){
    console.log(key, value)
}

//you can not iterate obj with this loop

const myObj = {
    name: "mario",
    age: 30
}

// for(const [key, value] of Object.entries(myObj)){
//     console.log(key, value)
// }

//this structure of iterations wont work here

//so you have to use for in loop




//for in 

for(const key in myObj){
    console.log(key, myObj[key])
}

//arrays can be iterated similiarly

//as array are obj with keys as index

const language = ["english", "hindi", "spanish"]

for(const key in language){
    console.log(key, language[key])
}

//we cant iterate through for in case of maps


// for...of: Used for Iterable objects (Arrays, Strings, and Maps).

// for...in: Used for Enumerable properties (Plain Objects {} to grab their keys)

// If you try to run a for...in loop over a Map, it won't crash, but it will print out
//  absolutely nothing. This is because Map properties are internal and not marked as 
//  "enumerable," which leaves for...in completely blind to them


//backfunctiom means you dont have to give function name
//since its parameters are array you need to give a variable to hold values

//for each loop


 const arr3 = [1,2,3,4,5,6,8,9]
arr3.forEach( (arr3) => {
    return arr3[1]
})
//you can either use arrow function or


arr3.forEach( function (val){
    console.log(val);
})


function printer(item){
    console.log(item)
}
arr3.forEach(printer)
//here you have to give reference of the function not call the function itself
//forEach never return anything
//so it gives undefined


//you can also take several info from the array
arr3.forEach((item,index,arr3) => {
    console.log(item,index,arr3)
})

//you can use for each loop effectively with objects

const myObjArr = [{
    name: "mario",
    age: 30
},
{
    name: "luigi",
    age: 40},
 {
    name: "peach",
    age: 50
   } ]


   myObjArr.forEach((item) => {
       console.log(`${item.name} is ${item.age} years old`)
        //or console.log(item.name)
   })

   //here we combined several stuff together to iterate elements of an array of obj