// Create a new Date object
const currentDate = new Date();

// Get the current date and time

console.log(`Current Date & Time: ${currentDate.toLocaleString()}`);
console.log(`Current Time: ${currentDate.toLocaleTimeString()}`);
console.log(`Current Date: ${currentDate.toLocaleDateString()}`);
// Add 5 days to the current date
currentDate.setDate(currentDate.getDate() + 5);
console.log(`Date after adding 5 days: ${currentDate.toLocaleDateString()}`);
// Subtract 2 days from the current date
currentDate.setDate(currentDate.getDate() - 2);
console.log(`Date after subtracting 2 days: ${currentDate.toLocaleDateString()}`);
// Add 5 hours to the current time
currentDate.setHours(currentDate.getHours() + 5);
console.log(`Time after adding 5 hours: ${currentDate.toLocaleTimeString()}`);
// Subtract 2 hours from the current time
currentDate.setHours(currentDate.getHours() - 2);
console.log(`Time after subtracting 2 hours: ${currentDate.toLocaleTimeString()}`);


// Create a new Date object
const curentDate = new Date();

// Get the current date, month, and year
const curentMonth = curentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month
const curentYear = curentDate.getFullYear();

console.log(`Current Date: ${curentDate.toLocaleDateString()}`);
console.log(`Current Month: ${curentMonth}`);
console.log(`Current Year: ${curentYear}`);

let mycreateDate = new Date(2023, 7, 27, 8, 0, 32);
mycreateDate.setHours(mycreateDate.getHours() + 12); // Add 12 hours to convert to PM
console.log(mycreateDate.toLocaleString());


const newtDate = new Date("2023-01-14");
console.log(newtDate.toLocaleString());

let myTimeStamps= Date.now()
console.log(Math.floor(myTimeStamps/1000));  // mili seconds e pabo shob .1000 diye vag diye seconds e nilam. To compare actually ke age ke pore.
console.log(newtDate.getTime());

