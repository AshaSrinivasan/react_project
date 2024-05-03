// console.log(this)
// call,apply
let callobj = {
    fname : "sam",
    lname : "kumar"
}
let callobj1 = {
    fname : "Ram",
    lname : "kumar"
}

function getFullName(){
    console.log(`Hello ${this.fname} ${this.lname}`)
}
function getFullName1(greeting){
    console.log(`${greeting} ${this.fname} ${this.lname}`)

}
getFullName1.apply(callobj1 ,['welcome'])
getFullName.call(callobj)


// bind
let bindobj0={
    fname:'Hebsiba',
    lname:'Elizabeth',
    age:'20',
    printname: function(){
        console.log(`${this.fname} ${this.lname} is ${this.age} yrs old`)
        }

    }
    let bindobj1={
        fname:'ram',
        lname:'kumar',
        age:'90',
    }
    console.log(bindobj0.printname())

    let print =bindobj0.printname.bind(bindobj1) 
    print()

    // arrow function
    let sum=(a,b) => a+b;
    console.log(sum(2,5))

    // let sum=(a,b)=>{
    //     return a*b
    // }
    // console.log(sum(2,5))

    

