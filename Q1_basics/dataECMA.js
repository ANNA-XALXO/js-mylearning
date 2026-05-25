"use strict"; 
/*
these days no need 
 to use latest standards , catch error , stop from declaring new glob var
 */
/*
 alert wont work well  here as in browsers as browsers mainly
 are made to interact whereas git is used to build back
 stuff
*/
// code readibility matters a whole ton
let name = "mario" // string
let age = 30   // int 
let isSmart = true  // boolean
let extraLife = null // standalone
let gameover; // undefined
// two diff ways to use bigint
// it is huge but must be a int 
let nintendoStock = BigInt(99999999999)
let switchStock = 9999999999n;
// symbols are unique, used in react
console.log(typeof gameover)//undefined
console.log(typeof extraLife) // object
