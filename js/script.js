const email = document.getElementById('email');
const password = document.getElementById('password');

const  loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event)=>{
    event.preventDefault();


    // const emails= JSON.parse(localStorage.getItem('email')) || [];
    // const email = emails.find(eml => eml.email === email.value && eml.password === password.value);

    const users= JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(usr => usr.email === email.value && usr.password === password.value);

    if(!email){
        alert('invalid credential');
        return;
    }

    window.location.href = "../html/.dashboard.html";
})