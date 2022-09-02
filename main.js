const Inputangle1 = document.querySelector("#input-angle1");
const Inputangle2 = document.querySelector("#input-angle2");
const Inputangle3 = document.querySelector("#input-angle3");
const btnCheck = document.querySelector("#btn-check");
const message = document.querySelector("#message");

function validate(){
    if(Inputangle1.value ==='' || Inputangle2.value ==='' || Inputangle3.value ==='' )
        message.innerText = 'Enter all three values'
    else if(Number(Inputangle1.value)<=0 || Number(Inputangle2.value)<=0 || Number(Inputangle3.value)<=0)
        message.innerText = "Angles value should be greater than zero";
    else
        calculateSum()
}

function calculateSum(){
    if(Number(Inputangle1.value) + Number(Inputangle2.value) + Number(Inputangle3.value) === 180)
        message.innerText = "Angles form a triangle";
    else
        message.innerText =  "Angles do not form a triangle";
}

btnCheck.addEventListener('click',validate);

