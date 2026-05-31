const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach((item) => {
    console.log(item)
    //return item
    //the commented part will give undefined if executed
})
console.log(values)


const  myNumb1 = [1,2,3,45,6,7,8]

const myNumb2 = myNumb1.filter((num) => {
    return num > 5
})

console.log(myNumb2)

//so as we can see filter will return stuff

const myNumb3 = []

myNumb3.forEach((num) => {
    if(num > 5){
        myNumb3.push(num)
    }
})
console.log(myNumb3)
//we can push no. in through this method

const book = [
    {title: "Harry Potter",
    author: "JK Rowling",
    year: 1997},
    {title: "Lord of the Rings",
    author: "Tolkien",
    year: 1954},
    {title: "The Hobbit",
    author: "Tolkien",
    year: 1937},
    {
        title: "The Lord of the Rings",
        author: "Tolkien",
        year: 1954
    }
    ]

    let userBook = book.filter((bk)=>bk.author === "Tolkien")

    userBook = book.filter((bk) => { return bk.year < 2000 && bk.year > 1900})
    //since we added {} here we need return otherwise it will give undefined
    console.log(userBook)


    //-------------------------------------------------------------------------------------------//

    const myNumb4 = [1,2,3,45,6,7,8]
  
    const myNumb5 = myNumb4.map((num) => {
        return num * 2
    })
  
    console.log(myNumb5)

    //maps will also give undefined if coded inside {} and without return


    //map chaining 
    //value within 1st map is used for that specific iteration of 1st map
    //we can chain as many map as we want and add filters too
    //filter return on true / false basis
//     Filter: Think of it as a "Security Guard." If the condition is true, the item stays.
//      If false, it's kicked out. The array might get smaller.

// Map: Think of it as a "Transformer." It takes every item and changes it into something else.
//  The array always stays the same length.


    const myNumb6 = [1,2,3,45,6,7,8]
  
    const myNumb7 = myNumb6.map((num) => {
        return num * 2
    }).map((num) => {
        return num * 2
    }).filter((num) => {
        return num > 10
    })
  
    console.log(myNumb7)




    //.reduce()

    //in this we can functionally reduce our data
    //we can even use it to get the sum of all the elements in an array

    const myNumb8 = [1,4,5,7]

    const mytoatl = myNumb8.reduce((total,num) => {
        console.log(`acc: ${total}, num: ${num}`)
        return total + num
    },9)
    //what we send in the ,9 is our initial value
    //we can change from 9 to any no.
    console.log(mytoatl)


    //we can even use it to get the min or max value in an array

    //we can write it in shorter way through arrow function

    const myTotal1 = myNumb8.reduce((total,num) => total + num,0)
    console.log(myTotal1)


    //we can also use reduce in an array of objects

    const shopping = [
        {
            name: "jsCourse",
            price: 999
        },
        {
            name: "pythonCourse",
            price: 9999
        },
        {
            name: "cppCourse",
            price: 99999
        },
        {
            name: "javaCourse",
            price: 999999
        }
    ]

    const priceToPay = shopping.reduce((total,item) => {
        return total + item.price
    },0)
    console.log(priceToPay)