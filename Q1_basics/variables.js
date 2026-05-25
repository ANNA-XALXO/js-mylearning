/*
dont use var for block and functional scope issue
 */
const notChangable = "myName"
let canChange = "myPassword"
var canAlsoChange = "myAge"
val4 = "not_preffered"
let val5;
// non defined variables show undefined
// ; not necessary
// ctrl + slash for comment
// you can declare variable without keyword too but dont
console.log(notChangable)
//table show everything in table format
console.table([notChangable, canChange,canAlsoChange,val4,val5])
// compile and run by node address of the file