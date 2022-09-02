const sideOne = document.querySelector("#input1");
const sideTwo = document.querySelector("#input2");
const btnCalculate = document.querySelector("#btn-calculate");
const message = document.querySelector("#message")

function calculateHypotenuse(){
    var result = Math.sqrt(sideOne.value**2 + sideTwo.value**2)
    message.innerText =" Hypotenuse is " + result
}

function validateInputs(){
    if(sideOne.value === '' || sideTwo.value === '')
        message.innerText = "Please enter length of sides"
    else if(sideOne.value<=0 || sideTwo.value<=0)
        message.innerText = "Length of side should be greater than zero"
    else
        calculateHypotenuse()
}

btnCalculate.addEventListener('click',validateInputs)