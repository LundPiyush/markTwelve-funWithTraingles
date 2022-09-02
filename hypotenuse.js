const sideOne = document.querySelector("#input1");
const sideTwo = document.querySelector("#input2");
const btnCalculate = document.querySelector("#btn-calculate");
const message = document.querySelector("#message")

function calculateHypotenuse(){
    var result = Math.sqrt(Number(sideOne.value)**2 + Number(sideTwo.value)**2)
    message.innerText =" Hypotenuse is " + result.toFixed(2)
}

function validateInputs(){
    if(sideOne.value === '' || sideTwo.value === '')
        message.innerText = "Please enter length of sides"
    else if(Number(sideOne.value)<=0 || Number(sideTwo.value)<=0)
        message.innerText = "Length of side should be greater than zero"
    else
        calculateHypotenuse()
}

btnCalculate.addEventListener('click',validateInputs)