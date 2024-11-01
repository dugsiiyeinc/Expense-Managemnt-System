
let tbody= document.querySelector("#tbody");

let allIncomeData= JSON.parse(localStorage.getItem("allIncomeData")) || {};
let AllexpenseUser= JSON.parse(localStorage.getItem("allExpenseData")) || {};
let onlineUsers= JSON.parse(localStorage.getItem("currentUser")) || [];
let user= document.querySelector(".user")
if(!onlineUsers){
    alert("No user is currently logged in");
    return;
}else{
    user.innerHTML=onlineUsers.fullname;
}
let incomeuserOnline= allIncomeData[onlineUsers.fullname] || [];

let expenseuserOnline= AllexpenseUser[onlineUsers.fullname] || [];
let tbodyExpense= document.querySelector("#tbodyExpense");
let incomereport= document.querySelector("#incomereport");

let expenseReport = document.querySelector("#expenseReport")


let btndaily= document.querySelector("#btn-daily")


let date= new Date();


let formattedToday = date.toISOString().split('T')[0];
console.log(formattedToday)




function helidincome(){
    incomeuserOnline.forEach(function(income, index){
        //console.log(income);
        let incomeDate = new Date(income.date)
        let formattedIncomeDate = incomeDate.toISOString().split('T')[0];
       

       if(formattedIncomeDate == formattedToday ){
        //console.log("income", income.source)
       tbody.innerHTML+=`

       <tr>
         <td>${index + 1}</td>
         <td>${income.source}</td>
         <td>${income.date}</td>
         <td>$${income.amount}</td>
     </tr> 
     `
       
       


       }  
      
    })
}

    
//console.log("expenseoline waaaaaaaaaaaaaaaaaaaaaaaaaaa", expenseuserOnline)
function helidexpense(){


    expenseuserOnline.forEach(function (expense, index){
       // console.log("expense waa", expense)
       let ExpenseDate = new Date(expense.date)
       let formattedExpenseDate = ExpenseDate.toISOString().split('T')[0];

        if(formattedToday  == formattedExpenseDate){
           // console.log("expense", expense.date)
            
           tbodyExpense.innerHTML+=`
    
           <tr>
             <td>${index + 1}</td>
             <td>${expense.category}</td>
             <td>${expense.date}</td>
             <td>$${expense.amount}</td>
         </tr> 
         `
 }  

    })

}



btndaily.addEventListener("click", function(){
    incomereport.textContent='Report Daily Income';
    expenseReport.textContent='Report Daily Expense';
    tbody.innerHTML='';
    tbodyExpense.innerHTML='';
    helidincome();
    helidexpense()

})

    document.addEventListener('DOMContentLoaded', function(){
  
        helidincome();
        helidexpense()
        
        
    
        
    })
