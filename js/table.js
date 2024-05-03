// ...String Concatenation...

let greet=1
let user=1
console.log(greet+user)
// ..
let gre='1'
let use='2'
console.log(gre+' '+use)

// ...problem: table print using string concatenation...


let num=6;
console.log("Table of",num)
for(i=1;i<=10;i++){
    let Table=num*i
    console.log(num,'x',i,'=',Table)
}
let numb=9;
console.log("table of",numb);
for (i=1;i<=20;i++){
    let tableof=numb*i;
    console.log(numb,"x",i,"=",tableof)
}


// ...table print using Arrowfuntion...

const mutiplicationTable=(multiplyNumber,lenght)=> {
    console.log("Table of",multiplyNumber)
    for (let i=1; i<=lenght;i++){
        console.log(`${multiplyNumber} X ${i} = ${multiplyNumber*i}`)
    }

}
mutiplicationTable(7,10)


const multiply=(mulNum,len)=>{
    console.log("Table of",mulNum)
    for (let i=1;i<=len;i++){
        console.log(`${mulNum} X ${i} = ${mulNum*i}`)
    }

}
multiply(2,12)


// ...add,minus,multiple.....
function multiple(a,b){
    return(a*b)
}
function minus(a,b){
    return(a-b)
}
function add(a,b){
    return(a+b)
}
let result=add(minus(multiple(5,5),20),10)
console.log(result)

// ...problem : o/p "gg  bb"...


function occurance(word){
    for ( let i=0;i<word.length;i++){
        if (word[i]===word[i+1]){
            console.log(word[i]+word[i+1])
            }
        }
    }

occurance("abbcdefgg")

// ...task: "hello"...

function occu(word){
    for ( let i=0;i<word.length;i++){
        if(word[i]===word[i+1]){
            console.log(word[i]+word[i+1])
        }
    }
}
occu("hello")

// ...task: "letter"...

function outer(word){
    for (let i=0;i<word.length;i++){
        if(word[i]===word[i+1]){
            console.log(word[i]+word[i+1])
        }
    }
}
outer("letter")

// ...for loop: Even or Odd...

function odd_even(flag){
    console.log(flag)
    for (let i=0; i<=10; i++){
        if (flag==='even'){
            if (i%2===0){
                console.log(i)
            }
        }
        else{
            if(i%2!==0){
                console.log(i)
            }
        }
    }
}
odd_even()
