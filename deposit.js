document.getElementById('deposit-btn').addEventListener('click',function(){
   

   let depositAmount=document.getElementById('input-deposit-amount');
   let inputDepositAmount=depositAmount.value;
   let previousDepositAmount=parseFloat(inputDepositAmount);

   if(isNaN(previousDepositAmount)){
    alert("please provide a valid input");
    return;
   }

   let displayDepositAmount=document.getElementById('deposit-amount');
   let currentDepositAmount=parseFloat(displayDepositAmount.innerText);
   let currentDepositTotal=(previousDepositAmount+currentDepositAmount);
    displayDepositAmount.innerText=currentDepositTotal;

    depositAmount.value=" ";

    let mainAmount=document.getElementById('main-balance-money');
    let mainBalanceAmount=parseFloat(mainAmount.innerText);
    let mainBalanceTotal=mainBalanceAmount+previousDepositAmount;
    mainAmount.innerText=mainBalanceTotal;
  
})