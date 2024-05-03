let emailInput = document.getElementById("email");
let btn = document.getElementById('confirmBtn');
let warning = document.getElementById('warn');
let form = document.querySelector('.item');
let message = document.querySelector('.message');
let succesBtn = document.getElementById('succes-btn')
let email = document.querySelector('.highlight')
function verifyEmail(){
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if(regex.test(emailInput.value) == true){
        warning.classList.add('d-none')
        emailInput.classList.remove('invalid')
        return true
    }
    else{
        warning.classList.remove("d-none")
        emailInput.classList.add('invalid')
        return false;
    }
}
emailInput.addEventListener("input",verifyEmail)
btn.addEventListener('click',()=>{
    let valid =verifyEmail();
    if(valid == true){
        form.classList.add('d-none');
        message.classList.remove('d-none');
        email.innerHTML=emailInput.value;
    }
    else{
        form.classList.remove('d-none');
        message.classList.add('d-none');
    }
})
succesBtn.addEventListener('click',()=>{
    message.classList.add('d-none');
    form.classList.remove('d-none');
    emailInput.value=''
})