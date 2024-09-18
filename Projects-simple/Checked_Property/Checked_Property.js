// .checked = property that determines the checked state of an 
//              HTML checkbox or radio button element

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const gotymeBtn = document.getElementById("gotymeBtn");

const mySubmit = document.getElementById("mySubmit");

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `You are subscribed!`;
    }else{
        subResult.textContent = `You are NOT subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }else if(mastercardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard`;
    }else if(gotymeBtn.checked){
        paymentResult.textContent = `You are paying with Go tyme`;
    }
}