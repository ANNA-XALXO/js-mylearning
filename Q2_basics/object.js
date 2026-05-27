//object literal
const Symbol1 = Symbol("peaceSign")
const user1 = {
    name : "pro_gamer",
    age: 5,
    isTopper: true,
    skills: ["fps","racing","stratergy"],
    "greeting": "hi!!!",
    [Symbol1]: "peaceSign"
    //if you forget that [] then it'll be similiar to string
    // symbol is a unique idn
}

console.log(user1.name)
//dot notation
console.log(user1["name"])
//[] notation
console.log(user1["greeting"])
//in case of string we use [] notation
console.log(user1[Symbol1])
//in case of symbols we use [] notation

user1.greetings = function(){
    console.log("hello my dearest user")
}
//we just created a function named greetings in the user1 obj
user1.greetingsSpecial = function(){
    console.log(`hello my dearest user ${this.name}`)
}
console.log(user1.greetings())
console.log(user1.greetingsSpecial())



user1.age = 80
//you can change their value
console.log(user1.age)
//but if you freeze
Object.freeze(user1)
user1.age = 25 //no error would be displayed here however...
//you can no longer change the value inside of that obj
console.log(user1.age)

//**************************************************************************************//
//singleton object 
 const linkedInUSer = new Object()
//only one instance of this obj will be created

//non singleton object
const instaUser = {}
//many instances may come about

console.log(instaUser)
console.log(linkedInUSer)
//here they both are empty

instaUser.id = "pro_gamer123"
instaUser.name = "pro_gamer"
instaUser.isLoggedIn = true

linkedInUSer.id = "solo_gamer123"


console.log(instaUser)
console.log(linkedInUSer)

const gameUser = {
    email: "new@gmail.com",
    username: "pro_gamer111",
    full_name: {
        user_full_name: {
            first_name: "pro_gamer",
            last_name: "new_id"
        }
    }
}
// you can keep on adding obj inside a obj

console.log(gameUser.full_name.user_full_name.first_name)
//now if you're not so sure if sm key exist then put a ? and move ahead with the given syntax
console.log(gameUser?.full_name?.user_full_name?.first_name)

//merging objects

const gamers1 ={ 1:"pro_gamer", 2:"newbie_gamer"}
const gamer2 ={ 3:"elite_gamer", 4:"legend_gamer"}
const gamer3 ={ 5:"casual_gamer", 6:"master_gamer"}

//if we do
const allGamer1 = {gamers1,gamer2}
//then we'd get obj inside obj in 
// format {{},{}}
//that is not what we want so


const allGamers = Object.assign({},gamers1,gamer2,gamer3)
//here actually the stuffs in other obj get copied inside the 1st obj you put inside assign()
//so it is a good practice to put {} for assign
console.log(allGamers)

//to get obj in spread out format like the previous assign obj mtd
const allGamer2 = {...gamers1,...gamer2,...gamer3}
console.log(allGamer2)

//creating an array of object
const user = [
    {id: 123 ,email:"user1@gmail.com"},
    {id: 133 ,email:"user2@gmail.com"},
    {id: 155 ,email:"user3@gmail.com"}
]
//accessing the obj in the array
console.log(user[1].email)
console.log(instaUser)

//you can take our array of key,value or pairs
console.log(Object.keys(instaUser))
console.log(Object.values(instaUser))
console.log(Object.entries(instaUser))

//it is userful if we want to find obj with specific entery
console.log(instaUser.hasOwnProperty("isLoggedIn"))