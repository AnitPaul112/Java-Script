const name= 'Anit'
const repoCount=50

console.log(name + repoCount + " Value");  //not recomanded
console.log(`Hello my name is ${name} and my repo is ${repoCount}`);

//new type of string impliment

const newname= new String("Paul-Anit-urlking")
console.log(newname[1]);   //easily I can indexing it and impliment it in a nice way
console.log(newname.length);
console.log(newname.toUpperCase());  // jehetu eta func tai hocche () use korte hbe
console.log(newname.toLowerCase());
console.log(newname.indexOf('a'));  //indexing
console.log(newname.charAt(2));  //same as indexing ashole, {} diye lekhleo ja emne charat dileo tai

//const rename = newname.slice(0, 2);  //index slicing
//console.log(rename);

const reename = newname.substring(0, 2);  // another type of slicing
console.log(reename);

const url= 'https://Anit.com/Anit%20Paul'
console.log(encodeURI(url));  //encoding
console.log(decodeURI(url));  //decoding

console.log(url.replace('%20', '-'));
console.log(url.includes('Sundar'));
console.log(url.includes('Anit'));

console.log(newname.split('-'));  //how to split in string

