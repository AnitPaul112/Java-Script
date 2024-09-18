//Object.create  

const mysymbol = Symbol("key1")  //symbol declare korlam

const jsuser = {
    name: 'Anit',   //comma rakhte hbe, naile js object create hbena
    'Full name': "Anit Paul",
    age: 22,
    [mysymbol]: 'mykey1',
    address: "KIngpara",
    email: "king123@gmail.com",
    password: 123456,
    login: true,
    lastloguindays: ['Monday', 'Saturday']
}

console.log(Object.keys(jsuser)); // Returns an array of keys
console.log(Object.values(jsuser)); // Returns an array of values
console.log(Object.entries(jsuser)); // Returns an array of key-value pair

console.log(jsuser.hasOwnProperty("lastloguindays"));  // kono ta ache ki nai janar jonno directly ask kora

// console.log(jsuser.email);   //eta bhul poddhoti, jodi string diye likha thake tahole access korte parbo na
// console.log(jsuser['email']); //eta valo poddhoti, behind the seen shob variable gula ekekta string er moto
// console.log(jsuser['Full name']);
// //console.log(jsuser.'Full name');  // access denied
// console.log( typeof jsuser.mysymbol);  //string dibe, symbol access hynai tai
// console.log( jsuser[mysymbol]);  //symbol access korlam, tai symbol dibe

// jsuser.email='paulbhai123@chatgpt.com'
// console.log(jsuser["email"]);  //varriable access kore paltay disi 
// Object.freeze(jsuser)   //freeze kore dile ar access kore paltaile parbo na
// jsuser.email='paulbhai123@bard.com'
// console.log(jsuser["email"]);
// console.log(jsuser);


jsuser.greeting = function () {
    console.log("Hello World");
}

jsuser.greetingtwo = function () {
    console.log(`Hello JSuser,${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());


//------OBJECT PART 2-----------//
const tinderUser= {}
tinderUser.name='Anit Paul'
tinderUser.age=22
tinderUser.bio="I am a single boy"
tinderUser.hobby=['coding','gaming','reading']
//console.log(tinderUser);

const regularUser= {
    email: 'abcd123@gmail.com', 
    fullname: {
        userfullname :{
            firstname: 'Anit',
            lastname: 'Paul'
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:'a', 2 :'b'}
const obj2 = {3:'c', 4 :'d'}
//const obj3 = {obj1,obj2}  // object er moddhe object chole ashbe
//console.log(obj3);
const obj3 = {...obj1,...obj2}  // eta ekta way
console.log(obj3);
obj4 = Object.assign({},obj1,obj2) // faka set ta dile garrented je eta ekta objecvt er moddhei merge kore ashbe
console.log(obj4);

const array = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 }
];
console.log(array[0]);





//---------------------------------------------------------------------//
const course={
    name: "CSE110",
    price: "20000",
    duration: "3 months",
    mentor: "KING",
}
const{duration : dudu} =course  // ekhane duration ke dudu diye replace kore felsi
console.log(dudu);

//react er jonne ei part ta
const navbar=() => {}
navbar(companyname= 'PAul')

