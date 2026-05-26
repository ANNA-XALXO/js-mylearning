// String is  a obj in js
let name = "mario"
let name_last = 'sonic'
//js doesnt care abt specific quote mark
console.log(name)
console.log(`my name is ${name_last} nice to meet ${name}`)
//str interplotation is more preffred than variable printing
const user1 = new String(' pro_gamer')
//str obj declaration
// can perform several useful fn
console.log(user1.charAt(1))
console.log(user1.trim())
console.log(user1.slice(3,6))
console.log(user1.replace('pro_gamer', 'newbie_gamer'))
//small part can also be changed
console.log(user1.__proto__)
console.log(user1.substring(2,5))
console.log(user1.substring(-8,3))
//for negative indexing the substr start frm the end
console.log(user1.includes("mario"))
console.log(user1.split('_'))