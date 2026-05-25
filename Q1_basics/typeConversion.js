const name = "mario"
const age = 30
const isSmart = true
 
/* converted no. with incompatible datatype may 
 give type as a no. but in all actuality it is just NAn
 so better be careful to double check
 */
/*
for numb conversion 
true = 1
false = 0
compaatibile string = numb
non str = Nan
*/
/*
for str conv
int = string int
 true = "true"
 false = "false"
 */
/*
for bool conv 
1 = true
0 = false
str = true
empty sr = false
*/
let nameNumb = Number(name) // Nan
let nameBool = Boolean(name)  // true
let whatIsIt = Boolean("")   // false
 
console.table([nameNumb, nameBool, whatIsIt])
console.table( [typeof nameNumb,typeof nameBool, typeof wharIsIt]) 
 
// change the variable as it is working in the same variable

let ageStr = String(age)  // just in str
let ageBool = Boolean(age) // true for non zero

console.table([ageStr, ageBool])
console.table([typeof ageStr , typeof ageBool])

let SmartStr = String(isSmart) //
let SmartNumb = Boolean(isSmart) //

console.table([SmartStr,SmartNumb])
console.table([typeof SmartStr, typeof SmartNumb])
