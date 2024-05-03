let fruits = [ 'banana','mango'];

function add(a) {
   
    if (fruits.includes(a)){
        console.log("Its Already Exists")
      
    }
    else{
        fruits.push(a);
         console.log(fruits);
         console.log(a +' '+ 'Added Sucessfully')
    }
}
add('grapes')
add('grapes')



function remove(a){
    let fruits = ['grapes'];
    if(fruits.includes(a)){
        console.log("Its Already Exists")

    }
    
//      if (a ==fruits[0]){
//         fruits.pop();
//      console.log(fruits);
//          console.log(a+' '+ ' Removed Sucessfully')

// }

    else{
        fruits.pop(a);
        console.log(fruits)
        console.log(a+' '+ 'Removed sucessfully' )
    }

    
}
remove('grapes')
remove('grapes')



