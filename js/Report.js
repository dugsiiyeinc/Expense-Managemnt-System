let tbody= document.querySelector("#tbody");

let allIncomeData= JSON.parse(localStorage.getItem("allIncomeData")) || {};

let AllexpenseUser = JSON.parse(localStorage.getItem("allExpenseData")) || {};
let onlineUsers = JSON.parse(localStorage.getItem("currentUser")) || [];
let user = document.querySelector(".user")
if(!onlineUsers){
    window.location.href="../html/login.html";
}else{
    user.innerHTML=onlineUsers.fullname;
}



let incomeuserOnline= allIncomeData[onlineUsers.fullname] || [];

let expenseuserOnline= AllexpenseUser[onlineUsers.fullname] || [];
let tbodyExpense= document.querySelector("#tbodyExpense");
let incomereport= document.querySelector("#incomereport");
let btnMonthly = document.querySelector("#btn-Monthly");
let expenseReport = document.querySelector("#expenseReport")
let btnyearly = document.querySelector("#btn-yearly");

let btndaily= document.querySelector("#btn-daily")


let date= new Date();


let formattedToday = date.toISOString().split('T')[0];
console.log(formattedToday)

let formatMonth= formattedToday.split('-')[0]
console.log(formatMonth)

//let incomeDate = new Date(income.date)

//let formattedIncomeDate = incomeDate.toISOString().split('T')[0];
//let today= date.getDate();
let monthly= date.getMonth() + 1;
let yearly = date.getFullYear();


// console.log("waa income",today)
// console.log(today); 
// console.log("incomeonline user",   incomeuserOnline)


function helidincome(){
    tbody.innerHTML='';
    incomeuserOnline.forEach(function(income, index){
        //console.log(income);
        let incomeDate = new Date(income.date)
        let formattedIncomeDate = incomeDate.toISOString().split('T')[0];
        
        ///console.log(formattedIncomeDate);

       //let todaycorrect= income.date.split("-")[2];
       //console.log(todaycorrect == today);

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
    tbodyExpense.innerHTML='';


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
        helidexpense();
        
        
    
        
     })

 
   





btnMonthly.addEventListener("click", function(){
    tbody.innerHTML='';
    tbodyExpense.innerHTML='';
    incomereport.textContent='Monthly Report Income';
    expenseReport.textContent='Monthly Report Expense';
    incomeuserOnline.forEach(function(income, index){
        //console.log(income.date.split('-')[1])
       let getmonth =income.date.split('-')[1]
       let incomeDate= date.getMonth(income.date);
       console.log(incomeDate)
       if(monthly == getmonth) {

        tbody.innerHTML+=`

        <tr>
          <td>${index + 1}</td>
          <td>${income.source}</td>
          <td>${income.date}</td>
          <td>$${income.amount}</td>
      </tr> 
      `
       }
    });
    expenseuserOnline.forEach(function (expense, index){

        let getmonth =expense.date.split('-')[1]

        if(monthly == getmonth){

            tbodyExpense.innerHTML+=`
    
            <tr>
              <td>${index + 1}</td>
              <td>${expense.category}</td>
              <td>$${expense.amount}</td>
              <td>${expense.date}</td>
              
          </tr> 
          `
            

        }

    })

    
})
document.addEventListener('DOMContentLoaded', function(){
  
    helidincome();
    helidexpense();
    
    

    
})


btnyearly.addEventListener('click', function(){
    tbody.innerHTML='';
    tbodyExpense.innerHTML='';
    incomereport.textContent='Yearly Report Income';
    expenseReport.textContent='Yearly Report Expense';
    incomeuserOnline.forEach(function(income, index){
        //console.log(income.date.split('-')[0])
       let getyear =income.date.split('-')[0]
       if(yearly == getyear) {

        tbody.innerHTML+=`

        <tr>
          <td>${index + 1}</td>
          <td>${income.source}</td>
          <td>${income.date}</td>
          <td>$${income.amount}</td>
      </tr> 
      `


       }

    });



    expenseuserOnline.forEach(function (expense, index){
        let getyear = expense.date.split('-')[0]

        if(yearly == getyear){
            tbodyExpense.innerHTML+=`

               <tr>
             <td>${index + 1}</td>
             <td>${expense.category}</td>
               <td>$${expense.amount}</td>
             <td>${expense.date}</td>
             
         </tr> 

            
            
            `
        }
    })
})

document.addEventListener('DOMContentLoaded', function(){
  
    helidincome();
    helidexpense();
    
    

    
})

const logouts = document.querySelectorAll("#logout");
console.log(logouts);
logouts.forEach(logout => {
    logout.addEventListener("click", () =>{
   
        console.log("welcome")
         localStorage.removeItem("currentUser");
         window.location.href="../html/login.html"
    })
})