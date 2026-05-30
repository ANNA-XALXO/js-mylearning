//if block
//if condition true it will run

if(true){
    console.log("if block")
}

//then there is else block that run if not the if block
const isSmartt = false
if(isSmartt){
    console.log("you are a smart person")
}
else{
    console.log("you are not smart")
}


//comparision operator
// == equal to
// === strict equal to
// != not equal to
// !== strict not equal to
// > greater than
// < less than
// >= greater than equal to
// <= less than equal to


//we can send these operators in if block condtion for an expression

if(2!=="2"){
    console.log("2 number is not equal to 2 string")
}
// === is strict equals


//var have complete global scope

const score = 440
var yourscore = "average"
if(score>100){
    var yourscore = "topper"
    console.log(`your score is ${yourscore}`)// console topper
}
console.log(`user power ${yourscore}`) //console topper

//but we dont want this 
//so avoid using var

//you can write if w/o {} but unless it is for 1 line it is a bad code

const balance = 1000

if(balance>1)  console.log(`you're rich by ${balance}`), console.log("you can buy anything");

//using here a comma and semi colon is a must

//you can also construct a else if ladder

const marks = 88
if(marks > 90){
    console.log("you got A")
}
else if(marks > 80){
    console.log("you got B")
}
else if(marks > 70){
    console.log("you got C")
}
else if(marks >60){
    console.log("you got D")
}
else if(marks > 50){
    console.log("you got E")
}
else{
    console.log("you got F")
}


//you can also give multi condition in  if, if else, if else if ladder

const isSmart = true
const isKind = false

if(isSmart || isKind){
    console.log("you are smart or kind")
}
else{
    console.log("you are not smart and kind")
}

//switch case 

const food = "pizza"
switch (food){
    case "pizza":
        console.log("you like pizza")
        break
    case "burger":    
        console.log("you like burger")
        break
    case "fries":
        console.log("you like fries")
        break
    case "chicken":
        console.log("you like chicken")
        break
    default: 
        console.log("you like something else")
        break        
}

//if you forget to write break then the next case will also run
//it is called fall through 
//the only block that wont run without break is the default
//default is optional and aprovide a default value for the switch case

