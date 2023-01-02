document.getElementById('submit-btn').addEventListener('click',function(){

    let emailField=document.getElementById('email-field');
    let passwordField=document.getElementById('password-field');
    
    let emailInput=emailField.value;
    let passwordInput=passwordField.value;

    if(emailInput==="baaperbank@.com" && passwordInput==='secret'){
        window.location.href='bank.html';
    }

    else{
        alert("please provide a valid email and password")
    }

})