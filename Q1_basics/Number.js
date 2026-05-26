const a = 110
console.log(a)
//you can create no. obj too
const num1 = new Number(300)
// numbers also have associated fn with them just like string
console.log(num1.toString().length)
console.log(num1.toFixed(1))
// show decimal pts after a given no.
const floatnum = 123.456789
console.log(floatnum.toPrecision(4))
// set precesion upto that no.
const biggg = 10000000000
console.log(biggg.toLocaleString('en-IN'))
//set commas like in the indian system


//------------MATHS--------------------//
console.log(Math)
//print global math obj
console.log(Math.abs(-4))
//give absolute value
console.log(Math.ceil(53332.0001))
//show the next int if the no. is slightest bit bigger than current int
console.log(Math.floor(5.9))
//no matter how big the no. is it will bring it will chop of the decimals
console.log(Math.min(9,6,3,1,6,7,8,4))
//show the minimum
console.log(Math.round(3.5))
//simple round off


//generate random no. btw 0-1
console.log(Math.random())
//no. btw 1-10
console.log((Math.random())*10 + 1)
//no. btw a limit
const min = 100 
const max = 999
console.log(((Math.random())*(max - min + 1)) + min)

