const baseLength = document.querySelector("#input-base");
const heightLength = document.querySelector("#input-height");
const btnCalculate = document.querySelector("#btn-calculate");
const message = document.querySelector("#message")

function calculateArea(){
    var result = (Number(baseLength.value) * Number(heightLength.value)) / 2
    console.log(result)
    message.innerText = "Area of triangle is " + result + " cm²"
}

function validateInputs(){
    if(baseLength.value === '' || heightLength.value === '')
        message.innerText = "Please enter base and height"
    else if(Number(baseLength.value<=0) || Number(heightLength.value<=0))
        message.innerText = "Length should be greater than zero"
    else
        calculateArea()
}

btnCalculate.addEventListener('click',validateInputs)