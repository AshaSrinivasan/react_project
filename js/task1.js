// ...Add...
let arr=[]
let idno=1;
function add(f,l,a,m){
    let result=arr.findIndex(function(ele){
        return ele.mobno==m
    })
    if (result==-1){
        let obj={
            id:idno,
            fname:f,
            lname:l,
            age:a,
            mobno:m,
        }
        idno++;
        arr.push(obj)
        arr.push(obj1)
        console.log("added suceesfully")
        }
    else{
console.log("its already exist")
        }

    
}
add('sam','kumar','30','9876545432')
add('sam','kumar','30','9876545432')
// console.log(arr)

// ...update...
function update(id,age){
    let result1=arr.findIndex(function(ele){
        return ele.id==id
    })

    if (result1==-1){
        console.log("it's doesn't exist")
    }
    else{
        arr[result1].age=age
        console.log("add")
    }
}
// update(6,45)
update(3,67)

console.log(arr)

// ...delete...
function del(f){
    let index=arr.findIndex(function(ele){
        return ele.fname==f
    })
    if (index==-1){
        console.log("it's doesn't exist")
    }
    else{
        arr.splice(index,1)
    }
}
del(5)
// console.log(arr)