const a = 2
const b = 3
// js work differently on where its running
let negA = -a
console.log(negA)
 console.log(a+b)
 console.log(a*b)
 console.log(a**b)
 console.log(a-b)
 console.log(a/b)
 console.log(a%b)
 let str1 = "something "
 let str2 = ",something elsee"
 console.log(str1 + str2)
 console.log(1 + "2")
 console.log("1" + 2)
 console.log("1" + 2 + 2) // str first so str will be written
 console.log(1 + 2 + "2") // str last so no. get summed
 // just ecma thing
let num1,num2,num3
 num1 = num2 = num3 = 2 + 2
console.log(3+5%6*60)
//better than just write several brackets
console.log((3+5)%(6*60))
//+ sign forces boolean conversion to num
console.log(+true)
console.log(+"")
console.table([num1,num2,num3]) 
let showInc = 1
showInc++
//prefix and postfix
console.log(showInc)