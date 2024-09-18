//IIFE  Immediately Invoked Function Expression.

//named  iife
(function noodles(){
    console.log('DB CONNECTED');
})();  //way jodi call dite na chai, ()()  , ei semicolon ta end kortese ei code ta
//noodles()  // ar simply call dile to tai hbe


//arrow te iife use  (simple iife)
(()=>{
    console.log(`DB CONNECTED`);
})();

//arrow te iife use with variable
((name)=>{
    console.log(`DB CONNECTEDto ${name}`);
})(`ANIT`) 




// function one() {
//     console.log("ONE")
//     function two(){
//         console.log('TWO'))
//         function three(){
//             console.log('Three')
//         }
//     }
    
    
// }
// one

// function printOne() {
//     console.log("one");
// }

// function printTwo() {
//     console.log("two");
// }

// function printThree() {
//     console.log("three");
// }
// printOne()
// printTwo()
// printThree()
