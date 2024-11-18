const email = document.getElementById('email');
const password = document.getElementById('password');

const  loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(email.value==='' || password.value===''){
      Swal.fire({
          title: "Error!",
          text: "Please fill in all fields!",
          icon: "error",
          confirmButtonText: "Try again"
        });
      return;
  }


    const users = JSON.parse(localStorage.getItem("users"));

    const user = users.find(usr => usr.email === email.value && usr.password === password.value);

    // if(!user){
    //     alert('invalid credential');
    //     return;
    // }
  

    if(!user){
        Swal.fire({
            title: "Error!",
            text: "Invlalid Credentials!",
            icon: "error",
            confirmButtonText: "Try again"
          });
        return;
    }
    console.log(user.fullname);
    localStorage.setItem("currentUser", JSON.stringify(user));

    window.location.href = "../html/dashboard.html";
})