const email = []
//const email = ""
if(email){
    //the empty email means a falsy 
    console.log("we have email")
}else{
    console.log(`we dont have email`)
}


// falsy
//false , 0 , -0 , Bigint 0n , "" , null , undefined, NaN


//truthy value
//"0", "false", " ",[], {} , function(){}

if(email.length===0){
    //this will print as 0 === 0
    console.log("array empty")
}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    //creates an array of emptyObj keys then check if it equal to 0
    console.log("obj empty")
}

//almost same work as previously



//fun fact 

//false == 0
//-> true

//false == ''
//->true

//0 == ''
//->true

//Nullish coalescing operator (??) : null undefined (used for these)

let val1;
//val1 = 5 ?? 2 (the first value will be assigned)
//but if there is some fault in the first value then 
//val1 = null ?? 3
//then this operator become useful and the 2nd value is assigned
//val1 = undefined ?? 12

val1 = null ?? 45 ?? 89

// summary of what will happen is 45 will be assigned

//but dont get confused with this and ternary operator



//ternary operator

//condition ? true : false 

 const giver = true
giver ? console.log(`this person is a giver`) : console.log(`this person is not a giver`)
