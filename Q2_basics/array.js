//Array -> collection of similiar data type
let arr = [4,5,6,7,8,9]
console.log(arr)

//another way of initialisation
const arr1 = new Array("mario", "sonic", "crash")
console.log(arr1)

console.log(arr[0])
//have 0 based indexing

console.log(arr.length)
//console.log(arr[arr.length-1])
//printing last element

//array follow shallow copy [there also exsist deep copy in js]
// so if you change the element in the array it will also change in the original array

arr.push(10)//add element at the end
arr.push(8)
console.log(arr)
arr.pop()
console.log(arr)

arr.unshift(1)//add element at the start
console.log(arr)
arr.shift()//simply shift the elements left so the first element is removed
console.log(arr)

console.log(arr.indexOf(8))
//print the index of the element

console.log(`8 is ${arr.includes(8)?"present":"not present"} in the array`)
//check if the element is present

const newArr = arr.join(" ")
console.log(newArr)
//convert array to string
//major diff is new one is string previous is an array

const newArr1 = arr.reverse()
console.log(newArr1)
//reverse the array

const newArr2 = arr.sort()
console.log(newArr2)
//sort the array

//so there are a bunch of things you can do

//slice and splice

const newArr3 = arr.slice(1,3)
console.log("Sliced ",newArr3, "original array ",arr)
//slice -> array idx 1 to 3 is chosen
// but this doesnt remove the elements from original array

const newArr4 = arr.splice(1,3)
console.log("Spliced ",newArr4, "original array ",arr)
//splice -> array idx 1 to 3 is chosen inclusive of 3
// but this removes the elements in original array



