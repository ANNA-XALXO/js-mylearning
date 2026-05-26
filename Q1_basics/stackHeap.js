//  stack -> primitive
//heap -> non primitive
let name = "candy"
let name2 = name
console.log(name2)
console.log(name)
name = "crush"
console.log(name2)
console.log(name)
//stack is where it is strored
let user1 = {
    name01: "pro_gamer",
    userID: "cha93#"
}
let user2 = user1
console.log(user2)
console.log(user1)
user1.name01 = "newbie_gamer"
console.log(user2)
console.log(user1)
//heap storing this data
