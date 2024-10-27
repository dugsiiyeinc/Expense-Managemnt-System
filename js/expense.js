
const expenseName = document.querySelector("#expenseName");
const expenseAmount = document.querySelector("#expenseAmount");
const expenseDate = document.querySelector("#expenseDate");

const form= document.querySelector("#form");


let users=JSON.parse(localStorage.getItem("users")) || [];
const currentUser= JSON.parse(localStorage.getItem("currentUser"));
let allExpenseData = JSON.parse(localStorage.getItem("allExpenseData")) || {};
// console.log(currentUser);
//console.log(AllincomeData)

console.log(form)
let userCurent = document.querySelector("#userCurent");
console.log("currentUser");
// userCurent ? currentUser.fullname :  window.location.href="../html/login.html";
// if(!userCurent) return window.location.href="../html/login.html";
    userCurent.textContent =`User: ${currentUser.fullname}` 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(expenseName.value ==='' || expenseAmount.value === '' || expenseDate.value === ''){
       // alert("");
       Swal.fire({
        title: "Error!",
        text: "Please fill all fields!",
        icon: "error",
        confirmButtonText: "Try again"
      });
        return;
    }

if (!currentUser || !currentUser.fullname) {
    alert("No user is currently logged in");
    return;
}


const newExpense = {
    category: expenseName.value,
    amount: expenseAmount.value,
    date: expenseDate.value
};


const allExpenseData = JSON.parse(localStorage.getItem("allExpenseData")) || {};
const userExpenseDate = allExpenseData [currentUser.fullname] || [];

// console.log("waa usericome",userIncomeData)


    userExpenseDate.push(newExpense);

console.log("waaa allExpensedata", allExpenseData[currentUser.fullname])
allExpenseData[currentUser.fullname] =  userExpenseDate;



localStorage.setItem("allExpenseData", JSON.stringify(allExpenseData));
    expenseAmount.value= "";
    expenseName.value = "";
    expenseDate.value= "";


    AddDom(allExpenseData);



 });





 function AddDom(allExpenseData ) {
  
    let tbody= document.querySelector("#tbody")
    let userExpenseArray = allExpenseData[currentUser.fullname];
    console.log("userExpenseArray");

  
  
    if (!allExpenseData|| Object.keys(allExpenseData).length === 0 || !allExpenseData[currentUser.fullname]) {
        tbody.innerHTML = '<tr><td colspan="4">No Expanse data</td></tr>';
        return;
    }
 
  

    if (!userExpenseArray || userExpenseArray.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4">No Expense data</td></tr>';
        return;
    }

    tbody.innerHTML = '';

    userExpenseArray.forEach((expense, index) => {
        console.log(index);
        tbody.innerHTML += `
        <tr>
             <td>${index + 1}</td>
            <td>${expense.category}</td>
            <td>$${expense.amount}</td>
              <td>${expense.date}</td>
        </tr>`;
    });

   

   

 }

 document.addEventListener("DOMContentLoaded", () => {
    
    AddDom(allExpenseData)
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



















