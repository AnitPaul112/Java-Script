const score= 400
console.log(score);

const newNumber= new Number(500)
console.log(newNumber);  // I can't finf the len of number. jodi len ber korte hoy string e convert kore thn len jante hbe
console.log(newNumber.toString().length);
// console.log( newNumber.lenght);
console.log(newNumber.toFixed(2));  // 2 ta decimal point porjonto dekhabe
const exNumber = 233.78
console.log(exNumber.toPrecision(4));  // 3 mane hocche 234 karon purnoshongkha, ar jodi 4 dei tahole porer doshomik e mil rekhe dekhabe ja dekhanor 

const hundreeds= 10000000
console.log(hundreeds.toLocaleString('en-BD'));


//++++++++++++++++++MATH++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4)); // absolute value
console.log(Math.PI);
console.log(Math.ceil(4.5));  // ceil ase floor ase round ase
console.log(Math.floor(4.5));
console.log(Math.round(4.5));
console.log(Math.pow(2, 3));  //power
console.log(Math.sqrt(64));  //square root
console.log(Math.min(1,2,3,4,5,6,7,8,9,10));
console.log(Math.max(1,2,3,4,5,6,7,8,9,10));
console.log(Math.random());  //random number
console.log(Math.floor(Math.random()*10+1));  //random number between 1-10

const min=10
const max = 30
console.log(Math.floor(Math.random()*(max-min+1)+min));  //random number between 10-30
