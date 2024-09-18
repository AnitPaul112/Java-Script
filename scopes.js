// Global variable
const globalVariable = "I am a global variable";

function myFunction() {
    // Local variable
    let localVariable = "I am a local variable";

    console.log(localVariable); 
    console.log(globalVariable); 
}

myFunction();


// console.log(localVariable); // error
//console.log(globalVariable); //eta print hbe karon global




var c=300
if (true){
    let a=10
    const c= 30
    var b= 20  //print e 20 ei ashbe 300 dekhbe na, eshb debug er jonne var use na kori, ekhane jodi var na o likhi aisha porbe

}

// console.log(a)
// console.log(c)
// console.log(b)   // ekhane eta print hocche jar karone var use kora perar jinish. and eshb faltu variable e let const e print hoy na

function one(){
    const username= "AnimationTimeline"

    function two(){
        const website= 'YOUTUBE'
        console.log(username) //parental hoye gese, i mean etar jonno oita global

    }
    //console.log(website);

    two()
}
one()


if (true){
    const username= 'ANIT'
    if (username==='ANIT'){
        //console.log( website="anitpaul1212342")
        const website='helohelo'
        console.log(username)
    }
}


//==========interesting=================
function addone(num){
    num+1
    return num +1;
}
console.log(addone(5)) //6   jodi ei function call ta function er age likhi tao0 kaj korbe


const addtwo= function(num){                //ekhane thik variable er moddhe function store korechi.
    return num+2
}
console.log(addtwo(5)) //7              //variable e call dilei ekhane run hbe, but eta jodi function er age call dei taile kaj korbe na

