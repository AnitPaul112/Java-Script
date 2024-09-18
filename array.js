const myArray =[1,2,3,4,5,6]    // array te shallow copy hoy. I mean refence o. copy dui dhoroner ekta shallow arekta deep
const myheros=["Anit", "PAul", "Antu"]
const myArray2 = new Array(1,2,3,4,5)
console.log(myArray2);
console.log(myArray[2]);

// Array methods
console.log(myArray.length);
myArray.push(7) // add another number
console.log(myArray)
myArray.pop()  // remove last element
console.log(myArray)
myArray.shift()  // remove first element
console.log(myArray)
myArray.unshift(90)  // first e element add kora
console.log(myArray)
myArray.splice(2,2)  // index 2 theke 2 ta element remove kora
console.log(myArray)

//slice and splice full topic
const myArray3 = [1,2,3,4,5,6,7,8,9,10]
const newArray = myArray3.slice(2,5)  // 2 theke 5 er ag porjonto element show korbe
console.log(newArray)
console.log(myArray3) //my array te kono change ashe nai

const newArray2 = myArray3.splice(2,5)  // 2 theke 5 er ag porjonto element remove korbe
console.log(newArray2)
console.log(myArray3) //my array te change ashe





myArray.reverse()  // reverse kora
//console.log(myArray)

const newarray = myArray.join()
//console.log(myArray);
//console.log(newarray) // array to string
//console.log(typeof newarray)


//array for nodejs react
const marvelSuperheroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Spider-Man"];
const dcSuperheroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];
//marvelSuperheroes.push(dcSuperheroes)
// console.log(marvelSuperheroes) //aray er moddhe array niye nise
// console.log(marvelSuperheroes[6][2]); //indexing
// console.log(marvelSuperheroes[6][2][2]); //indexing
const mergedArray = marvelSuperheroes.concat(dcSuperheroes);
console.log(mergedArray);   //eksathe niye nise ekta array te
console.log(marvelSuperheroes);
console.log(dcSuperheroes);

const all_new_heroes= [...marvelSuperheroes, ...dcSuperheroes]
console.log(all_new_heroes);   // shob eksathe niye spread kore dise. glass er panir example ta


const another_array = [1,2,3,4,5,[6,7,8],3,4,5,[6,7,[8,9,2]]]
let usable_another_array= another_array.flat(Infinity)  //ekhane ashole depth dite hoy. jehetu janina tai infinity diye dile ekdom deep porjonto chole jay.
console.log(usable_another_array);



console.log(Array.isArray("Anit"))  //array kina janar jonne
//ekhon convert jodi korter hoy taile:
console.log(Array.from("Anit")) 
console.log(Array.isArray(Array.from("Anit")))  
console.log(Array.from({name:"Anit"}))  //faka set dey



let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));  //this is how we can make a array from any variables.








