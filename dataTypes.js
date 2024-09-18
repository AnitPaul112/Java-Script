 //'use strict'; //use all js code in a new version
 
 //alert(3+3) // kaj korbe na karon amra ekhon node js re kaj korchi
 console.log('Anit');
 console.log(3*3)  //semicolon er kono pera nai

// Primitive 7 types:number, string,null, symbol,null,boolian, bigInt
// NOn Primitive(Reference type): Array, Object, Function
 // we use symbol for unique
 // object 

console.log(typeof 'Anit')
console.log(typeof null)  // js er problem
console.log(typeof undefined) // it's a type in js






// 7 Primitive types: String, Number, Boolean, null, undefined, symbol, BigInt
// 3 Non-primitive types: object, function, arrays

// Primitive Data Types
const score = 100
const scoreValue = 100.5

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 6543435456431654564n //add n at last to make it bigInt

// outputs
console.log(typeof score); //number
console.log(typeof scoreValue); //number
console.log(typeof isLoggedIn); //boolean
console.log(typeof outsideTemp); //object
console.log(typeof userEmail); //undefined
console.log(typeof id); //symbol
console.log(typeof bigNumber); //bigInt

// Non-primitive Data Types
const arr = ["ironman","thor","spiderman"]
const obj = {
    name: "Anit",
    age: 22,
}
const func = function () {
    console.log("hello world!");
}

console.log(typeof arr); //object
console.log(typeof obj); //object
console.log(typeof func); //function



//stack type, heap type
// stack type: primitive data type
// heap type: non primitive data type
//stack - copy kore just value. no reference change
let myname= "Anit"
let anothername= myname
anothername= 'Paul'
console.log(anothername);
console.log(myname);
//heap- direct location reference change
let userone= {
    email: "anitpaul139@gmail.com",
    password: 123456,
}
let usertwo=userone
usertwo.email= "paul123@gmail.com"
console.log(userone.email);
console.log(usertwo.email);