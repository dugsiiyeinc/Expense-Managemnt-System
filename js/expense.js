const form= document.querySelector("#form");
const expenseName = document.querySelector("#expenseName");
const expenseAmount = document.querySelector("#expenseAmount");
const expenseDate = document.querySelector("#expenseDate");
let userCurent = document.querySelector("#userCurent");
let buttonexpense= document.querySelector("#addExpense");
// let updateButton= document.querySelector("#update-expense");
// console.log(buttonexpense)


let user = document.querySelector(".user");
let CurrentUser= JSON.parse(localStorage.getItem("currentUser")) || {};
let users=JSON.parse(localStorage.getItem("users")) || [];


const currentUser= JSON.parse(localStorage.getItem("currentUser"));
if(!currentUser){

  window.location.href = "../html/login.html";
  
}else{
   userCurent.textContent = currentUser.fullname;
   user.textContent= currentUser.fullname;


}
let allExpenseData= JSON.parse(localStorage.getItem("allExpenseData")) || {};

console.log(form)
console.log("currentUser");
    userCurent.textContent =`User: ${currentUser.fullname}` 

    buttonexpense.addEventListener("click", (e) => {
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
    id: Date.now(),
    category: expenseName.value,
    amount: expenseAmount.value,
    date: expenseDate.value
};

let income= JSON.parse(localStorage.getItem("allIncomeData")) || {};
    let incomeUser= income[CurrentUser.fullname] || [];


    let sumIncome=[];
    let sum= null;

    incomeUser.forEach(element => {
       let incomeAmount= Number(element.amount);
       sumIncome.push(incomeAmount);
       console.log("sumincome", sumIncome);
        sum= sumIncome.reduce(function(value, index){
        
       return value + index;
       
    })

   


});


    if(expenseAmount.value  >= sum  ) {
    Swal.fire({
        title: "Error!",
        text: "Not enough income to cover this expense!",
        icon: "error",
        confirmButtonText: "Try again"
      });
      expenseName.value = "";
      expenseAmount.value = "";
      expenseDate.value = "";
     

       return;
   }
 else{

const allExpenseData = JSON.parse(localStorage.getItem("allExpenseData")) || {};
const userExpenseData = allExpenseData[currentUser.fullname] || [];
//console.log("waa usericome",userIncomeData)


userExpenseData.push(newExpense);

//console.log("waaa all icomedata", allIncomeData[currentUser.fullname])
allExpenseData[currentUser.fullname] = userExpenseData;



localStorage.setItem("allExpenseData", JSON.stringify(allExpenseData));
   expenseName.value = "";
   expenseAmount.value = "";
   expenseDate.value = "";


    AddDom(allExpenseData);


 }
 });





 function AddDom(allExpenseData) {
  
    let tbody= document.querySelector("#tbody")
    let userExpenseArray = allExpenseData[currentUser.fullname];
  //  console.log(userIncomeArray)

  
  
    tbody.innerHTML = '';

    if (!allExpenseData || Object.keys(allExpenseData).length === 0 || !allExpenseData[currentUser.fullname]) {
        tbody.innerHTML = '<tr><td colspan="5">No expense data</td></tr>';
        return;
    }
 
  

    if (!userExpenseArray || userExpenseArray.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5">No expense data</td></tr>';
        return;
    }
    userExpenseArray.forEach((expense, index) => {
        //console.log("income waa ",income)
      
        tbody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${expense.category}</td>
            <td class="income-amount">$${expense.amount}</td>
            <td>${expense.date}</td>
            
            
            <td><button class="delete" onclick="deleteExpense(${expense.id})">Delete</button></td>

        </tr>
        
        `;
    });

   

   

 }


 document.addEventListener("DOMContentLoaded", () => {
    
    AddDom(allExpenseData)
 });

 function deleteExpense(expense){
    const expenseData = allExpenseData[currentUser.fullname].find(exp => exp.id === expense);
    
let allExpenseDatadelete = JSON.parse(localStorage.getItem('allExpenseData')) || {};
let expensefilter = allExpenseDatadelete[currentUser.fullname].filter(item => item.id!== expense);

allExpenseDatadelete[currentUser.fullname] = expensefilter;

localStorage.setItem('allExpenseData', JSON.stringify(allExpenseDatadelete));

AddDom(allExpenseDatadelete);


console.log("expensefilter",expensefilter)

 }



 
 
        
         
        
//  function updateDom(expenseData, id) {
 
 

   
//     let allExpenseData = JSON.parse(localStorage.getItem('allExpenseData')) || {};
//     let userExpenses = allExpenseData[currentUser.fullname];

   
//     let targetExpense = userExpenses.find(item => item.id === id);
//     if (targetExpense) {
//         targetExpense.Name = expenseData.Name;
//         targetExpense.Amount = expenseData.Amount;
        
//         targetExpense.Datet = expenseData.Date;
        

       
//         localStorage.setItem("allExpenseData", JSON.stringify(allExpenseData));

//         expenseName.value='';
//         expenseAmount.value= '';
//         expenseData.value=''; 

//     }

  
     tbody.innerHTML = ""; 

   
    allExpenseData[currentUser.fullname].forEach((expense, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${expense.category}</td>
                <td class="expenseAmount">$${expense.amount}</td>
                <td>${expense.date}</td>
             
               
            <td><button class="delete" onclick="deleteExpense(${expense.id})">Delete</button></td>
            </tr>
        `;
    });



const logouts = document.querySelectorAll("#logout");
console.log(logouts);
logouts.forEach(logout => {
    logout.addEventListener("click", () => {
         localStorage.removeItem("currentUser");
         window.location.href="../html/login.html"
    })
})