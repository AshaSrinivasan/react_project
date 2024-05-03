// // delete 
// let data={
//     fname:'sam',
//     lname:'kumar',
//     age:30,
    
// }
// delete data.age
// console.log('data',data)

// // update
// let detail={
//     fname:'ram',
//     lname:'kumar',
//     age:30,
// }
// let data0={
//     fname:'sam',
//     lname:'kumar',
//     age:80,
    
// }
// let original=detail
// original.age='90'
// let copyobj=data0
// copyobj.age='78'
// copyobj.fname='magic'
// copyobj.mobno='9361635063'
// copyobj.email='asdf@gmail.com'
// original.city='chennai'
// original.geo ={
//     "lat": "-37.3159",
//     "lng": "81.1496"
//   }

// console.log(data0)
// console.log(detail)

// // read

// let ar=['hello','23',[10,8]]
// console.log(ar[2])

// add
let arr=[]
let idno=1;

function add(f,l,a){
    let obj={
        id:idno,
        fname:f,
        lname:l,
        age:a,

    }
    idno++

 arr.push(obj)
}

add('sam', 'kumar', '34')
add('ram', 'kumar','67')
add('sam', 'kumar', '34')
console.log(arr)

// update

function update(id,age) {
    let index=arr.findIndex(function(ele){
        return ele.id==id

    })
    arr[index].age=age
}
update(1,40)
console.log(arr)

// delete
function del(id){
    let index=arr.findIndex(function(ele){
        return ele.id==id
    })
    arr.splice(index,1)

}
del(1)
console.log(arr)


// read
let rrr= [{
    id:'idno',
    name:'sam',
    age:24
},
{
    id:'idno',
    name:'ram',
    age:24

}

]
function read(age){
    rrr.map(function(ele){
        console.log(ele.name+" "+ele[age])
    })
}
read('age')





 