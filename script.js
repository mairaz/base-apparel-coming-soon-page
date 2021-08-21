const form = document.querySelector('#form');
const email = document.querySelector('#email');



form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const emailValue = email.value
    if(!validateEmail(emailValue)){
        form.setAttribute('class','error')
    }else{
        form.removeAttribute('class','error')  
        form.reset()
    }
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
form.classList.contains()