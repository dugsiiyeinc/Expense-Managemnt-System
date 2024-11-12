const menuToggle = document.querySelector("#menu-toggle")
console.log(menuToggle)
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const userName = document.querySelector(".user")
let totalincome= document.querySelector("#totalincome");
let totalExpenses= document.querySelector("#totalExpenses");
let balance = document.querySelector('#balance');
menuToggle.addEventListener('click', () => {
    // sidebar.classList.remove('close')
    sidebar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    //sidebar.classList.add('close');
});


 const logoutdashboard = document.querySelectorAll("#logoutdashboard");
//  logoutdashboard.textContent = 'welcome'
 //console.log("logoutdashboard", logoutdashboard)
 logoutdashboard.forEach(log =>{
    log.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        window.location.href = "../html/login.html";
        //console.log("current")
    })
 })
 
//  logoutdashboard.addEventListener("click", () => {

//     localStorage.removeItem("currentUser");
//     window.location.href = "../html/login.html";
//     console.log("current")
// });


// console.log(logouts);
// logouts.forEach(logout => {
//     logout.addEventListener("click", () =>{
   
//         console.log("welcome")
//          localStorage.removeItem("currentUser");
//          window.location.href="../html/login.html"
//     })
// })

//console.log("totalincome")
//console.log("totalExpenses");

let onlineUser = JSON.parse(localStorage.getItem("currentUser")) || null;
if(!onlineUser){

    window.location.href = "../html/login.html";
    
  }else{
     ///userCurent.textContent = currentUser.fullname;
     userName.textContent = onlineUser.fullname;
  
  }
console.log(userName)



let AllincomeUsers = JSON.parse(localStorage.getItem("allIncomeData")) ||{};
let AllExpenseUsers = JSON.parse(localStorage.getItem("allExpenseData")) ||{};

let incomeOnlineuser= AllincomeUsers[onlineUser.fullname] || [];
let expenseOnlineuser= AllExpenseUsers[onlineUser.fullname] || [];
console.log("expenseOnlineuser",  expenseOnlineuser)



//User Total Income
let arrayIncome=[]
let totalIncome= null;
console.log("total income", totalIncome)
incomeOnlineuser.forEach(element => {
    let userincome= Number(element.amount)
    arrayIncome.push(userincome)
    console.log(arrayIncome)
    totalIncome = arrayIncome.reduce(function(value, index){
        let valuenumber= Number(value)
        return valuenumber = valuenumber + index;
    })
    
   totalincome.textContent = `$${totalIncome}`
   
   document.getElementById('balance').textContent = `$${totalIncome}`;
})

   
   //User Total expanses
   let arrayExpense=[]
   let totalExpense;
   expenseOnlineuser.forEach(element => {
       let userexpense= Number(element.amount)
       arrayExpense.push(userexpense)

      // console.log(arrayExpense)
   

       console.log(arrayExpense)
       totalExpense = arrayExpense.reduce(function(value, index){

           let valuenumber= Number(value)
           return valuenumber = valuenumber + index;
       })
      totalExpenses.textContent = `$${totalExpense}`
      
})
//balance

    document.getElementById('balance').textContent = `$${totalIncome-totalExpense}`;



// 











