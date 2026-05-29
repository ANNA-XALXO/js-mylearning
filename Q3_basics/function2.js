function sum(...args){
    let total = 0
    for(let i = 0; i < args.length; i++){
        total += args[i]
    }
    return total
}

const sum = sum(2,3,4,5)
console.log(sum)
//here we can send several arguments
//... is called rest operator if used in a function

//suppose we set a normal parameter along with th rest parameter 
//then 
function sum2(n1,n2,...args){
    let total = n1 + n2
    for(let i = 0; i < args.length; i++){
        total += args[i]
    }
    return total
}

const sum2 = sum2(2,3,4,5)
console.log(sum2)

//after filling the first 2 variables the rest will be filled with how much left

const user = {
   name: "pro_coder",
   rating: 3000
}

   //anyObject keyword is for anyobject that exist in that code

function handObj(anyObject){
    console.log(`username is ${anyObject.user} and rating is ${anyObject.rating}`);
}   


//supposing we are calling the function with the arguments of a obj
handleobj({
user1 : "kimi",
isGood : true,
age : 19
})
//without the 2nd it was calling the first 
//but as soon as we passed arguments it stopped doing so


//we can also send a array within a function as an argument
 
const newArray = [100, 200, 300, 400]

function return2ndval(newArray){
    return newArray[1]
}

// you can either send an array or array variable in call

console.log(return2ndval(newArray))
console.log(return2ndval([1,34,56,78,90]))