//obj, destructuring, json


const product = {
    productname: "pizza",
    price: 400,
    toppings: true
}
//you can use dot notation
console.log(product.productname)
//or 
const {productname, price, toppings} = product
//tells to extract the keys
console.log(productname)
console.log(price)
console.log(toppings)

// or you can make a alias for the keys
const {productname:Name, price:Price, toppings:Toppings} = product
console.log(Name)
console.log(Price)
console.log(Toppings)

//here is an example of where obj destructuring is useful
//here we take in object property as a parameter 
//instead of the whole obj
//this is a optimised function
// const navbar = ({product}) => {

// }
// navbar({product : "chesse_pizza"})


//for json
//json => javascript object notation
//json => object literal (but slightly different)
//json => key value pairs in ""
//there is no variable designation
//its just data flowing in
// {
    // "productname": "chesse_pizza",
    // "price": 400,
    // "toppings": true
// }

/*[
    {},
   {},
    {}
]*/
// sometimes the data is in array format 
// it may even have more array of obj inside 


//understanding obj is useful for when we make a interactive website