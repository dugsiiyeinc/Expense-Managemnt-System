let registerForm = document.querySelector("#registerForm");
let Fullname = document.querySelector("#fullname")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let confirmPassword = document.querySelector("#confirmpassword");

console.log(password);
console.log(confirmPassword);

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
   
    if(Fullname.value == '' || email.value == '' || password.value == '' || confirmPassword.value == '') {
        Swal.fire({
            title: "Error!",
            text: "Please fill in all fields!",
            icon: "error",
            confirmButtonText: "Try again"
          });
        return;
    }

    let fullnameinput= Fullname.value;
   // console.log(fullnameinput)
  const     fullnameCount  = fullnameinput.trim().split(/\s+/).filter(function(word){
        return word.length >0 ;
        //console.log(word.length)
        //return word.length > 0; 

    }).length;

     
    if(fullnameCount <2) {
        Swal.fire({
            title: "Error!",
            text: "Fullname must contain at least 2 words",
            icon: "error",
            confirmButtonText: "Try again"
          });
        //alert("Fullname must contain at least 2 words");
        return;
    };

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (!emailPattern.test(email.value)) {
    Swal.fire({
        title: "Error!",
        text: "Please enter a valid email address!",
        icon: "error",
        confirmButtonText: "Try again"
      });
   // alert("Please enter a valid email address");
    return;
}


const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

if (!passwordPattern.test(password.value)) {
    Swal.fire({
        title: "Error!",
        text: "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters",
        icon: "error",
        confirmButtonText: "Try again"
      });
//alert("Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters.");
    return;
}

//A1b!2cD@
// Contains at least one uppercase letter (A, D)
// Contains at least one lowercase letter (b, c)
// Contains at least one number (1, 2)
// Contains at least one special character (!, @)
// At least 8 characters in length
//K1ng$L@nd
//B!gTree9
if(password.value  !== confirmPassword.value) {
    Swal.fire({
        title: "Error!",
        text: "Passwords do not match!",
        icon: "error",
        confirmButtonText: "Try again"
      });
    //alert("Passwords do not match");
    return;
}



const user={
    fullname: Fullname.value,
    email: email.value,
    password: password.value
}

let users=JSON.parse(localStorage.getItem("users")) || [];

let existingUser= users.find(user => user.fullname === Fullname.value || user.email === email.value)

if(existingUser){
    Swal.fire({
        title: "Error!",
        text: "User already exists!",
        icon: "error",
        confirmButtonText: "Try again"
      });
    //alert("User already exists");
    return;
}

console.log(users)

users.push(user)



localStorage.setItem("users", JSON.stringify(users));

Window.location.href='../html/login.html';



})