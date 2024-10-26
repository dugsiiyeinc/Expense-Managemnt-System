const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const userName = document.querySelector(".user")
let totalincome= document.querySelector("#totalincome");
let totalExpenses= document.querySelector("#totalExpenses");
console.log("totalincome")
console.log("totalExpenses")
let onlineUser = JSON.parse(localStorage.getItem("currentUser")) || null;
console.log(userName)
userName.textContent = onlineUser.fullname;
let AllincomeUsers = JSON.parse(localStorage.getItem("allIncomeData")) ||{};
let AllExpenseUsers = JSON.parse(localStorage.getItem("allExpenseData")) ||{};

let incomeOnlineuser= AllincomeUsers[onlineUser.fullname];
let expenseOnlineuser= AllExpenseUsers[onlineUser.fullname];



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
})

   
   //User Total expanses
   let arrayExpense=[]
   expenseOnlineuser.forEach(element => {
       let userexpense= Number(element.amount)
       arrayExpense.push(userexpense)
       console.log(arrayExpense)
       let sum= arrayExpense.reduce(function(value, index){
           let valuenumber= Number(value)
           return valuenumber = valuenumber + index;
       })
      totalExpenses.textContent = `$${sum}` 
})


// 
menuToggle.addEventListener('click', () => {
    // sidebar.classList.remove('close')
    sidebar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    //sidebar.classList.add('close');
});


const logouts = document.querySelectorAll("#logout");
console.log(logouts);
logouts.forEach(logout => {
    logout.addEventListener("click", () =>{
   
        console.log("welcome")
         localStorage.removeItem("currentUser");
         window.location.href="../html/login.html"
    })
})




