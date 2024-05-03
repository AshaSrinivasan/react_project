
let arr = ['welcome', 500, false];
arr[2]=true;
delete arr[0];
console.log (arr);
let obj={fname:'suresh', lname:'raina'};
delete obj.fname;
console.log(obj);

let even='one';
let odd='two';
let hhh= even+' '+odd;
console.log(hhh);

let magic='shop';
let spring='day';
let bbb=magic+' '+spring;
console.log(bbb);

let age=12;
if (age>=18){
    console.log("eligible");
    
}
else{
    console.log("correct the age")
}


let price=200;
if (price<=50){
    console.log('better luck next time')
}
else if (price>=350){
    console.log('recieve the gift')
}
else if (price=150){
    console.log('good')
}
else {
    console.log('please purches something')
}