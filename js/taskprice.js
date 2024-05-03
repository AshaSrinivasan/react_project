let data=[
    {
        id:1,
        Name:'iphone',
        url:'file:///C:/Users/gmgopi16/Desktop/WEB%20PAGE/images/iphone.jpg',
        Quantity:1,
        price:200
    },
    {
        id:2,
        Name:'vivo',
        url:'file:///C:/Users/gmgopi16/Desktop/WEB%20PAGE/images/iphone.jpg',
        Quantity:1,
        price:400
    },
    {
        id:3,
        Name:'oppo',
        Quantity:1,
        url:'file:///C:/Users/gmgopi16/Desktop/WEB%20PAGE/images/iphone.jpg',
        price:600
    }
]
let parentElement=document.getElementById('parent');
let totalEle=document.getElementById('total');
totalCount=0;
function dataToChange(){
    for( let i=0;i<data.length;i++){
        let container=document.createElement('div');
        let imgElem=document.createElement('img');
        imgElem.setAttribute('src',data[i].url);
        let titleElem=document.createElement('h1');
        titleElem.innerText=data[i].Name
        let priceEle=document.createElement('h3');
        priceEle.innerText=data[i].price
        priceEle.style.color='green'
        priceEle.setAttribute('class','price');
        let minusBtn=document.createElement('button');
        minusBtn.innerText='-'
        minusBtn.addEventListener('click',(ele)=>minus(data[i].id,priceEle));
        let addBtn=document.createElement('button');
        addBtn.innerText='+'
        addBtn.addEventListener('click',()=>add(data[i].id,priceEle));
        totalCount=totalCount+parseInt(data[i].price);
        totalEle.innerText= totalCount
        container.append(imgElem,titleElem,minusBtn,priceEle,addBtn);
        parentElement.append(container);

    }
}
function minus(id,ele){
    let findElement=data.find((elem)=>elem.id==id);
    ele.innerText = ele.innerText-findElement.price;
    calculateTotal()
}
function add(id,ele){
    let findElement = data.find((elem)=>elem.id==id);
    ele.innerText = parseInt(ele.innerText)+parseInt(findElement.price);
    calculateTotal()

}
function calculateTotal(){
    totalCount=0;
    let allele=document.getElementsByClassName('price');
    for( let i=0;i<allele.length;i++){
        totalCount=totalCount+parseInt(allele[i].innerText);

    }
    totalEle.innerText=totalCount

}
dataToChange()