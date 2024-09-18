const user = {
    name: 'John',
    age: 30,
    welcomemessage: function(){
        console.log(`welcome ${this.name}`)       //this function
        console.log(this);  // function ta kono object er moddhe na thakle this er value hobe global object
    }
}
user.welcomemessage()
user.name='Anit'         //current context change kore disi
user.welcomemessage()
console.log(this);



// function coffee(){
//     console.log(this);
// }
// coffee()

const cha= ()=>{
    let username= "ANIT"
    console.log(this);

}
cha()


// const addtwo= (num1,num2) => {

//     console.log(num1+num2);
// }
// addtwo(4,5)


const addtwo = (num1, num2) => num1 + num2;      // implicit return, etao ekta function but easy way, arrow

console.log(addtwo(4,5))