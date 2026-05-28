//function is a callable code block


//in js we dont have to write the return type
function Sum(n1,n2){
    //let n = n1 +n2
    //return n
    //but write shorter one
    return n1+n2
}
//you have to assign the function to a variable if you are returning dm
const sum = Sum(2,3)
console.log(sum)


function sum1(a,b){
    console.log(a+b)
}
//and the decide when different type of data types are sent through argument
sum1(2,"4")


//we can also give a default value to the parameter
function user(name="local_user"){
    if(name === undefined){
        console.log("please enter a name")
        /*if we dont add return here then the next code bit in
        function will be executed and it will print undefined
        */
        return
    }
    return `${name} is a good coder`
    //returning a string to directly go inside console.log for printing
}
console.log(user("pro_coder"))
console.log(user())