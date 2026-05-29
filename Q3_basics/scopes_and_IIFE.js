//{} -> inside this is one scope
//function -> inside this is a block scope
//then whatever outside this is a global scope

var a =22

if(true){
    var a = 33
    const b = 8
    let c = 9
}

//the problem with using var is it can be access outside the block scope but in fn scope it is locked in
// in the given example var a can be access outside the scope
//let and const can not be access outside the block and fn scope

 function one(){
     const aa = 22
    function two(){
         var a = 33
         const b = 8
         let c = 9
         console.log(aa) // you can access variable of outer scope
     }
     two()
     console.log(aa)
 }
     one()
     //you can not access variable of inner scope
     //console.log(aa)
    // console.log(b)

    //same example over here
if(true){
    const user = "pro"
    if(user === "pro"){
        const website = "github"
        console.log(user + website)
    }
   // console.log(website)
   //it can not be access outside the scope
}    
//console.log(user)


const addTwo = (num) => num + 2 // this num can only be used here

addTwo(5)

// if you have written the call first for the const declared function first
// it wont work
// Hoisting is JavaScript's default behavior of lifting function and variable declarations to the top of their scope during the compile phase before execution.

// Traditional functions (function ordinary() {}) are fully hoisted, meaning you can safely call them before they appear in your code.

// Functions assigned to variables (const addTwo = ...) are not accessible before their line runs because they sit in a "Temporal Dead Zone."


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//this keyword

const user = {
    name: "pro_coder",
    rating: 3000,
    logRating: function(){
        console.log(this)
        console.log(this.rating)
    }
}
// this keyword gives the whole obj when you try to print it out

user.logRating()
//this keyword points to the current obj
user.name = "newbie_coder"
user.logRating()
//that means it can be changed when we change the obj


//in node environment the current context is empty
//in browser the current context is window
//earlier the js run only on browser but now it is also run on node
console.log(this)

//inside a function even if you do use this keyword
function mm(){
    console.log(this)
}
mm()
//In a standalone, normal function, this refers directly to the Global Context.

const blabla = function(){
    let jn = "just nothing"
    console.log(this.jn)
}

blabla() 

//Because the global environment doesn't know anything about a variable called jn hidden
// inside your function, this.jn comes up empty-handed and returns undefined


// const jh = () => {
//     let jn = "just nothing"
//     console.log(this.jn)
// }

//jh()

//implicit return of function
//const sum5 = (num,num2) => num + num2
 
//const sum5 = (num,num2) => (num + num2)

// const sum5 = (num,num2) => ({ name: "ss"})
// that means you can even return an object but the catch is that it must be wrapped inside ()

//console.log(sum5(5,5))


// then for arrays  there's for each for apply sm yo every element
const myArray = [1,2,3,4]

myArray.forEach((element) => {
    console.log(element)
})

//normal syntax of forEach is arrayNAme.forEach()


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//from the previous example we saw that function is wrapped inside () of forEach
//now we will see IIFE


//IMMEDIATE INVOKING FUNCTION EXPRESSION
//("this is for fn declaration")("this is for fn call");"; is a must to prevent misunderstandings"
// function(){console.log("hello")}();


(function(){console.log("hello")})();


//semicolon is needed to make distinction, save from global scope pollution preventation
//we removed the fn name in the call
//the fn is called immediately
//we can do the same thing with arrow fn

((name) => {
    console.log(name)
})('mario');

//passing arguments is same as always