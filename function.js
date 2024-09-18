function saymyname() {
    console.log('A')
    console.log('N')
    console.log('I')
    console.log('T')
    
}
saymyname()

// Adding two numbers
function addNumbers(num1, num2) {
    // let sum = num1 + num2;
    // return sum;\
    return num1 + num2;   //another way
}

let result = addNumbers(5, 10);
console.log(result);

function isLoggedIn(status, username) {
    if (status === 'logged in') {
        return (`You are logged in as ${username}`);
    } else {
        return 'You are not logged in.';
    }
}

// let loginStatus = 'logged in';
// let username = 'Anit';
console.log(isLoggedIn('logged in', 'Anit'));

loginStatus = 'logged out';
console.log(isLoggedIn(loginStatus));


//shopping cart add
function CalculateCartPrice(val1,val2,...num1){      //rest or spread operator, array te add korbe. edike eta rest er kaj kortese.
    return num1
}
let result1 = CalculateCartPrice(100,200,300,4000);
// console.log(result1);







//how to handle object in function
const user ={
    username: "Anit",
    price: 2000,

}
function CalculateCartprice(user){
    const result= (`User name is ${user.username} and price is ${user.price}`)
    console.log( result)
}
// let result2 =
 CalculateCartprice(user);
// console.log(result2);


//how to handle a object which is in already a function
function cartaddprice(user) {
    user.username = "Anit";
    user.price = 2000;
    
    user.price += 1000;
    console.log(`Updated price for ${user.username}: ${user.price}`);
}

cartaddprice(user);

//how to handle array in a function
const items = ['laptop', 'mobile', 'watch', 'camera'];
function cartadditems(items) {
    items.push('shirt');
    items.push('pant');
    console.log(items);
}
cartadditems(items);



//scop





