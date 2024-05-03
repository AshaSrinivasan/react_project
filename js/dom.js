// const form=document.getElementById('form');
// const username=document.getElementById('username')
// const email=document.getElementById('email')
// const password=document.getElementById('password')
// const password2=document.getElementById('password2')

// function main(){
// submit_btn.addEventListener('click',function(){
//     let  ans1=username.value
//     if(ans1==''){
//         newele.innertext='please fill out this field'
//     }
//     else{
//         newele.innertext=''

//     }

// })
// }
// main()

// const isValidEmail=(email)=>{
//     return String(email)
//     .toLowerCase()
//     .match(
//         /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//     )
// }


// function main1 () {
//     submit_btn.addEventListener('click',function(){
//         if (usernameValue === ''){
//             setErrorFor(username , 'username is requried')
    
//         }
//         else{
//            setSuccessFor(username)
//         }
//         if (emailValue === '') {
//             setErrorFor(email, 'Email is requried')
//         }
//         else if (!isValidEmail(emailValue)){
//             setErrorFor(email, 'provide a valid email address')
    
//         }
//         else{
//             setSuccessFor(email)
//         }
//         if (password===''){
//             setErrorFor(password,'password is required')
//         }
//         else if(passwordValue.length<8){
//             setError(password, 'password must be at least 8 character')
//         }
//         else {
//             setSuccessFor(password)
//         }
//         if (password2Value === ''){
//             setErrorFor(password2,'please confirm your password')
//         }
//         else if(password2Value !== passwordValue){
//             setErrorFor(password2, "password doesn't match")
//         }
//         else{
//             setSuccessFor(password2)
//         }
      

//     })
   

// }
// main1()
// function setErrorFor ( input , message ){
//     const inputControl=input.parentelement;
//     const small = inputControl.queryselector('error');


//     small.innertext = message;
//     inputControl.className='input_control error'
// }
// function setSuccessFor(input){
//     const inputControl = input.parentelement;
//     inputControl.className='input_control success'
   
// }

const form=document.getElementById('form');
const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const password2=document.getElementById('password2')



let button = document.querySelector('.submit') 
 button.addEventListener('click',function(){
    let ele=document.getElementById('userename').value
if (ele=="") {
    console.log("hjgfhjgklkghf")
    document.querySelector('.device').innerText="error"
}
})    

    
