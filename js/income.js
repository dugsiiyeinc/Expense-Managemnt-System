const form= document.querySelector("#form");
const incomeamount = document.querySelector("#income-amount");
const incomeSource = document.querySelector("#income-name");
const incomedate= document.querySelector("#income-date");
let userCurent = document.querySelector("#userCurent");
let buttonincome= document.querySelector("#add-income");
let updateButton= document.querySelector("#update-income");
console.log(buttonincome)



let users=JSON.parse(localStorage.getItem("users")) || [];
let user= document.querySelector(".user")

const currentUser= JSON.parse(localStorage.getItem("currentUser"));
if(!currentUser){

  window.location.href = "../html/login.html";
  
}else{
   userCurent.textContent = currentUser.fullname;
   user.textContent= currentUser.fullname;


}
let allIncomeData= JSON.parse(localStorage.getItem("allIncomeData")) || {};

console.log(form)
console.log("currentUser");
    userCurent.textContent =`User: ${currentUser.fullname}` 

    buttonincome.addEventListener("click", (e) => {
    e.preventDefault();
    if(incomeSource.value ==='' || incomeamount.value === '' || incomedate.value === ''){
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


const newIncome = {
    
    id: Date.now(),
    amount: incomeamount.value,
    source: incomeSource.value,
    date: incomedate.value
};


const allIncomeData = JSON.parse(localStorage.getItem("allIncomeData")) || {};
const userIncomeData = allIncomeData[currentUser.fullname] || [];
//console.log("waa usericome",userIncomeData)


userIncomeData.push(newIncome);

//console.log("waaa all icomedata", allIncomeData[currentUser.fullname])
allIncomeData[currentUser.fullname] = userIncomeData;



localStorage.setItem("allIncomeData", JSON.stringify(allIncomeData));
incomeamount.value = "";
     incomeSource.value = "";
    incomedate.value = "";


    AddDom(allIncomeData);



 });





 function AddDom(allIncomeData) {
  
    let tbody= document.querySelector("#tbody")
    let userIncomeArray = allIncomeData[currentUser.fullname];
  //  console.log(userIncomeArray)

  
  
    tbody.innerHTML = '';

    if (!allIncomeData || Object.keys(allIncomeData).length === 0 || !allIncomeData[currentUser.fullname]) {
        tbody.innerHTML = '<tr><td colspan="4">No income data</td></tr>';
        return;
    }
 
  

    if (!userIncomeArray || userIncomeArray.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6">No income data</td></tr>';
        return;
    }
    userIncomeArray.forEach((income, index) => {
        //console.log("income waa ",income)
      
        tbody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${income.source}</td>
            <td>${income.date}</td>
            <td class="income-amount">$${income.amount}</td>
            <td><button class="edit" onclick="EditIncome(${income.id})">Edit</button></td>
            <td><button class="delete" onclick="deleteIncome(${income.id})">Delete</button></td>

        </tr>
        
        `;
    });

   

   

 }


 document.addEventListener("DOMContentLoaded", () => {
    
    AddDom(allIncomeData)
 });

 function deleteIncome(income){
    const incomeData = allIncomeData[currentUser.fullname].find(item => item.id === income);
    
let allIncomeDatadelete = JSON.parse(localStorage.getItem('allIncomeData')) || {};
let incomefilter = allIncomeDatadelete[currentUser.fullname].filter(item => item.id!== income);

allIncomeDatadelete[currentUser.fullname] = incomefilter;

localStorage.setItem('allIncomeData', JSON.stringify(allIncomeDatadelete));

AddDom(allIncomeDatadelete);


console.log("incomefilter",incomefilter)

 }


 function EditIncome(income) {
     //console.log('Editing:', income);
     const incomeData = allIncomeData[currentUser.fullname].find(item => item.id === income);
 
    //  if (!incomeData) {
    //      console.error('Income data not found for the given ID:', income);
    //      Swal.fire({
    //          title: "Error!",
    //          text: "Income data not found!",
    //          icon: "error",
    //          confirmButtonText: "OK"
    //      });
    //      return;
    //  }
 
   
     incomeamount.value = incomeData.amount;
     incomeSource.value = incomeData.source;
     incomedate.value = incomeData.date;


     updateButton.addEventListener("click", (e) => {
         e.preventDefault();
 
         
         if (incomeSource.value === '' || incomeamount.value === '' || incomedate.value === '') {
             Swal.fire({
                 title: "Error!",
                 text: "Please fill all fields!",
                 icon: "error",
                 confirmButtonText: "Try again"
             });
             return;
         }
 
        
         incomeData.amount = incomeamount.value;
         incomeData.source = incomeSource.value;
         incomeData.date = incomedate.value;
 
        
         updateDom(incomeData, incomeData.id);
     });
 }
 function updateDom(incomeData, id) {
   // console.log("incomedata", incomeData)
 

   
    let allIncomeData = JSON.parse(localStorage.getItem('allIncomeData')) || {};
    let userIncomes = allIncomeData[currentUser.fullname];

   
    let targetIncome = userIncomes.find(item => item.id === id);
    if (targetIncome) {
        targetIncome.amount = incomeData.amount;
        targetIncome.source = incomeData.source;
        targetIncome.date = incomeData.date;

       
        localStorage.setItem("allIncomeData", JSON.stringify(allIncomeData));

        incomeSource.value='';
        incomedate.value= '';
        incomeamount.value=''; 

    }

  
     tbody.innerHTML = ""; 

   
    allIncomeData[currentUser.fullname].forEach((income, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${income.source}</td>
                <td>${income.date}</td>
                <td class="income-amount">$${income.amount}</td>
                <td><button class="edit" onclick="EditIncome(${income.id})">Edit</button></td>
            <td><button class="delete" onclick="deleteIncome(${income.id})">Delete</button></td>
            </tr>
        `;
    });
}


const logouts = document.querySelectorAll("#logout");
console.log(logouts);
logouts.forEach(logout => {
    logout.addEventListener("click", () => {
         localStorage.removeItem("currentUser");
         window.location.href="../html/login.html"
    })
})










