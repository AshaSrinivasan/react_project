// ...Example for Syncronized...

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)


// ...Example for Asyncronized...

console.log(1)
console.log(2)
setTimeout(()=>{
    console.log(3)
},2000)
console.log(4)
console.log(5)
setTimeout(()=>{
    console.log(6)

},4000)




// ...Example for Constractor funtiovar ...

// let count=2
// let examplepromise=new promise(function(resolve,reject){
//     if ( count===1){
//         resolve('sucessfull')
//     }
//     else{
//         reject('Failed')
//     }
// })
// console.log(examplepromise)



// ...Example for setintervel...

// setInterval(()=>{
//     console.log(Math.random())
// },1000)


// for ( let i=0;i<20;i--){
// setInterval(()=>{
//     console.log(i)
// },8000)
// }