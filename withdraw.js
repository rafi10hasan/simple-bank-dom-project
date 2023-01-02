document.getElementById('withdraw-btn').addEventListener('click',function(){
   
        const withdrawInputField=document.getElementById('input-withdraw-amount');
        const userWithdrawInput=withdrawInputField.value;
        const withdrawInputNow=parseFloat(userWithdrawInput);
        
        withdrawInputField.value=""
        
        if(isNaN(withdrawInputNow)){
            alert("please provide a valid number.")
            return;
        }

        
        
        const withdrawAmount=document.getElementById('withdraw-amount');
        const withdrawAmountNumber=parseFloat(withdrawAmount.innerText);

        const mainBalanceMoney=document.getElementById('main-balance-money');
        const mainBalanceNumber=parseFloat(mainBalanceMoney.innerText);

        if(withdrawInputNow>mainBalanceNumber){
            alert("baaper bank e taka sesh taratari deposit koro.nahole cholte parba na..");
            return;
        }
        const currentWithdrawAmount=withdrawAmountNumber+withdrawInputNow;
        withdrawAmount.innerText=currentWithdrawAmount;
        
        const mainBalanceAmount=mainBalanceNumber-withdrawInputNow;
        mainBalanceMoney.innerText=mainBalanceAmount;
})




  
   