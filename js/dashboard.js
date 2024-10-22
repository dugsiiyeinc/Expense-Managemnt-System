const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
let totalincome= document.querySelector("#totalincome");
console.log(totalincome)
let onlineUser= JSON.parse(localStorage.getItem("Currentuser")) || null;

console.log(onlineUser);
let AllincomeUsers = JSON.parse(localStorage.getItem("allIncomeData")) ||{};

let incomeOnlineuser= AllincomeUsers[onlineUser.fullname];



//User Total Income
let arrayIncome=[]
incomeOnlineuser.forEach(element => {
    let userincome= Number(element.amount)
    arrayIncome.push(userincome)
    console.log(arrayIncome)
    let sum= arrayIncome.reduce(function(value, index){
        let valuenumber= Number(value)
        return valuenumber = valuenumber + index;
    })
   totalincome.textContent = `$${sum}`

   
   
});


// 
menuToggle.addEventListener('click', () => {
    // sidebar.classList.remove('close')
    sidebar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    //sidebar.classList.add('close');
});


let logout = document.querySelector("#logout");
console.log(logout)
logout.addEventListener("click", ()=>{
   
    console.log("welcome")
     localStorage.removeItem("Currentuser");
     window.location.href="../html/login.html"
})



