const a = 2
const b = 3
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b)
console.log(a!=b)
// works for compatible str and int 
console.log("224">8447)
console.log(23>"55")
//dont ever do null cmp
console.log(null>0)
console.log(null>=0)
console.log(null==0)
//cause its in consistent with result
//dont ever do undefined cmp
console.log(undefined>0)
console.log(undefined>=0)
console.log(undefined==0)
//cause its in consistent with result
//there's also a thing called strict cmp 
// rep. with ===
console.log(a===b)//that is false 
//similiarly
console.log("002"=== 0o2)// will result in false
//but 
console.log(0o2===0o2)//will give truru
//so in js basically writing 0 in front means octal so
// to reduce confusion writing o is necessary to make a 
// distinction
