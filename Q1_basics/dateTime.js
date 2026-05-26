//date
// you can fetch current date with the date obj in js
const currDate = new Date()
// creating a date obj
console.log(currDate)
//this one is not so pleasing to eyes 
// so 
console.log(currDate.toString())
// show day date time in 24hr format and even timezone
console.log(currDate.toDateString())
// only day date
console.log(currDate.toLocaleDateString())
// only date



const thisDay = new Date(2000, 0, 31,12,3,4,4)
// yyyy,mm( 0 indexing), dd, hr, min, sec, milisec
console.log(thisDay)//normal date in js
console.log(thisDay.toDateString())



//you can also initialise the date obj while passing a string representing date
const nowDate = new Date("09-23-2000")
//mm-dd-yyyy format
console.log(nowDate.toDateString())



let myTime = Date.now()
//now-> get the no. of milisec from 1 jan 1970 till now
//generally used to pick who is the first to do sm in a site
 
//getTime ->time
//getDate ->date
//getDay ->day
//getMonth -> month with 0 based indexing
console.log(myTime)
console.log(thisDay.getTime())
console.log(`${Math.min(myTime,thisDay.getTime())==myTime?"current time":"then time"} came first`)

console.log(Math.floor(Date.now()/1000))// to get time till sec

//we can format how we display the date and time
 
console.log(thisDay.toLocaleString('default',{weekday:"narrow"}))
//default means the language , narrow means letter of the day